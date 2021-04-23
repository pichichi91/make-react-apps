import React, { useState } from 'react';

const Tabs = ({ browsers, choose, add, active, close }) => {
  return (
    <div className="tabs">
      {browsers.map((browser, index,) => (
        <Tab close={close} isActive={active === index} index={index} key={index}>
          <button onClick={() => choose(index)}>{browser}</button>
        </Tab>
      ))}

      <Tab>
        <button onClick={add}>+</button>
      </Tab>
    </div>
  );
}

export default Tabs;

const Tab = ({ index, children, close, isActive }) => {
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
  });

  const moveHighlight = (e) => {
    setHighlightStyle({
      opacity: 0.4,
      left: e.nativeEvent.layerX - 250,
    });
  }

  const hideHighlight = (e) => {
    setHighlightStyle({ opacity: 0, left: e.nativeEvent.layerX - 250 });
  }

  return (
    <div
      className={`tab ${isActive ? 'is-active' : ''}`}
      onMouseOut={hideHighlight}
      onMouseMove={moveHighlight}
    >
      <div className="highlight" style={highlightStyle} />
      {children}
      {close && (
        <button className="close-tab" onClick={() => close(index)}>
          x
        </button>
      )}
    </div>
  );
}
