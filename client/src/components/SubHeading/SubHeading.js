import React from 'react';
import { images } from '../../constants'

function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
    </div>
  )
}

export default SubHeading;
