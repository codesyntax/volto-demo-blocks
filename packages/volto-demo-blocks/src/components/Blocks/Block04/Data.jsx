import React from 'react';

const Data = ({ data }) => {
  return (
    <div>
      I am the Block view component!
      <ul>
        <li>Title: {data.title}</li>
        <li>URL: {data.url}</li>
      </ul>
    </div>
  );
};

export default Data;
