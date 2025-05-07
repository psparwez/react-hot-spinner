# react-hot-spinner

A customizable spinner component for React applications with TypeScript support.

![](https://via.placeholder.com/640x320.png?text=React+Hot+Spinner)


<img src="./banner.gif" width="100%" alt="React Hot Spinner" />

## Installation

```bash
npm install react-hot-spinner
# or
yarn add react-hot-spinner
```

## Usage

```jsx
import React from 'react';
import { Spinner } from 'react-hot-spinner';

function App() {
  return (
    <div className="app">
      <h1>Loading Example</h1>
      <Spinner/>
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string \| number` | `'50px'` | Size of the spinner. If a number is provided, it will be treated as pixels. |
| `color` | `white \| black \| string` | `'#f0f0f0'` | Color of the spinner blades. |
| `className` | `string` | `''` | Additional CSS class name(s) to apply to the spinner container. |
| `center` | `boolean` | `false` | Center the spinner in its parent container. |

## Examples

### Basic Usage

```jsx
import { Spinner } from 'react-hot-spinner';

// Default spinner
<Spinner />

// Custom size (in pixels)
<Spinner size={100} />

// Custom size (with CSS units)
<Spinner size="5rem" />

// Custom color
<Spinner color="#ff0000" />

// Centered in parent
<Spinner center />

// With custom class name
<Spinner className="my-custom-spinner" />

// Combining multiple props
<Spinner size={80} color="#3498db" center className="loading-indicator" />
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode
npm run dev

# Run tests
npm test
```

## License

MIT