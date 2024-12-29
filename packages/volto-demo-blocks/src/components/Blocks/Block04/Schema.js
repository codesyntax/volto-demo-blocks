import config from '@plone/volto/registry';
import messages from './messages';

const Schema = ({ intl }) => {
  const variationsConfig = config.blocks.blocksConfig['block04'].variations;
  const variations = Object.keys(variationsConfig).map((variation) => [
    variationsConfig[variation].id,
    variationsConfig[variation].title,
  ]);
  return {
    title: intl.formatMessage(messages.block04),
    block: 'block04',
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['url', 'title', 'variation'],
      },
    ],

    properties: {
      url: {
        title: intl.formatMessage(messages.URL),
        widget: 'url',
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
      variation: {
        title: intl.formatMessage(messages.variation),
        type: 'choice',
        choices: variations,
      },
    },
    required: [],
  };
};

export default Schema;
