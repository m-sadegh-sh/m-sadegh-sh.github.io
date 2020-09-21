import React from 'react';

export default function Header() {
  return (
    <div id="header">
      <span className="avatar"></span>
      <h1>Hey! I'm Mohammad</h1>
      <div className="container medium">
        <p>A high-effective <span role="img" aria-label="Coffee">☕</span> into <span role="img" aria-label="Bug">🐛</span> turner</p>
        <p>Someone so thirsty in tasting new DEV trends</p>
        <p>He's a perfectionist <span className="comment">{'//'} It's a weakness?...</span></p>
      </div>
    </div>
  );
}
