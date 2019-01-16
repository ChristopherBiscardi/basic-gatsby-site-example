import React from "react";

const SiteLayout = ({ children, ...props }) => (
  <div>
    <h1>My Site!</h1>
    {children}
  </div>
);

export default SiteLayout;
