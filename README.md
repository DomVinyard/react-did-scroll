# react-did-scroll
Monitor for scroll events in React

[![Edit k3x809zlv3](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k3x809zlv3?hidenavigation=1&view=editor)

## Import

```
import DidScroll from "react-did-scroll";
```

## Usage

```
  <DidScroll>
    {({pixels, percent}) => (
      <div style={styles}>
        <h2 style={{ position: "fixed" }}>pixels: {pixels}, percent: {percent}</h2>
      </div>
    )}
  </DidScroll>
 ```

