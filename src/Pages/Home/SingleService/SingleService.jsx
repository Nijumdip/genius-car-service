import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id => {
        navigate(`/singleService/${id}`);
    }

    return (
        <Col>
            <Card>
                <img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <p> Price : ${price}</p>
                </Card.Body>
                <Button onClick={() => navigateServiceDetail(id)} className='m-5' variant="outline-primary">Book: {name}</Button>
            </Card>
            </Col>
    );
};

export default SingleService;