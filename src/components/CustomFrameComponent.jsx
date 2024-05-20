import { useMemo } from "react";

const CustomFrameComponent = ({
  topicProduct,
  enterTopicProductPlacehol,
  propWidth,
  propFlex,
  propPadding,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propPadding, propMinWidth]);

  return (
    <div className="frame-parent10" style={frameDivStyle}>
      <div className="topicproduct-wrapper">
        <div className="topicproduct">{topicProduct}</div>
      </div>
      <div className="enter-topicproduct-wrapper">
        <input
          className="enter-topicproduct"
          placeholder={enterTopicProductPlacehol}
          type="text"
        />
      </div>
    </div>
  );
};

export default CustomFrameComponent;