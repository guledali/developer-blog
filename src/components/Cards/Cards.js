import React from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Col,
} from 'reactstrap'

const Cards = ({ cards }) => {
  return (
    <Col lg={4}>
      <Card>
        <CardImg top width="100%" src={cards.image.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{cards.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Cards
