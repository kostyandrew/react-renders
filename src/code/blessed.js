import React, { Component } from "react";
import blessed from "blessed";
import { render } from "react-blessed";

const screen = blessed.screen({
	autoPadding: true,
	smartCSR: true,
	title: "react-blessed hello world",
});

const component = render(
	<box border={{ type: "line" }} style={{ border: { fg: "blue" } }}>
		Hello World!
	</box>,
	screen
);
