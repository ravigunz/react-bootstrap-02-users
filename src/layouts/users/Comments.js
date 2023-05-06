import React from "react";
import Card from "react-bootstrap/Card";

export default function Comments({ id, email, body }) {
  return (
    <Card>
      <Card.Header>{id}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{body}</p>
          <footer className="blockquote-footer">{email}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
