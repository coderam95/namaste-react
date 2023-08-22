const heading = React.createElement("div", {id: "heading"}, React.createElement("div", {id: "child"}, 
[React.createElement("h1",{},"I am the react nested element"),React.createElement("h2",{},"I am the sibling to the first element")]),
React.createElement("div", {id: "child2"}, 
[React.createElement("h1",{},"I am the react nested element"),React.createElement("h2",{},"I am the sibling to the first element")]));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
