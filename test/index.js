// ReactDOM.render(<ul><li>Apple</li><li>Grape</li><li>Orange</li></ul>, 
//     document.querySelector("#root"))


// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById('root').append(h1);


// JSX
// ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById('root'))

const element = <h1 className="header">This is JSX</h1>;
console.log(element)

ReactDOM.render(element,document.getElementById('root'))