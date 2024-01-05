const parent = React.createElement("div",{ id: "parent" },
  [React.createElement("div",{ id: "child" },
  [React.createElement("h1", {}, "I'm heading"),
  React.createElement("h2", {}, "I'm heading")]
  ),React.createElement("div",{ id: "child2" },
  [React.createElement("h1", {}, "I'm heading"),
  React.createElement("image", {class: "img"}, "")]
  )]
);

// const heading = React.createElement("h1", {}, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
