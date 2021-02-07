import React from 'react';
import mc from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={onClick} className={mc.Button} type="button">
        Load more
      </button>
    </div>
  );
}
