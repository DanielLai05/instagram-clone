import React, { useContext } from 'react'
import { Button, Image } from 'react-bootstrap';
import { ProfileContext } from '../App';

export default function IconButton({ isTop, isBottom, className, isProfile, onClick }) {
  let margin = 'light';
  const { image } = useContext(ProfileContext);

  if (isTop) {
    margin = 'light my-4'
  } else if (isBottom) {
    margin = 'light mt-auto mb-3'
  }
  return (
    <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
      {isProfile ?
        (<Image src={image} style={{ height: '24px' }} roundedCircle />) :
        (<i className={className} style={{ fontSize: "24px" }}></i>)
      }

    </Button>
  )
}
