import React from "react";
import { useParams } from "react-router";

const Service = () => {
  const { serviceName } = useParams();
  return (
    <div>
      <h1>this is single service details {serviceName}</h1>
    </div>
  );
};

export default Service;
