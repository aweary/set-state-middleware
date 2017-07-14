# set-state-middleware

Implement a middlware stack for React's `setState`.

## Installation

```
yarn add set-state-middlware
```

## Usage

`set-state-middleware` exports a function that takes an array of middleware and returns a `setState` function that you can call in place of `this.setState`.

```js
import makeSetState from 'set-state-middlware'
import loggerMiddlware from 'some-logger'

const setState = makeSetState([loggerMiddleware])

export default setState
```

After creating your `setState` function you can just import and use it in any of your React components. Instead of doing `this.setState(partialState)` you now just do `setState(this, partialState)`

```js
import React from 'react'
import setState from './setState'

class App extends React.Component {

  state = { name: "foo" }

  componentDidMount() {
    setState(this, { name: "Brandon" })
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>
  }
}
