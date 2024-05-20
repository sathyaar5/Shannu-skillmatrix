import React from "react";
import PropTypes from "prop-types";

const TopicProductContainer = ({ topicProduct, enterTopicProduct, arrowDown, propWidth, propFlex }) => {
  return (
    <div className="topic-product-container" style={{ width: propWidth, flex: propFlex }}>
      <div className="topic-product">{topicProduct}</div>
      <input className="enter-topic-product" placeholder={enterTopicProduct} />
      <img className="arrow-down-icon" src={arrowDown} alt="arrow down" />
    </div>
  );
};

TopicProductContainer.propTypes = {
  topicProduct: PropTypes.string.isRequired,
  enterTopicProduct: PropTypes.string.isRequired,
  arrowDown: PropTypes.string.isRequired,
  propWidth: PropTypes.string,
  propFlex: PropTypes.string,
};

TopicProductContainer.defaultProps = {
  propWidth: "100%",
  propFlex: "0",
};

export default TopicProductContainer;