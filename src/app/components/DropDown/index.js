import React from 'react';
import './index.scss';

function DropDown({ items, onChange }) {
  if (!items) {
    return null;
  }
  return (
    <select onChange={onChange}>
      {items.map((item, index) => (
        <option key={index} {...item} />
      ))}
    </select>
  );
}

export default DropDown;
