import React from "react";
import ReactHardware, { Led } from "react-hardware";
const HIGH = 255;
const LOW = 0;

class Application extends React.Component {
	state = { value: 0 };
	_timer = null;

	componentDidMount() {
		this._timer = setInterval(
			_ => this.setState(prevState => ({ value: prevState.value === HIGH ? LOW : HIGH })),
			this.props.interval,
		);
	}
	componentDidUnmount() {
		clearInterval(this._timer);
		this._timer = null;
	}
	render() {
		return <Led pin={10} value={this.state.value} />;
	}
}

const PORT = "/dev/tty.usbmodem1411";
ReactHardware.render(<Application interval={1000} />, PORT);
