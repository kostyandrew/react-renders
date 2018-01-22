// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Link, Image, Slide, Text, CodePane } from "spectacle";
import "prismjs/components/prism-jsx";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("./my.css");
require("prismjs/themes/prism-coy.css");

const theme = createTheme(
	{
		primary: "white",
		secondary: "#212121",
		tertiary: "#FFD700",
		quartenary: "#ececec",
	},
	{
		primary: "Open Sans",
		secondary: "Helvetica",
	},
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={["slide"]} transitionDuration={300} theme={theme}>
				<Slide bgColor="primary">
					<Heading size={1} caps lineHeight={"30vh"} textColor="secondary" style={{ fontSize: 70 }}>
						Custom React Renders
					</Heading>
					<Text
						textColor="secondary"
						style={{ marginTop: "20vh", textAlign: "left", fontSize: "3.5vh", lineHeight: "8vh" }}
					>
						<Image
							height="16vh"
							src={require("./resources/me.jpg")}
							display="inline-block"
							style={{ verticalAlign: "bottom", margin: 0, float: "left", marginRight: "2rem" }}
						/>
						<span>Andrii Kostetskyi, @kostyandrew</span>
						<br />
						<span>Fullstack Developer in ASD, NodeSchool, Kottans</span>
					</Text>
				</Slide>

				<Slide bgColor="secondary">
					<Header textColor="primary">Чому саме React?</Header>
				</Slide>
				<Slide bgColor="tertiary">
					<Header>React Component</Header>
					<Code lang="js" code={require("!raw-loader!./code/ReactComponent.js")} />
				</Slide>
				<Slide bgColor="quartenary">
					<Header>HtmlElement</Header>
					<Code lang="js" code={require("!raw-loader!./code/HtmlElement.js")} />
				</Slide>
				<Slide bgColor="tertiary">
					<Header>React Native</Header>
					<Code lang="jsx" fontSize={22} code={require("!raw-loader!./code/Native.js")} />
				</Slide>
				<Slide bgColor="secondary">
					<Header textColor="primary">React Renders</Header>
				</Slide>
				<Slide bgColor="quartenary">
					<Header>ReactDOM</Header>
					<Code lang="js" code={require("!raw-loader!./code/ReactDOM.js")} />
				</Slide>
				<Slide bgColor="quartenary">
					<Header>ReactDOM Server</Header>
					<List>
						<ListItem>renderToString</ListItem>
						<ListItem>renderToStaticMarkup</ListItem>
					</List>
				</Slide>
				<Slide bgColor="tertiary">
					<Header>React Native</Header>
					<Code lang="jsx" code={require("!raw-loader!./code/ReactNative.js")} />
				</Slide>
				<Slide bgColor="quartenary">
					<Code lang="js" fontSize={30} code={require("!raw-loader!./code/ReactRenders.js")} />
				</Slide>

				<Slide bgColor="tertiary">
					<Header>Renders Examples</Header>
				</Slide>
				<Slide>
					<Header>react-html-email</Header>
					<Text>https://github.com/chromakode/react-html-email</Text>
				</Slide>
				<Slide bgColor="quartenary">
					<Code lang="js" fontSize={20} code={require("!raw-loader!./code/email.js")} />
				</Slide>

				<Slide>
					<Header>react-blessed</Header>
					<Text>https://github.com/Yomguithereal/react-blessed.git</Text>
				</Slide>
				<Slide bgColor="quartenary">
					<Code lang="js" fontSize={20} code={require("!raw-loader!./code/blessed.js")} />
				</Slide>

				<Slide>
					<Header>redocx</Header>
					<Text>https://github.com/nitin42/redocx</Text>
				</Slide>
				<Slide bgColor="quartenary">
					<Code lang="js" fontSize={20} code={require("!raw-loader!./code/doc.js")} />
				</Slide>

				<Slide>
					<Header>react-pdf</Header>
					<Text>https://github.com/diegomura/react-pdf</Text>
				</Slide>
				<Slide bgColor="quartenary">
					<Code lang="js" fontSize={20} code={require("!raw-loader!./code/pdf.js")} />
				</Slide>

				<Slide>
					<Header>react-hardware</Header>
					<Text>https://github.com/iamdustan/react-hardware</Text>
				</Slide>
				<Slide bgColor="quartenary">
					<Code lang="js" fontSize={16} code={require("!raw-loader!./code/hardware.js")} />
				</Slide>

				<Slide bgColor="quartenary">
					<Header>
						<a href="https://www.npmjs.com/package/react-reconciler">react-reconciler</a>
						<Code
							lang="jsx"
							fontSize={22}
							code={require("!raw-loader!./code/ReactReconciler.js")}
						/>
					</Header>
				</Slide>
				<Slide>
					<Header>Переваги</Header>
					<List>
						<ListItem>Одне API</ListItem>
						<ListItem>Додаткові інструменти, бібліотеки</ListItem>
						<ListItem>Зменшення затрат часу</ListItem>
						<ListItem>Перевикористання коду</ListItem>
						<ListItem>Схожа логіка для різних платформ</ListItem>
					</List>
				</Slide>

				<Slide>
					<Header>Недоліки</Header>
					<List>
						<ListItem>Несумісність базових компонент</ListItem>
						<ListItem>Необхідність створювати універсальні компоненти</ListItem>
						<ListItem>Важке перевикористання</ListItem>
						<ListItem>Збірка</ListItem>
					</List>
				</Slide>

				<Slide>
					<List>
						<ListItem>https://github.com/chentsulin/awesome-react-renderer</ListItem>
						<ListItem>https://github.com/iamdustan/tiny-react-renderer</ListItem>
						<ListItem>https://github.com/nitin42/Making-a-custom-React-renderer</ListItem>
					</List>
				</Slide>

				<Slide bgColor="white">
					<Image src={require("./resources/slides.png")} height={"50vh"} />
					<Text textColor="secondary">
						<Link href="https://kostyandrew.github.io/react-renders/" textColor="secondary">
							kostyandrew.github.io/react-renders/
						</Link>
					</Text>
				</Slide>

				<Slide bgColor="secondary">
					<Heading size={1} fit caps style={{ fontFamily: "Times New Roman" }} textColor="primary">
						Fin
					</Heading>
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
			fontSize: props.fontSize || 26,
		}}
	/>
);

class Header extends React.Component {
	static defaultProps = {
		size: 1,
		textColor: "secondary",
	};

	render() {
		const { size } = this.props;

		const fontSize = Math.round(4 / size) * 18;

		const style = { fontSize };

		return (
			<Heading style={style} textColor={this.props.textColor}>
				{this.props.children}
			</Heading>
		);
	}
}
