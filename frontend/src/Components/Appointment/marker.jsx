import React from "react";

const Marker = ({ number, service, active }) => {
  let marker;
  if (active == true) marker = <div className="marker active">{number}</div>;
  else marker = <div className="marker">{number}</div>;

  return (
    <div>
      {marker}
      <div>
        <p>{service}</p>
      </div>
    </div>
  );
};

export default Marker;
