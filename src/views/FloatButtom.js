import React from "react";

class FloatButtom extends React.Component {
  render() {
    const { onClick, title, children } = this.props;
    return (
      <div className="open-search">
        {children ? children : <a onClick={onClick}>{title}</a>}
      </div>
    );
  }
}

export default FloatButtom;
