import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <button className="btn btn__blue">Compose</button>
        <ul className="side-nav">
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              Inbox <span className="side-nav__count">(2)</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              Important
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              Sent
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              Drafts
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              Trash
            </a>
          </li>
        </ul>
        <div className="labels">
          <p className="labels__header">labels</p>
          <ul className="side-label">
            <li className="side-label__item">
              <div className="side-label__box side-label__box--1" />
              <span className="side-label__name">Personal</span>
            </li>
            <li className="side-label__item">
              <div className="side-label__box side-label__box--2" />
              <span className="side-label__name">Work</span>
            </li>
            <li className="side-label__item">
              <div className="side-label__box side-label__box--3" />
              <span className="side-label__name">Travel</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
