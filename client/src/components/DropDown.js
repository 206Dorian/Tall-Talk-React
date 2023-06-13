import React, { useState } from 'react';

const DropDown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleOpen}>Menu</button>
      {isOpen && (
        <div className="DropDown">
          {items.map((item, index) => (
            <a key={index} href={item.link}>{item.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
