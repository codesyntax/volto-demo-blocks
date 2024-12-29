const Schema = () => {
  return {
    title: 'Block 05',
    block: 'block05',
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
  };
};

export default Schema;
