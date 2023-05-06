import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Posts({id, title, body, userId}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{id +' '+ ' '+ title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userId}</Card.Subtitle>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
