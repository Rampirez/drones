import React, { Component } from "../../../node_modules/react";
import $ from "../../../node_modules/jquery";
import "./style.css";

class Menu extends Component {
  componentDidMount() {
    setTimeout(function () {
      $("#main").removeClass("is-loading");
    }, 100);
  }

  render() {
    return (
      <div id="main" className="is-loading">
        <nav class="menu">
          <input
            type="checkbox"
            href="#"
            class="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label class="menu-open-button" for="menu-open">
            <span class="lines line-1"></span>
            <span class="lines line-2"></span>
            <span class="lines line-3"></span>
          </label>

          <a href="#" class="menu-item blue">
            {" "}
            <i class="fa fa-anchor"></i>{" "}
          </a>
          <a href="#" class="menu-item green">
            {" "}
            <i class="fa fa-coffee"></i>{" "}
          </a>
          <a href="#" class="menu-item red">
            {" "}
            <i class="fa fa-heart"></i>{" "}
          </a>
          <a href="#" class="menu-item purple">
            {" "}
            <i class="fa fa-microphone"></i>{" "}
          </a>
          <a href="#" class="menu-item orange">
            {" "}
            <i class="fa fa-star"></i>{" "}
          </a>
          <a href="#" class="menu-item lightblue">
            {" "}
            <i class="fa fa-diamond"></i>{" "}
          </a>
        </nav>
      </div>
    );
  }
}

export default Menu;