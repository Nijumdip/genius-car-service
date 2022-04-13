import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container">
      <h1 className=" text-center text-primary mt-3 mb-5"> Our Services : {services.length} </h1>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Row xs={1} md={2} lg={3} className="g-4">
            {
            services.map(service => <SingleService
              key={service.id}
              service={service}
            ></SingleService>)
            }
        </Row>
      </div>
    </div>
  );
};

export default Services;
