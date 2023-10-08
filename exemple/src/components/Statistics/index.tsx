import React from 'react';
import { Card, Col, Container, Row, Statistic } from 'react-craftify-core';


const Statistics = (props) => {
  return (
    <Container>
      <Card>
        <h1>Statistic</h1>

        <Row>
          <Col grid="md-6">
            <Statistic
              title="Tesla Inc"
              value={256.59}
              prevValue={235.20}
              currency="usd"
            />
          </Col>

          <Col grid="md-6">
            <Statistic
              title="Bitcoin"
              value={9099.76}
              prevValue={9129.14}
              currency="€"
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Statistics;
