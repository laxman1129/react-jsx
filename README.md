# JSX

JSX stands for JavaScript XML. JSX allows us to write HTML in React.  
JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.  
The syntax is intended to be used by preprocessors (i.e., transpilers like `Babel`) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

e.g.

```javascript
const Hello = (props) => <div> Hello {props.name}</div>;

ReactDOM.render(
  <Hello name="Taylor" />,
  document.getElementById("hello-example")
);
```

will be transformed to below code by `Babel`

```javascript
const Hello = (props) =>
  React.createElement("div", null, " Hello ", props.name);

ReactDOM.render(
  React.createElement(Hello, { name: "Taylor" }),
  document.getElementById("hello-example")
);
```

## What is `Babel`

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

Since we are using `'create-react-app'` `'babel'` is already configured in the project.

## Declaring JSX

```javascript
const element = <h1>Hello, world!</h1>;
```

## Embedding expressions in JSX

```javascript
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

## Conditional rendering

```javascript
const User = (props) => {
  return props.isUser ? <h1>Hello, User!!!</h1> : <h1>Hello, Guest!!!</h1>;
};
```

## Specifying attributes with JSX

```javascript
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;
const element = <div className="app-header"></div>;
```

> Since JSX is closer to JavaScript than to HTML, React DOM uses `camelCase` property naming convention instead of HTML attribute names.  
> For example, **_class_** becomes `className` in JSX, and **_tabindex_** becomes `tabIndex`.

## NOTE

- ### JavaScript Expressions as Props

```javascript
<MyComponent foo={1 + 2 + 3 + 4} />
```

- ###  String Literals

```javascript
<MyComponent message="hello world" />
<MyComponent message={'hello world'} />
```

- ### Props Default to “True”

```javascript
<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />
```

- ### Spread Attributes

```javascript
const props = { firstName: "Ben", lastName: "Hector" };
<Greeting {...props} />;
```

- ### JSX Children

```javascript
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
```

- ### JSX Prevents Injection Attacks

```javascript
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
`
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
