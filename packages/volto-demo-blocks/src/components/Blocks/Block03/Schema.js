const Schema = (props) => ({
  title: 'Block 02',
  block: 'block02',
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
