import React from 'react';
import { Card, Col, Container, Row, Statistic } from 'react-craftify-core';


const Statistics = (props) => {
  return (
    <Container>
    
        <h1>Statistic</h1>

        <Row>
          <Col grid="md-24">
            <Statistic
              title="Tesla Inc"
              value={256.59}
              prevValue={235.20}
              currency="usd"
            />
          </Col>
        </Row>
    
    </Container>
  );
};

export default Statistics;
