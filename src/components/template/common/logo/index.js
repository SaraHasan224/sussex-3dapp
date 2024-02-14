import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  IMAGE_SRCS
} from "../../../../utils"

const LogoImage = ({ logo }) => {
  return (
    <Fragment>
      <Link to={"/"}>
        {/* <a> */}
        <img
          src={IMAGE_SRCS.COMPANY_LOGO}
          alt=""
          className="img-fluid"
        />
        {/* </a> */}
      </Link>
    </Fragment>
  );
};

export default LogoImage;
