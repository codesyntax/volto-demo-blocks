import imagesSVG from '@plone/volto/icons/images.svg';

import Schema01 from './components/Blocks/Block01/Schema';

import View02 from './components/Blocks/Block02/View';
import Schema02 from './components/Blocks/Block02/Schema';

import View03 from './components/Blocks/Block03/View';
import Edit03 from './components/Blocks/Block03/Edit';

import View04 from './components/Blocks/Block04/View';
import Edit04 from './components/Blocks/Block04/Edit';
import Schema04 from './components/Blocks/Block04/Schema';
import VariationView0401 from './components/Blocks/Block04/VariationView01';

import View05 from './components/Blocks/Block05/View';
import Schema05 from './components/Blocks/Block05/Schema';
import VariationView0501 from './components/Blocks/Block05/VariationView01';
import VariationView0502 from './components/Blocks/Block05/VariationView02';

import View06 from './components/Blocks/Block06/View';
import Schema06 from './components/Blocks/Block06/Schema';
import VariationView0601 from './components/Blocks/Block06/VariationView01';
import VariationView0602 from './components/Blocks/Block06/VariationView02';
import schemaEnhancerBlock06Variation02 from './components/Blocks/Block06/enhancers';

const applyConfig = (config) => {
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['en'];
  config.settings.defaultLanguage = 'en';

  // Block 01
  // Block with schema referenced in here

  // This uses a simple View: it shows all properties of the schema and its values
  // This uses a simple EditView: it renders automatically a form with the fields set in the blockSchema
  config.blocks.blocksConfig.block01 = {
    id: 'block01',
    title: 'Block 01',
    //view: null,
    //edit: null,
    blockSchema: Schema01,
    icon: imagesSVG,
    sidebarTab: 1, // This signals the Volto UI to select by default the 'Blocks' tab
    group: 'common',
  };

  // Block 02
  // Block with custom view

  // This uses a custom component to render the view
  // Uses the default edit form to render the edit form
  config.blocks.blocksConfig.block02 = {
    id: 'block02',
    title: 'Block 02',
    view: View02,
    // edit: null;
    blockSchema: Schema02,
    icon: imagesSVG,
    sidebarTab: 1,
    group: 'common',
  };

  // Block 03
  // Block with custom edit form and view. We do not need the blockSchema here because we render it explicitely in the Edit component
  config.blocks.blocksConfig.block03 = {
    id: 'block03',
    title: 'Block 03',
    view: View03,
    edit: Edit03,
    //blockSchema: Schema03,
    icon: imagesSVG,
    sidebarTab: 1,
    group: 'common',
  };

  // Block 04
  // Block with variations in the schema

  // We add the `variations` field manually in the edit form

  config.blocks.blocksConfig.block04 = {
    id: 'block04',
    title: 'Block 04',
    view: View04,
    edit: Edit04,
    blockSchema: Schema04,
    icon: imagesSVG,
    sidebarTab: 1,
    group: 'common',
    variations: [
      {
        id: 'default',
        title: 'Default',
        isDefault: true,
        template: VariationView0401,
      },
    ],
  };

  // Block 05
  // Block with variations using the helper withBlockExtensions

  // In this case, the `withBlockExtensions` adds automatically a `variations` field
  // and saves its selected values in the props passed to the `View` component, so your view
  // component is almost dummy, and it just needs to call the template of the variation to render its value

  config.blocks.blocksConfig.block05 = {
    id: 'block05',
    title: 'Block 05',
    view: View05,
    //edit: Edit05,
    blockSchema: Schema05,
    icon: imagesSVG,
    sidebarTab: 1,
    group: 'common',
    variations: [
      {
        id: 'variation01',
        title: 'Variation 01',
        isDefault: true,
        template: VariationView0501,
      },
      {
        id: 'variation02',
        title: 'Variation 02',
        isDefault: false,
        template: VariationView0502,
      },
    ],
  };

  // Block 06
  // Block with variations and schemaEnhancing in one of them
  config.blocks.blocksConfig.block06 = {
    id: 'block06',
    title: 'Block 06',
    view: View06,
    //edit: Edit06,
    blockSchema: Schema06,
    icon: imagesSVG,
    sidebarTab: 1,
    group: 'common',
    variations: [
      {
        id: 'variation01',
        title: 'Variation 01',
        isDefault: true,
        template: VariationView0601,
      },
      {
        id: 'variation02',
        title: 'Variation 02',
        isDefault: false,
        template: VariationView0602,
        schemaEnhancer: schemaEnhancerBlock06Variation02,
      },
    ],
  };

  return config;
};

export default applyConfig;
