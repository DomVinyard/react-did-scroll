import React from "react";
import EventListener, { withOptions } from "react-event-listener";

export default class ReactOnScroll extends React.Component {
  constructor() {
    super()
    this.state = {
      pixels: 0,
      percent: 0
    };
  }

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll() {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    const percentPrecision =
      (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    const percent = parseFloat(
      (Math.round(percentPrecision * 100) / 100).toFixed(2)
    );
    this.setState({
      pixels: document.body[st],
      percent
    });
  }

  render() {
    return (
      <div>
        <EventListener target="window" onScroll={() => this.handleScroll()} />
        <div>{this.props.children(this.state)}</div>
      </div>
    );
  }
}
