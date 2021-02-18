import "./css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="layout">
        <h1>Bink helps your loyalty programme work even harder</h1>

        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Heading 2</h2>

        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <h5>Heading 5</h5>
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <h6>Heading 6</h6>
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <hr />
        <h2>Card</h2>
        <div className="card">
          <h3>Card Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <button>Accept</button>
        </div>
        <hr />
        <h2>Blockquote</h2>
        <blockquote>
          Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse <a href="#">consectetur</a>{" "}
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </blockquote>
        <hr />
        <h2>Grid - 2 columns to 1</h2>
        <div className="grid">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul>
            <li>Hi</li>
            <li>Hello</li>
            <li>It's me</li>
          </ul>
        </div>
        <hr />
        <h2>Grid split 33% 66% (with regular split)</h2>

        <div className="grid grid--split">
          <aside>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </aside>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
          </p>
        </div>

        <div className="split">
          <aside>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
          </aside>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
          </p>
        </div>

        <hr />
        <h2>Forms and Buttons</h2>
        <Form />
      </main>

      <Footer />
    </div>
  );
}

export default App;
