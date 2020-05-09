import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{ width: "100%", height: 50, backgroundColor: "green" }}
        ></div>
        <div
          style={{
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "red",
            flexDirection: "row",
          }}
        >
          <h1>I am ALI</h1>
          <h1>I am ALI</h1>
        </div>

        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </div>
      </div>
    );
  }
}
