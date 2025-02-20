// import { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";
// import {
//   FormControl,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
// } from "@mui/material";

// const handleToken = (token) => {
//   fetch("/payment/donate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ token, amount }),
//   })
// };

// <StripeCheckout
//   stripeKey={
//     "pk_test_51QgsuACom5u3vg5074MTOH2CWjbYNZnBsnW5bYkBLuPKNcwCyyY3WDmHHrLEw6oyBAGXPncRKWWiVs5DLTavbnMY00eDcZ6xif" ||
//     ""
//   }
//   token={handleToken}
//   name=""
//   panelLabel={`Pay`}
//   currency="USD"
//   amount={3000}
// ></StripeCheckout>;
