import React from "react";
import PropTypes from "prop-types";
import ProductInfo from "./ProductInfoView";
export const ProductInfoContainer = ({
  isOneColumnLayout,
  ...props
}) => {
  const getproductData = () => {
    return props.clientData
  };
  return (
    <ProductInfo
      clientData={getproductData()}
      isOneColumnLayout={isOneColumnLayout}
    />
  );
};
ProductInfoContainer.propTypes = {
  clientData: PropTypes.object.isRequired,
  isOneColumnLayout: PropTypes.bool.isRequired,
};
export default ProductInfoContainer;
