import React from 'react';

const noop = () => undefined;

function Button({ className, onClick = noop, children, type = 'button', value }) {
  return (
    <button className={className} type={type} value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
