import cx from 'classnames';
import React from 'react';
import Data from './Data';

const View = (props) => {
  const { data, blocksConfig, className, style } = props;

  // Try to find the selected variation object
  let variations = blocksConfig.block04.variations.filter(
    (item) => item.id === data.variation,
  );

  // In case there is some error on the variation id and nothing
  // is found, try to use the one marked as `default`
  variations =
    variations ||
    blocksConfig.block04.variations.filter((item) => item.default);

  // In case there is no selected variation and none is the default one
  // use a simple Data component to show the contents of the block
  const BodyTemplate = variations.length > 0 ? variations[0].template : Data;

  return (
    <div
      className={cx(
        'block',
        'block04',
        `block04-variation-${variations[0].id}`,
        className,
      )}
      style={style}
    >
      <BodyTemplate data={data} />
    </div>
  );
};

export default View;
