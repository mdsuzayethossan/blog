import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

function NewsCard({ news }) {
  const { _id, title, author, details, rating, total_view, image_url } = news;
  const { name, published_date, img } = author;
  return (
    <Card className="mb-5">
      <Card.Header>
        <Row className="align-items-center">
          <Col sm={8}>
            <div className="d-flex gap-3 align-items-center">
              <Image roundedCircle src={img} width={50}></Image>
              <h5>
                {name}
                <br></br>
                <span className="text-muted fw-light fs-6">
                  {published_date}
                </span>
              </h5>
            </div>
          </Col>
          <Col sm={4} className="text-end">
            <FaRegBookmark className="mx-3"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."} <br />
              <br />
              <Link
                className="bg-primary text-white text-decoration-none px-3 py-1 rounded"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col className="d-flex gap-3 align-items-center">
            <p>
              <FaStar className="text-warning"></FaStar>
            </p>
            <p>{rating.number}</p>
          </Col>
          <Col className="d-flex gap-3 align-items-center justify-content-end">
            <p>
              <FaRegEye></FaRegEye>
            </p>
            <p>{total_view}</p>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default NewsCard;
