import React from 'react'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
} from 'reactstrap'

const Cards = ({ cards }) => {
  return (
    <Col lg={4}>
      <Card className="mt-2">
        <CardImg top width="100%" src={cards.image.url} alt="Card image cap" />
        <CardBody>
          <CardTitle className="font-weight-bold">{cards.title}</CardTitle>
          <CardText>{cards.excerpt}</CardText>
          <Button color="warning" className="w-100">
            Read more
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Cards
