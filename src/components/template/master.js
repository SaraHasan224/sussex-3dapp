import React from "react";
import Header from "../headers/header-one";
import Breadcrubs from "../common/widgets/breadcrubs";
import Footer from "../footers/common/Footer";

const MasterLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      <Header topClass="top-header" logoName="logo.png" />
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />
      <>{children}</>
      <Footer
        footerClass={`footer-light `}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
      />
    </>
  );
};

export default MasterLayout;