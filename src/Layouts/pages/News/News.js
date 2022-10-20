import Button from "react-bootstrap/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const singleNews = useLoaderData();
  const {
    _id,
    title,
    author,
    details,
    rating,
    total_view,
    category_id,
    image_url,
  } = singleNews;
  const { name, published_date, img } = author;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link
          className="text-white text-decoration-none"
          to={`/category/${category_id}`}
        >
          <Button variant="primary">Go Back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
