const Schema = (props) => ({
  title: 'Block 01',
  block: 'block01',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['url', 'title'],
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
  },
  required: [],
});

export default Schema;
