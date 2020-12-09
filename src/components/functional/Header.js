import React from 'react';

const headerStyle = {
  backgroundColor: '#293746',
  color: '#fff',
  padding: '1.5rem 0.5rem',
  textAlign: 'center'
}

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Ma Todo-List</h1>
    </header>
  )
}

export default Header;
