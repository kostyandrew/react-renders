// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("./my.css");
require("normalize.css");

const theme = createTheme(
	{
		primary: "white",
		secondary: "#212121",
		tertiary: "#FFD700",
		quartenary: "#CECECE",
	},
	{
		primary: "Open Sans",
		secondary: "Helvetica",
	},
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						Custom React Renders
					</Heading>
				</Slide>

				<Slide>
					<Code lang="jsx" code={require("!raw-loader!./code/HtmlElement.js")} />
				</Slide>
			</Deck>
		);
	}
}

const Code = props => (
	<CodePane
		theme="light"
		lang={props.lang}
		source={props.code}
		style={{
			marginTop: "1rem",
			height: props.height || "auto",
			padding: "0.5rem",
			lineHeight: 1.2,
			fontSize: "20",
		}}
	/>
);
