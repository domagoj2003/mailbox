import React, { Component } from "react";
import { emailData } from "../data/emails";
import user1 from "../img/user1.jpg";
import user2 from "../img/user2.jpg";
import user3 from "../img/user3.jpg";
import user4 from "../img/user4.jpg";
import user5 from "../img/user5.jpg";
import Name from "./Name";
import Subject from "./Subject";
import Text from "./Text";
import Image from "./Image";

class Inbox extends Component {
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
      <div className="mailbox">
        <div className="inbox">
          <div className="inbox__mail">
            <Image img={user1} />
            <Name name={emails[0].name} />
            <Subject subject={emails[0].subject} />
            <Text text={emails[0].text} />
          </div>
          <div className="inbox__mail">
            <Image img={user2} />
            <Name name={emails[1].name} />
            <Subject subject={emails[1].subject} />
            <Text text={emails[1].text} />
          </div>
          <div className="inbox__mail">
            <Image img={user3} />
            <Name name={emails[2].name} />
            <Subject subject={emails[2].subject} />
            <Text text={emails[2].text} />
          </div>
          <div className="inbox__mail">
            <Image img={user4} />
            <Name name={emails[3].name} />
            <Subject subject={emails[3].subject} />
            <Text text={emails[3].text} />
          </div>
          <div className="inbox__mail">
            <Image img={user5} />
            <Name name={emails[4].name} />
            <Subject subject={emails[4].subject} />
            <Text text={emails[4].text} />
          </div>
        </div>
      </div>
    );
  }
}

export default Inbox;
