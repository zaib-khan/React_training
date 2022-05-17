import React from 'react';
import render from 'react-dom';

const App = ()=>{
    return React.createElement(
        "h1",
        {className:"goulag"},
        "yosh"
    )
}



render(React.createElement(App),document.getElementById('root'))