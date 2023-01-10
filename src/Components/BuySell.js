import React from "react";

export default function BuySell() {
  return (
    <div className="buy-sell" id="tokenomics">
      <div className="container-fluid ">
        <h1 className="toke">tokenomics</h1>

        <div className="row">
          <div className="col-lg-5">
            <h1>Buy Taxes</h1>
            <div className="row">
              <div className="col-6">
                <div className="flippy">
                  <h4>10%</h4>
                  <h5>TOTAL TAX</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="flippy">
                  <h4>4%</h4>
                  <h5>Marketing</h5>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <div className="flippy">
                  <h4>4%</h4>
                  <h5>Charity</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="flippy">
                  <h4>2%</h4>
                  <h5>LP</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2"></div>
          <div className="col-lg-5 mt-5 mt-md-0">
            <h1 className="text-center">Sell Taxes</h1>
            <div className="row">
              <div className="col-6">
                <div className="flippy">
                  <h4>4%</h4>
                  <h5>Marketing</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="flippy">
                  <h4>14%</h4>
                  <h5>TOTAL TAX</h5>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <div className="flippy">
                  <h4>8%</h4>
                  <h5>Charity</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="flippy">
                  <h4>2%</h4>
                  <h5>LP</h5>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row table-bottom center">
          <img src="../Asserts/download.png" className="img"></img>
        </div>        
      </div>
    </div>
  );
}
