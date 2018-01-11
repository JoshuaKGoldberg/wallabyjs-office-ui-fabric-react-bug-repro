import { render } from "enzyme";
import "jest-enzyme";
import * as React from "react";

import { Content } from "./Content";

describe("loadContent", () => {
	it("doesn't crash", () => {
		render(<Content />);
	});
});
