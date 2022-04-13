import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const ServiceDetail = () => {
  const { singleServiceId } = useParams();

  return (
    <div>
        <h2>Welcome to Detail : {singleServiceId} </h2>
          <div className="text-center">
            <Link to='/checkout'>
                <Button className='m-5' variant="outline-primary">Proceed Checkout</Button>
            </Link>
        </div>
    </div>
  );
};

export default ServiceDetail;
