[![npm version](https://badge.fury.io/js/react-did-scroll.svg)](https://badge.fury.io/js/react-did-scroll)

# react-did-scroll
Monitor for scroll events in React and report the window scroll position.

## Import

```
import DidScroll from "react-did-scroll";
```

## Usage

```
  <DidScroll>
    {({pixels, percent}) => (
      <div>
        <div>pixels: {pixels}, percent: {percent}</div>
        {(percent < 50) && <div>Top half of page!</div>}
        {(percent >= 50) && <div>Bottom half of page!</div>}
      </div>
    )}
  </DidScroll>
 ```

