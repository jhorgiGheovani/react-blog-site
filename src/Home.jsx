import React from 'react';

export default function Home() {
  const handleClick = () => {
    console.log('Hello, Ninja!');
  };
  const handleClickAgain = (nama, e) => {
    console.log('Hello ' + nama, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button>
    </div>
  );
}
