import React from "react";
import "./modal.css";

function Modal({ openModal, modalOpened, setModalOpened }) {
  return (
    <div className="full-modal">
      <i class="far fa-times-circle" onClick={() => openModal()}></i>
      <div className="modal-nav-guide-holder">
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
    </div>
  );
}

export default Modal;
