import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Users({
  id,
  name,
  username,
  email,
  address,
  geo,
  phone,
  website,
  company,
  catchPhrase,
  bs,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {id} - {name}
        </Card.Title>
        <Card.Text>
          {username}
          <br />
          {email}
          <br />
          {address}
          <br />
          {geo}
          <br />
          {phone}
          <br />
          {company}
          <br />
          {'"' + catchPhrase + '"'}
          <br />
          {bs}
        </Card.Text>
        <Button variant="primary">{website}</Button>
      </Card.Body>
    </Card>
  );
}
