import config from '@plone/volto/registry';

const Schema = () => {
  const variationsConfig = config.blocks.blocksConfig['block04'].variations;
  const variations = Object.keys(variationsConfig).map((variation) => [
    variationsConfig[variation].id,
    variationsConfig[variation].title,
  ]);
  return {
    title: 'Block 04',
    block: 'block04',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['url', 'title', 'variation'],
      },
    ],

    properties: {
      url: {
        title: 'URL',
        widget: 'url',
      },
      title: {
        title: 'Title',
      },
      variation: {
        title: 'Variation',
        type: 'choice',
        choices: variations,
      },
    },
    required: [],
  };
};

export default Schema;
