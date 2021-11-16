import React from "react";
import Steps from "../steps/steps";
import "./home.css";

function Home() {
  return (
    <>
      <div className="full-home">
        <div className="image-half">
          <div className="welcome-holder">
            <div className="welcome-panel">
              <p>Welcome to</p>
              <h1>StakeHouse</h1>
            </div>
          </div>
        </div>
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
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="elevate-front">
                    <div className="elevate expand-border"></div>
                  </div>
                  <div className="elevate-back">
                    <h1>Claim HouseTokens:</h1>
                    <h1>8 dETH / 8 SLOT</h1>
                    <a href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMjI0ODIxNDky">
                      <button>Join Stakehouse</button>
                    </a>
                  </div>
                </div>
              </div>
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
      <Steps />
    </>
  );
}

export default Home;
