import React from 'react';
import Card from '../../../../packages/components/Card/Card';
import "./Card.css"
import { Button } from 'react-craftify-core';

const CardComponent = () => {
  return (
    <div>
      <Card className="radius-md shadow divide-y color-slate">
        <Card.Header className="size-lg"  >
          Standard Plan
        </Card.Header>
        <Card.Body className="size-base withDivider">
          <h2  >$19.99/month</h2>
          <p  >Includes all basic features</p>
        </Card.Body>
        <Card.Footer className="size-sm"  >
          <button>Subscribe Now</button>
        </Card.Footer>
      </Card>

      <Card
        bordered={false}
        color="white"
        radius="lg"
        shadow="md"
        size="md"
        withDivider={true}
      >
            Your card content goes here 
      </Card>
      <div>
      <Card>
    <Card.Image
      alt="A beautiful image"
      caption="This is a beautiful image"
      mode="light"
      src="https://www.euractiv.com/wp-content/uploads/sites/2/2023/02/shutterstock_2212948463-1-800x450.jpg" />
 
  </Card>
      </div>

    </div>
  );
};

export default CardComponent;
