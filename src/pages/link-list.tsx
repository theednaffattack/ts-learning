import React from "react";
import { Route, Link, useParams } from "react-router-dom";
import "../style/link-list.css";
type LinkListProps = {};

function LinkList({}: LinkListProps) {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/parking-challenge">parking challenge</Link>
      </li>
    </ul>
  );
}

export default LinkList;
