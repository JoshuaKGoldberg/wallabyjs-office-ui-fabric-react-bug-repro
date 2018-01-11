Steps to reproduce buggy behavior:

1. `npm i`
2. `code .`
3. Start the VS Code Wallaby extension running tests
4. `npm run test`

`npm run test` will run Jest and it'll pass.

Wallaby.js, on the other hand, will report **TypeError: Utilities_1.css is not a function​​**:

```
​​​​​1 failing tests, 0 passing​​​​​

  ​​​​loadContent doesn't crash​​​​ ​​​[0 ms]​​​​
    ​​​​
    ​​Error: [console.error]: Exception in DocumentCard.render(): TypeError: Utilities_1.css is not a function​​
    ​​    at DocumentCard.Object.<anonymous>.DocumentCard.render (d:\Code\WebClient\node_modules\office-ui-fabric-react\lib\components\DocumentCard\DocumentCard.js:31:101)​​
    ​​    at DocumentCard.obj.(anonymous function) [as render] (d:\Code\WebClient\node_modules\@uifabric\utilities\lib\BaseComponent.js:215:42)​​
    ​​    at resolve (d:\Code\WebClient\node_modules\react-dom\cjs\react-dom-server.node.development.js:2135:18)​​
    ​​    at ReactDOMServerRenderer.render (d:\Code\WebClient\node_modules\react-dom\cjs\react-dom-server.node.development.js:2243:22)​​
    ​​    at ReactDOMServerRenderer.read (d:\Code\WebClient\node_modules\react-dom\cjs\react-dom-server.node.development.js:2217:19)​​
    ​​    at Object.renderToStaticMarkup (d:\Code\WebClient\node_modules\react-dom\cjs\react-dom-server.node.development.js:2495:25)​​
    ​​    at Object.render (d:\Code\WebClient\node_modules\enzyme-adapter-react-16\build\ReactSixteenAdapter.js:363:42)​​
    ​​    at Object.render (d:\Code\WebClient\node_modules\enzyme\build\render.js:37:23)​​
    ​​    at Object.<anonymous> (C:\Users\jogol\.vscode\extensions\WallabyJs.wallaby-vscode-1.0.70\projects\a5fe5542cdcdb0d7\instrumented\src\Components\Content.test.js:12:30)​​
    ​​    at Object.e.length.arguments.(anonymous function) (d:\Code\WebClient\test\setup.js:66:1786)​​
    ​​    at Object.asyncFn (d:\Code\WebClient\node_modules\jest-jasmine2\build\jasmine_async.js:124:345)​​
    ​​    at resolve (d:\Code\WebClient\node_modules\jest-jasmine2\build\queue_runner.js:46:12)​​
    ​​    at new Promise (<anonymous>)​​
    ​​    at mapper (d:\Code\WebClient\node_modules\jest-jasmine2\build\queue_runner.js:34:499)​​
    ​​    at promise.then (d:\Code\WebClient\node_modules\jest-jasmine2\build\queue_runner.js:74:39)​​
    ​​    at <anonymous>​​
      at Object.<anonymous> ​src/Components/Content.test.tsx:13​
      at Object.<anonymous> ​src/Components/Content.test.tsx:13:2​
```
