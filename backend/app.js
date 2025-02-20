const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const stripe = require('stripe')(
  'sk_test_51QgsuACom5u3vg50gLpkn4XMdTKgcPSlDvZ2TVaHBcf1z3LF5s7hUcDCURG9b7IgIHlJyoqcCLhjWdqpejvAjyfl000ZNmcG90'
)

app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST'] }))

mongoose.connect('mongodb://127.0.0.1:27017/calendar')

const busySchema = new mongoose.Schema({
  day: String,
  hour: String,
})

const busyModel = mongoose.model('BusyDate', busySchema, 'busy')

async function Run(res) {
  try {
    const users = await busyModel.find()
    busyModel.create
    res.send(users)
  } catch (e) {
    throw new Error(e)
  }
}

app.get('/calendar', (req, res) => {
  Run(res)
})

app.post('/create', async (req, res) => {
  let data = new busyModel(req.body)
  const result = await data.save()
  res.send(result)
})

app.post('/payment', async (req, res) => {
  try {
    const { service, cost, date, hour } = req.body

    if (!service || !cost || !date) {
      return res.status(400).json({ error: 'Missing service, cost or date' })
    }

    const product = await stripe.products.create({
      name: service,
    })

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: cost,
      currency: 'usd',
    })

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: price.id, quantity: 1 }],
      mode: 'payment',
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:5173',
      metadata: { date: date, hour: hour },
    })

    res.json({ url: session.url })
  } catch (error) {
    console.error('Stripe Error:', error)
    res.status(500).json({ error: error.message })
  }
})

app.get('/verify-payment', async (req, res) => {
  const sessionId = req.query.session_id
  if (!sessionId) {
    return res.status(400).json({ error: 'Missing session ID' })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid') {
      return res.json({ success: true, date: session.metadata.date, hour: session.metadata.hour })
    } else {
      return res.json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ error: 'Payment Failed!' })
  }
})

app.listen(5000, () => {})
