import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="full-footer">
      <div className="issues">
        <p>
          If your having issues visit out full <a href="">user guide</a> or join
          our <a href="">Telegram support</a>
        </p>
      </div>
      <div className="design-by">
        <i class="far fa-copyright"></i>
        <p>Design By Mike Criollo</p>
      </div>
    </div>
  );
}

export default Footer;
