import React from "react";
import { useLoaderData } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import NewsCard from "../Shared/NewsCard/NewsCard";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      <h4>{`Show news: ${news?.length}`}</h4>
      <NavDropdown
        title="Filter"
        className="mb-3 fw-bold"
        id="navbarScrollingDropdown"
      >
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      {news.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
