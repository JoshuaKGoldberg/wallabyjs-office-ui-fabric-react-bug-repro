import { mount, render } from "enzyme";
import "jest-enzyme";
import { DocumentCard } from "office-ui-fabric-react";
import * as React from "react";

import { Content } from "./Content";

describe("loadContent", () => {
	it("doesn't crash", () => {
		render(<Content />);
	});
});
