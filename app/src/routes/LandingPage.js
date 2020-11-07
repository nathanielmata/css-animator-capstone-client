import React, { Component } from "react";

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <h1>Animation Station</h1>
                <h4>Lets be creative.....
                Create and save CSS animatons right in your browser</h4>
                <button onClick={() => this.props.history.push("/login")}>Try for free</button>
            </div>
        );
    }
}