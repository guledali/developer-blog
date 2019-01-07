import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap'

storiesOf(`Components`, module).add(`bigCard`, () => (
  <Container fluid={true}>
    <Row>
      <Col lg={{ offset: 2, size: 8 }}>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://www.datocms-assets.com/8778/1546791237-php-example.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h3 className="text-center">
                Part of "When PHP Framework Sucks" series
              </h3>
            </CardTitle>
            <CardText className="p-2">
              I personally believe, and I already proved it, that separation
              from framework brings long-term financial benefit to the company.
              No matter what new framework version brings, or do we want to
              integrate our component with other framework or library, we can do
              that without any pain, but only if we separated our business logic
              from the framework. I recently had a presentation of my project
              which potentially can live as long as PHP lives (and not
              drastically change). The project is fully equipped with 100% unit
              test coverage + behavior tests to ensure that the list of features
              always works. Also, the project is so independent and abstracted
              from the framework, that we can appy it into another framework in
              a matter of one week. My company believes that this project gonna
              live for longer than five years, which already brings us to the
              point that we won't have any 'major refactoring" or "big
              rewriting." So if this not prove financial benefits I can't find
              any more obvious example.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
))
