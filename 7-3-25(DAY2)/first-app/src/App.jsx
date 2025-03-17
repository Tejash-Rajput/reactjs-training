import Header from "./components/Header";
import "./scss/main.scss"


/**
 * App Component - The root component of the application.
 * @component
 * @returns {JSX.Element} The main application layout.
 */

function App() {
  return (
    <>
      <Header />
      <h1 className="hello">Hello, React!</h1>
    </>
  );
}

export default App;
