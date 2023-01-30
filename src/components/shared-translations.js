import {defineMessages} from 'react-intl';

const t = defineMessages({
  'shared.add': {
    id: 'shared.add',
    defaultMessage: 'Add',
  },
  'shared.search.client-id': {
    id: 'shared.search.client-id',
    defaultMessage: 'Search Product Name',
    description: 'Prompt text for product search'
  },
  'shared.search': {
    id: 'shared.search',
    defaultMessage: 'Search'
  },
  'shared.refresh': {
    id: 'shared.refresh',
    defaultMessage: 'Show all the products'
  },
  'product-info.addFirstProduct': {
    id: 'product-info.addFirstProduct',
    defaultMessage: 'Create your first product',
    description: 'Label for the add first procut',
  },
  'product-info.addAnotherProduct': {
    id: 'product-info.addAnotherProduct',
    defaultMessage: 'Create a new Product',
    description: 'Label for the add new product',
  }
});
export default t;