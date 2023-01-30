import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import st from './shared-translations';
import AddTask from './AddTask';
import { useState  } from 'react';
import ProductInfoContainer from './ProductContainer';
const ProductView = ({
  productList,
  hasClients,
  isOneColumnLayout,
  showClientIdSearchInput,
  onChange,
  searchValue,
  onSearch,
  addTask,
  onClick,
}) => {
    const[showAddTask,setShowAddTask] = useState(false)
  const intl = useIntl();
  const addProductToggle=()=>setShowAddTask(!showAddTask);
  return (
    <div>
        <div id="product-list-section" className='clientListContainer'>
          <div className="row">
            {!isOneColumnLayout && hasClients && 
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <button
                     className='btn-default'
                     style={{ backgroundColor : showAddTask ? 'red' :'green'}}
                     onClick = {addProductToggle} >
                        { showAddTask ? 'Close' : 'Add Product'}
                     </button>
                    {showAddTask &&<AddTask onAdd={addTask}/>}
                </div>
              {showClientIdSearchInput && 
              <div className="col-xs-12 col-sm-6">
                <div className="adminSearch">
                  <div className="col-xs-9 col-sm-9">
                    <input
                      id="search-input"
                      name="client"
                      type="text"
                      placeholder={intl.formatMessage(st['shared.search.client-id'])}
                      label=""
                      onChange={onChange}
                    />
                  </div>
                  <div className={`col-xs-3 col-sm-3 button}`}>
                    <button
                      id="btn-save"
                      type="submit"
                      disabled={false}
                      className="btn btn-default"
                      onClick={onSearch}
                      title={intl.formatMessage(st['shared.search'])}
                    >
                      <FormattedMessage {...st['shared.search']} />
                    </button>
                  </div>
                  <div className={`col-xs-3 col-sm-3 button}`}>
                    <button
                      id="btn-save"
                      type="submit"
                      disabled={false}
                      className="btn btn-default"
                      onClick={onClick}
                      title={intl.formatMessage(st['shared.refresh'])}
                    >
                      <FormattedMessage {...st['shared.refresh']} />
                    </button>
                  </div>
                </div>
              </div>}
              <div className="clearfix" />
              {productList.map((product, index) => (
                <ProductInfoContainer
                  key={index}
                  clientData={product}
                  isOneColumnLayout={isOneColumnLayout}
                />
              ))}
            </div>} 
          </div>
        </div>
    </div>);
};
ProductView.propTypes = {
  productList: PropTypes.array.isRequired,
  hasClients: PropTypes.bool.isRequired,
  isOneColumnLayout: PropTypes.bool.isRequired,
  showClientIdSearchInput: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  
};

export default ProductView;
