declare interface Document {
	getElementById(selector: string): Element;
}

// See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/20943
declare interface DocumentFragment { }

declare interface Element {
	textContent: string;
}

declare interface Node { }

declare interface Window { }

declare interface ClientRect { }
