import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
} from 'reactstrap'
import formatDate from '../../utils/formatDate'

class Cards extends Component {
  render() {
    return (
      <Col lg={4}>
        <Card className="mt-2">
          <CardImg
            style={{ background: '#000' }}
            top
            width="100%"
            src={this.props.cards.image.url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle className="font-weight-bold">
              {this.props.cards.title}
            </CardTitle>
            <CardText>{this.props.cards.excerpt}</CardText>
            <CardText>
              <small className="text-muted">
                Published at {formatDate(this.props.cards._createdAt)}
              </small>
            </CardText>
            <Button color="warning" className="w-100">
              Read more
            </Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

Cards.propTypes = {
  cards: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }),
}

export default Cards
