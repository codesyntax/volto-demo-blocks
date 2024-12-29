import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';
import cx from 'classnames';
import React from 'react';
import Data from './Data';

const View = (props) => {
  const { data, variation, className, style } = props;

  const BodyTemplate = variation?.template || Data;

  return (
    <div
      className={cx(
        'block',
        'block05',
        `block05-variation-${variation?.id}`,
        className,
      )}
      style={style}
    >
      <BodyTemplate data={data} />
    </div>
  );
};

export default withBlockExtensions(View);
