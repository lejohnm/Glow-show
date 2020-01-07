import React from 'react';
import {Card} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Venue3() {
    return (
        <Card className="card">
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Venue</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Artist</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    )
}

export default Venue3;