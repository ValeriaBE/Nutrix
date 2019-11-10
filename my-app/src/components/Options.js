import React from 'react';

const MenuOptions = ({click, options, aClass}) => {
  return (
    <li  className="nav-item" onClick={click}>
      <button className={aClass} data-toggle="tab" href="#" role="tab" >{options}</button>
    </li>
  )
};

export default MenuOptions;