import React, { Component } from "react";
import { emailData } from "../data/emails";

class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: []
    };
  }
  componentWillMount() {
    this.setState({
      emails: emailData
    });
  }

  render() {
    const { emails } = this.state;

    return (
      <div className="main">
        <div className="content">
          <div className="content__subject">{emails[0].subject}</div>
          <div className="content__mailinfo">
            From {emails[0].name} at 4.25pm, December 11, 2018
          </div>
          <div className="content__buttons">
            <button className="btn btn btn__transparent btn__transparent--reply">
              Reply
            </button>
            <button className="btn btn__transparent btn__transparent--forward">
              Forward
            </button>
            <button className="btn btn__transparent btn__transparent--move-to">
              Move to
            </button>
          </div>
          <div className="content__body">{emails[0].text}</div>
        </div>
      </div>
    );
  }
}

export default Mail;
