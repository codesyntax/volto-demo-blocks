import React from 'react';
import withBlockExtensions from '@plone/volto/helpers/Extensions/withBlockExtensions';

import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';

import BlockView from './View';
import Schema from './Schema';

const BlockEdit = (props) => {
  const { block, data, onChangeBlock, selected } = props;
  return (
    <>
      <BlockView isEditMode={true} {...props}></BlockView>

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={Schema(props)}
          title={Schema(props).title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(BlockEdit);
