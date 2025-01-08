
// const heading = document. createElement("h2");
// heading.textContent="Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log('JavaScript element:', heading) ;

const reactheading = React.createElement("h1", {className:'rh',id:'re',children:'Hello world'});
console.log("React element",reactheading);

ReactDOM.createRoot(document.getElementById("root")).render(reactheading);