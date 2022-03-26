import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
      <br />
      <div>
        <h1 className='writings'>How React works?</h1>
        <p>ANSWER : React is a JavaScript library that creates user interfaces (UIs) in a effective and predictable way by using declarative code. We can use it to build single page applications and mobile apps, or to build complex apps if we utilise it with other libraries.
          React basically maintains like a tree. This tree can do efficient computations on the nodes.If I think HTML code as a tree,that is exactly how the browser treats DOM . React allows to re-construct effectively any DOM in JavaScript and push only those changes to the DOM which have actually occurred.
        </p>
      </div>
    </div>
  );
}


export default App;
