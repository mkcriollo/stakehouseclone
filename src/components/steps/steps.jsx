import React from "react";
import "./steps.css";

function Steps() {
  return (
    <div className="full-steps-holder">
      <div className="steps-holder">
        <h1>HOW TO ENTER</h1>
      </div>
      <div className="all-step">
        <div className="guide-step">
          <div className="steps">
            <div>
              <h3>1</h3>
              <p>
                Have Metamask ready to go. If you don’t have Metamask go
                <a href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxMjI0ODIxNDky">
                  {" "}
                  here
                </a>
                .
              </p>
            </div>
            <div>
              <h3>2</h3>
              <p>
                Hold 100 CBSN, 1 SHB, or request free access from our Telegram
                <a href="https://t.me/blockswap_tokenswolf_bot?start=JOINSTAKEHOUSE">
                  {" "}
                  bot
                </a>
                .
              </p>
            </div>
            <div>
              <h3>3</h3>
              <p>Select a StakeHouse from above.</p>
            </div>
          </div>
          <div className="steps">
            <div>
              <h3>4</h3>
              <p>Once in the StakeHouse Telegram type '/claim stake'.</p>
            </div>
            <div>
              <h3>5</h3>
              <p>You're now receiving rewards!</p>
            </div>
            <div>
              <h3>6</h3>
              <p>
                Repeat! You can join as many StakeHouses as you want to increase
                your rewards!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
