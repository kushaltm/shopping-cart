import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, defineMessages } from 'react-intl';
const t = defineMessages({
  'client-info-view.brand': {
    id: 'client-info-view.creationdate',
    defaultMessage: 'Brand : {brand}',
    description: 'Label for client creation date',
  },
  'client-info-view.color': {
    id: 'client-info-view.color',
    defaultMessage: 'Color : {color}',
    description: 'Label for client creation date',
  },
  'client-info-view.category': {
    id: 'client-info-view.category',
    defaultMessage: 'Category : {category}',
    description: 'Label for client creation date',
  },
  'client-info-view.productname': {
    id: 'client-info-view.productname',
    defaultMessage: 'ProductName : {productname}',
    description: 'Label for client creation date',
  },
  'client-info-view.code': {
    id: 'client-info-view.code',
    defaultMessage: 'Id : {id}',
    description: 'Label for client creation date',
  }
});
const ClientInfo = ({
  clientData,
  isOneColumnLayout,
}) => {
  return (
    <div
      className={`col-xs-12 col-sm-6${isOneColumnLayout ? " col-sm-offset-3" : ""}`}
      id={`clientInfo-${clientData.id}`}>
      <div className='clientInfoTile'>
        <div className='clientTitleDiv'>
          <div>
            <FormattedMessage
            {...t['client-info-view.brand']}
            values={{brand: clientData.brand}} />
          </div>
          <div >
          <FormattedMessage
              {...t['client-info-view.color']}
              values={{color : clientData.color}} />
          </div>
          <div >
          <FormattedMessage
              {...t['client-info-view.category']}
              values={{category: clientData.category}} />
          </div>
          <div >
          <FormattedMessage
              {...t['client-info-view.productname']}
              values={{productname : clientData.productName}} />
          </div>
          <div >
          <FormattedMessage
              {...t['client-info-view.code']}
              values={{id : clientData.id}} />
          </div>
        </div>
      </div>
    </div>);
};
ClientInfo.propTypes = {
  clientData: PropTypes.object.isRequired,
  isOneColumnLayout: PropTypes.bool.isRequired,
};
export default ClientInfo;
