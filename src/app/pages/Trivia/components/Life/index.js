import React from 'react';
import './index.scss';

function Life({ life }) {
  return (
    <div className="Life">
      {[...Array(life)].map((value, i) => (
        <span key={i} role="img" aria-label="heart icon">
          ❤️
        </span>
      ))}
    </div>
  );
}

export default Life;
