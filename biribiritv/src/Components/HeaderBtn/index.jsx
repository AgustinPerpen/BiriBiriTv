import React from "react";
import { Link } from "react-router-dom";

import "./headerBtn.scss";

const HeaderBtn = (props) => {
  const { to, label } = props;

  return (
    <div className="headerbtn">
      <Link to={to}>
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;{label}&nbsp;</span>
          <span class="hover-text" aria-hidden="true">
            &nbsp;{label}&nbsp;
          </span>
        </button>
      </Link>
    </div>
  );
};

export default HeaderBtn;
