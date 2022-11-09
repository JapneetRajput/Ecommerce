import React from "react";
import { useParams } from "react-router-dom";
export default function CategoryPage() {
  let { categoryname } = useParams();

  return <h1>{categoryname}</h1>;
}
