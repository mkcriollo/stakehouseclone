import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="full-home">
      <div className="image-half"></div>
      <div className="stake-info-holder">
        <div className="stake-info">
          <h1>Earn Rewards From StakeHouse</h1>
          <p>Entry price per StakeHouse: 1 SHB | 100 CBSN | NFT</p>
        </div>
        <div className="stake-action-holder">
          <a href="">
            If you dont have any tokens,get your free NFT by clicking here
          </a>
          <button>Join a StakeHouse</button>
        </div>
        <div className="houses-holder">
          <div className="house">
            <div className="elevate expand-border"></div>
            <div className="polygon expand-border"></div>
            <div className="mynt expand-border"></div>
          </div>
          <div className="house expand-border">
            <div className="club100 expand-border"></div>
            <div className="impossible expand-border"></div>
            <div className="wolf expand-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
