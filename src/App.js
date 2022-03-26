import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Data from './components/PickOne/Data';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shop></Shop>
      <br />

      <div>
        <h1 className='question'>How React works?</h1>
        <p className='answer'>ANSWER : React is a JavaScript library that creates user interfaces (UIs) in a effective and predictable way by using declarative code. We can use it to build single page applications and mobile apps, or to build complex apps if we utilise it with other libraries.
          React basically maintains like a tree. This tree can do efficient computations on the nodes.If I think HTML code as a tree,that is exactly how the browser treats DOM . React allows to re-construct effectively any DOM in JavaScript and push only those changes to the DOM which have actually occurred.
        </p>
        <h1 className='question'>How useState works?</h1>

        <p className='answer'>ANSWER: useState is a Hook which allows to have state variables in functional components. If we pass the initial state to this function, it returns a variable with the current state value and another function to update the new value. A React component is defined using the regular JavaScript function syntax, not the ES6 class syntax. Considering that prior to React hooks, a React component defined as a function will have to be refactored to use the ES6 class syntax in order to add some piece of state or lifecycle methods to the component. That's why React hooks is no longer necessary, as functions can still remain functions while holding the good parts of React.</p>
      </div>
    </div>
  );
}


export default App;
