import React from "react";
import { render, Document, Text } from "redocx";

const TextStyles = {
	color: "red",
	fontSize: 30
};
class App extends React.Component {
	render() {
		return (
			<Document>
				<Text style={TextStyles} align="center">
					Hello World
				</Text>
			</Document>
		);
	}
}

render(<App />, `${__dirname}/example.docx`);
