import React from "react";

const FloatButtom = props => {
  const { onClick, title, children } = props;
  return (
    <div className="open-search">
      {children ? children : <a onClick={onClick}>{title}</a>}
    </div>
  );
};

export default FloatButtom;
