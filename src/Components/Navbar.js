import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand pl-5" href="#">
        <img src="../Asserts/ahlogo.png" class="ahlogo"></img>
        Albert HeijnInu        
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto pr-5">
            <li class="nav-item active">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tokenomics">
                Tokenomics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#howtobuy">
                How to buy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#roadmap">
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
