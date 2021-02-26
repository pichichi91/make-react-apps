import React, { useState } from 'react';

export default function Tab({ children }) {
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

    function moveHighlight(event) {

        setHighlightStyle({
            left: event.nativeEvent.layerX - 150,
        })
    }

    function exitHighlight(event) {

        setHighlightStyle({
            opacity: 0,
            left: event.nativeEvent.layerX - 150,

        })
    }
    return (
        <div className="tab" onMouseOut={exitHighlight} onMouseMove={moveHighlight}>
            <div className="highlight" style={highlightStyle}></div>
            {children}
        </div>
    )

}