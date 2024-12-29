import cx from 'classnames';
import React from 'react';

const View = (props) => {
  const { data, className, style } = props;
  return (
    <div className={cx('block', 'block01', className)} style={style}>
      I am the Block view component!
      <ul>
        <li>Title: {data.title}</li>
        <li>URL: {data.url}</li>
      </ul>
    </div>
  );
};

export default View;
