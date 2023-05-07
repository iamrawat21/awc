import React, { useState, useEffect } from 'react';
import classnames from "classnames";

function ListPage() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // fetch list data and update state
    fetch('/api/list')
      .then(response => response.json())
      .then(data => setListData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>List Page</h1>
      <ul>
        {listData.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
