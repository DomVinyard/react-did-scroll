# react-did-scroll
Monitor for scroll events in React

[![Edit react-did-scroll Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4jqv097x59?hidenavigation=1)

## Import

```
import DidScroll from "react-did-scroll";
```

## Usage

```
  <DidScroll>
    {({pixels, percent}) => (
      <div style={styles}>
        <h2 style={{ position: "fixed", top: 0 }}>pixels: {pixels}, percent: {percent}</h2>
      </div>
    )}
  </DidScroll>
 ```

