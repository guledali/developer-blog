import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from 'gatsby'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Components', module)
stories.addDecorator(withKnobs)
stories.add(`smallCards`, () => (
  <Col lg={4}>
    <Card className="mt-2">
      <CardImg
        style={{ background: '#000' }}
        top
        width="100%"
        src="https://www.datocms-assets.com/8778/1546791237-php-example.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle className="font-weight-bold">
          {text('Title', 'Part of When PHP Framework Sucks series')}
        </CardTitle>
        <CardText>
          {text('desc', 'When PHP Framework Sucks Series: How not to shape your app in the shape of the framework')}
        </CardText>
        <CardText>
          <small className="text-muted">{text('Date', 'Published at 2018-12-21')}</small>
        </CardText>
        <>
          <style type="text/css">
            {`
            .btn-warning {
              background-color: #f5da55;
              border-color: #f5da55;
              color: #323330
            }
          `}
          </style>
          <Button color="warning" className="w-100">
            <Link
              to={`/SinglePost/`}
              className="text-dark text-decoration-none"
            >
              Read more
            </Link>
          </Button>
        </>
      </CardBody>
    </Card>
  </Col>
)).addDecorator(withKnobs)
