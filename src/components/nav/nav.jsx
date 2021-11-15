import React from "react";
import "./nav.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">StakeHouse</div>
      <div className="nav-guide-holder">
        <a href="https://www.notion.so/3-Minute-Guide-How-to-Join-a-StakeHouse-273f063b08bc42ccac33996af05d62bc">
          <li>User Guide</li>
        </a>
        <a href="https://t.me/joinchat/CHND5nKU7csyMTVk">
          <li>Support Desk</li>
        </a>
        <a href="https://joinstakehouse.com/stat">
          <li>Stats</li>
        </a>
        <a href="https://blog.blockswap.network/">
          <li>Blog</li>
        </a>
      </div>
      <i class="fas fa-bars"></i>
    </div>
  );
}

export default NavBar;
