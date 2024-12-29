const schemaEnhancerVariation02 = ({ formData, schema, intl }) => {
  schema.properties.color = {
    title: 'Color',
  };
  schema.fieldsets[0].fields.push('color');
  return schema;
};

export default schemaEnhancerVariation02;
