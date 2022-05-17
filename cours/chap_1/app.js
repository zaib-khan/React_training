const app = ()=>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement(
                "h1",
                {classsName:"bg-red-500"},
                "Hello world"
            ),
            React.createElement(
                "h2",
                {},
                "Hello world 2"
            )

        ]
    )
}






ReactDOM.render(React.createElement(app),document.getElementById('root'));