import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <div className='Main'>
      <Link to='/adopt'>
        <button>adopt</button>
      </Link>
    </div>
  );
}
