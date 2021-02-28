import React from 'react';

export default function Box(props) {
  function isAvailable() {
    return props.available ? !props.available : false;
  }
  return (
    <div className='box'>
      <img src={props.imageURL} alt='pet_photo' />
      <p>Name: {`${props.pet.name}`}</p>
      <p>Age: {`${props.pet.age}`}</p>
      <p>Breed: {`${props.pet.breed}`}</p>
      <p>Description: {`${props.pet.description}`}</p>
      <p>Story: {`${props.pet.story}`}</p>
      <button onClick={props.buttonClicked} disabled={isAvailable()}>
        Adopt
      </button>
    </div>
  );
}
