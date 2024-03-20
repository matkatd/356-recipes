import React from "react";

const Footer: React.FC = () => {
  return <footer style={footerStyle}>{/* Footer content goes here */}</footer>;
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "white",
  height: "40px",
  borderTop: "1px solid #f5f5f5",
};

export default Footer;
