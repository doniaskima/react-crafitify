import React, { useState } from 'react';
import { Button, Card, Container } from 'react-craftify-core';


const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const fakeLoading = async () => {
    toggleLoading();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toggleLoading();
  };

  return (
    <Container>
      <Card>
        <div className="componentBlock">
          <h3>Button</h3>
          <p className="componentDescr">To trigger an operation.</p>
          <Card>
            <div style={{ margin: '.5rem 0' }} className="buttonBlock">
              <Button onClick={() => alert('Button clicked!')}>Default</Button>
              <Button onClick={fakeLoading} loading={isLoading} type="primary">
                Primary
              </Button>
              <Button type="success">Success</Button>
              <Button type="danger">Danger</Button>
              <Button
                colors={{
                  mainColor: '#e056fd',
                  secondColor: '#fff',
                }}
              >
                Custom
              </Button>
            </div>
          </Card>

          <p style={{ marginTop: '3rem' }} className="componentDescr">
            Rounded buttons.
          </p>
          <Card>
            <div style={{ margin: '.5rem 0' }} className="buttonBlock">
              <Button onClick={() => alert('Button clicked!')} round>
                Default
              </Button>
              <Button loading type="primary" round>
                Primary
              </Button>
              <Button type="success" round>
                Success
              </Button>
              <Button type="danger" round>
                Danger
              </Button>
              <Button
                round
                colors={{
                  mainColor: '#00BCD4',
                  secondColor: '#fff',
                }}
              >
                Custom
              </Button>
            </div>
          </Card>

          <p style={{ marginTop: '3rem' }} className="componentDescr">
            Outlined buttons.
          </p>
          <Card>
            <div style={{ margin: '.5rem 0' }} className="buttonBlock">
              <Button outlined>Default</Button>
              <Button outlined type="primary">
                Primary
              </Button>
              <Button outlined type="success" round>
                Success
              </Button>
              <Button outlined type="danger" round>
                Danger
              </Button>
              <Button
                round
                outlined
                colors={{
                  mainColor: '#151515',
                  secondColor: '#ffffff',
                }}
              >
                Custom
              </Button>
            </div>
          </Card>
        </div>
      </Card>
    </Container>
  );
};

export default Buttons;
