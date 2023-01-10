import React from "react";
import $ from "jquery";

export default function HeroSection() {
  $("#myvideo").hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
      this.removeAttribute("controls");
    } else {
      this.setAttribute("controls", "controls");
    }
  });
  return (
    <div className="hero-section">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div id="player-overlay">
              <video
                id="myvideo"
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
              >
              </video>
            </div>

            <div id="player-overlay-mobile">
              <video
                id="myvideo"
                muted
                autoPlay={"autoplay"}
                preLoad="auto"
                loop
              >
                <source
                  src="../Asserts/header-video-mobile.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="text-center">
             
              <a href="#">Chart</a>
              <a href="#">Telegram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
