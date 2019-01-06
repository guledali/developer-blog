import React, { Component } from 'react'
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
            src={this.props.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle className="font-weight-bold">
              {this.props.title}
            </CardTitle>
            <CardText>{this.props.short}</CardText>
            <CardText>
              <small className="text-muted">
                Published at {formatDate(this.props.date)}
              </small>
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
                Read more
              </Button>
            </>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Cards
