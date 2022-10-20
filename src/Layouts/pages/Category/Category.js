import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const news = useLoaderData();
  return <div>{news.length}</div>;
};

export default Category;
