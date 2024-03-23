import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Reciped © 2024</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "white",
  color: "black",
  height: "40px",
  borderTop: "1px solid #f5f5f5",
};

export default Footer;
