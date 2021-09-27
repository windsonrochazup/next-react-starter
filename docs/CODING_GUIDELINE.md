# Coding Guideline

This guide was created to maintain the React style of code that we have adopted here at Zup, and some practices that we consider to be appropriate. Our style is based on the pattern [Standard](https://standardjs.com/) with some modifications.

The main objective is to keep a single way of coding, but we also gain:

- Better code readability
- Better code maintenance
- Save time on code reviews
- development pattern
- Good programming practices
- Clean Code
- Among other great benefits

## Rules

### React component extension

When creating a style file always use the .tsx.

```txt
Button/
  index.tsx
```

### Creating Style Sheet Components

When creating a style file always use the .ts extension and choose to use the styled-components library in the following structure:

```txt
Button/
  index.tsx
  styles.ts
```

### Importing

Whenever you import, do the destructuring.

```tsx
// Bad
import React from 'react'
const Component: React.FC = () => {}

// Good
import { FC } from 'react'
const Component: FC = () => {}
```

### Component creation

Always prefer to use functional component instead of class component, a functional component is written in a shorter and simpler way, which makes it easier to develop, understand and test, as well as making it easier to use hooks for components with lifecycle.

```tsx
// Bad
import { FC } from 'react'

class ClassComponent extends Component {
  render() {
    const { name } = this.props
    return <h1>Hello, {name}</h1>
  }
}

// Good
import { FC } from 'react'

const FunctionalComponent: FC = ({ name }) => <h1>Hello, {name}</h1>
```

#### Stateless Component

Prefer to use the functional syntax for stateless and dumb components.

#### Stateful Component

Prefer to use the function syntax for components that have knowledge of the state, in container and components that use lifecycle

### Adding a comma to the last element of an object

When using objects, always add a comma in the last element, this will help in the visualization of git diff, in case a new element is added in the last position.

```tsx
// Bad
export {
  Provider,
  Consumer
}

// Good
export {
  Provider,
  Consumer,
}
```

### Arrow function

Always prefer to write functions with arrow functions, especially if the return only fits on one line, and when there are callbacks with anonymous functions.

```tsx
// Very Bad
function double(array) {
  return array.map(function(item) {
    return item * 2
  })
}

// Good
function double(array) {
  return array.map(item => item * 2)
}

// Best
const double = array => array.map(item => item * 2)
```

### Setting variables

Always prefer the use of let for variables that can be reassigned and const for fixed value variables.

### Template Strings

Always give preference to using template strings when concatenating strings.

```tsx
// Bad
const person = {
  name: 'Isac'
}
const myName = "My name is "+ person.name+"."

// God
const person = {
  name: 'Isac'
}
const myName = `My name is ${person.name}.`
```

### Semicolon

The prettier will do the work for you, but always stay tuned

```tsx
// Bad
import React from 'react';

// Good
import React from 'react'
```

### Console.log

Never forget the function console.log() in your code.

```tsx
// Bad
const sum = (a, b) => {
  const result = a + b
  console.log(result)
}
```

### Comments

Never forget comments in your code, unless it's to explain the workings of more complex parts of the application that involve business rules.

```tsx
// Bad
// Função que soma dois elementos
const sum = (a, b) => a + b

// Good
const sum = (a, b) => a + b
```

### Returning elements with JSX

Whenever possible, omit the return.

```tsx
// Bad
const Bonus = () => {
  return (
    <h1>NextJs Style Guide</h1>
  )
}

// Good
const Bonus = () => (
  <h1>NextJs Style Guide</h1>
)

// Better
const Bonus = () => <h1>NextJs Style Guide</h1>
```

### Object destructuring

Whenever possible, use object destructuring.

```tsx
// Bad
const Title = (props) => (
  <h1>{props.title}</h1>
)

// Good
const Title = ({ title }) => (
  <h1>{title}</h1>
)
```

### Exporting component

Avoid the default export, this allows your component to be exported under another name and may cause further understanding complications.

```tsx
// Bad
const Component = () => <h1>Hello</h1>

export default Title

// Good
export const Component = () => <h1>Hello</h1>
```

### Wrap elements in JSX

Whenever returning a JSX element, wrap it in a parent element. Prefer Fragment, or short Fragment syntax.

```tsx
// Bad
import React from 'react'

const NameA = () => (
  <div>
    ....
  </div>
)

// Good
import React, { Fragment } from 'react'

const NameA = () => (
  <Fragment>
    ....
  </Fragment>
)

// Best
import React, { Fragment } from 'react'

const NameA = () => (
  <>
    ....
  </>
)
```

### Transferring properties

If there is a need to pass props to other components, define them and use semantic names instead of using spread. This will make it easier to understand the flow, and which props are being used. Avoiding the unnecessary passage of others.

```tsx
// Bad
const Button = props => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
)

// Good
const Button = ({ primary, children }) => (
  <StyledButton color={primary}>
    {children}
  </StyledButton>
)
```

### Default values ​​in parameters

Whenever possible, create default values ​​in your function parameters.

```tsx
// Bad
const getPrice = (amount, scale, currency) => {
  return priceNormalize(parseFloat(inScale(amount, scale), 10), currency)
}

// Good
const getPrice = (amount = 0, scale = 2, currency = 'BRL') => {
  return priceNormalize(parseFloat(inScale(amount, scale), 10), currency)
}
```

### Padding Lines

#### Components

When creating components does not use blank line after.

```tsx
// Bad
import { useState } from 'react'

const Bonus = () => {

  const [state, setState] = useState(null)

  return (
    <h1>NextJs Style Guide</h1>
  )
}

// Good
import { useState } from 'react'

const Bonus = () => {
  const [state, setState] = useState(null)

  return (
    <h1>NextJs Style Guide</h1>
  )
}
```

#### Return

When return used requires a blank line between a variable declaration and a return statement.

```tsx
// Bad
import { useState } from 'react'

const Bonus = () => {
  const [state, setState] = useState(null)
  return (
    <h1>NextJs Style Guide</h1>
  )
}

// Good
import { useState } from 'react'

const Bonus = () => {
  const [state, setState] = useState(null)

  return (
    <h1>NextJs Style Guide</h1>
  )
}
```
