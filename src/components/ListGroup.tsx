/** @format */

import { useState } from "react";

function ListGroup() {
  const items = ['New York', 'San Francisco', 'London', 'Paris', 'Budapest'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length == 0 ? <p>No Items Found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => (setSelectedIndex(index))}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
