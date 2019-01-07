import React, { Component } from 'react'
import Navbar from './Navbar'
import Jumbo from './Jumbo'
import { graphql } from 'gatsby'
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

class SinglePost extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbo />
        <Container fluid={true}>
          <Row>
            <Col lg={{ offset: 2, size: 8 }}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={this.props.data.dato.article.image.url}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>
                    <h3 className="text-center">
                      {this.props.data.dato.article.title}
                    </h3>
                  </CardTitle>
                  <CardText className="p-2">
                    {this.props.data.dato.article.body}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SinglePost

export const query = graphql`
  query($articleID: DatoCMS_ItemId!) {
    dato {
      article(filter: { id: { eq: $articleID } }) {
        image {
          url
        }
        title
        body
      }
    }
  }
`
