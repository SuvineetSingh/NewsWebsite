import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default function SearchList(props) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <h4>{props.title}</h4>
      </ListGroup.Item>
    </ListGroup>
  )
}
