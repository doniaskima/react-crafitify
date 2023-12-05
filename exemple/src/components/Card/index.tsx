import React from 'react';
import Card from '../../../../packages/components/Card/Card';

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
    </div>
  );
};

export default CardComponent;
