import React from "react";

export default function Roadmap() {
  return (
    <div className="roadmap" id="roadmap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>ROADMAP</h1>
          </div>
        </div>
        <div className="row">
           
         <div className="col-md-4 text-center">
            <h2>Phase 1</h2>
            <ul>
              <li>Succesful stealth</li>
              <li>First Donation</li>
              <li>launch 100 Holders</li>
              <li>150k Market cap</li>
            </ul>
          </div>


          <div className="col-md-4 text-center">
            <h2>Phase 2</h2>
            <ul>
              <li>500 holders </li>
              <li>Website v2</li>
              <li>CMC + CG </li>
              <li>Merchandise Launch</li>
            </ul>
          </div>
          <div className="col-md-4 pr-0 text-lg-center text-center">
            <h2 className="pr-0 pr-md-4">Phase 3</h2>
            <ul className="pr-0 pr-md-8">
              <li>CEX listings </li>
              <li>Charity Twitch event !</li>
              <li> 10000 Holders</li>
              <li>New unofficial Season</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
