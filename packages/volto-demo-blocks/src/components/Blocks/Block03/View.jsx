import cx from 'classnames';
import React from 'react';
import Data from './Data';

const View = (props) => {
  const { data, className, style } = props;

  return (
    <div className={cx('block', 'block03', className)} style={style}>
      <Data data={data} />
    </div>
  );
};

export default View;
