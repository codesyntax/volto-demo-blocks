import schema from './Schema';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { SidebarPortal } from '@plone/volto/components';
import Data from './Data';

// Here we use a 'Data' component
// This component renders the information of the block
// We use it both in the View and Edit components, not to write it twice.

const Edit = (props) => {
  const { onChangeBlock, block, data, selected } = props;
  return (
    <>
      <Data data={data} />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema()}
          title={schema().title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
