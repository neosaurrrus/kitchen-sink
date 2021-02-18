
import './css/App.css';

function App() {
  return (
    <div className="App">
    <header>
      <h1 className="fake-logo">Fake Logo</h1>
      <nav>
        <a href="#">Retail Partners</a>
        <a href="#">Business Partners</a>
        <a href="#">Bink &#9660</a>
      </nav>
    </header>

    <main className="layout">
      <h1>Bink helps your loyalty programme work even harder</h1>
  
      <p>
        Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>

      <h2>Hello World</h2>

      <blockquote>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse <a href="#">consectetur</a> cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </blockquote>

      <h3>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6>
      <hr />
      <div className="grid">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

      <div className="card">
        <h3>Card Heading</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <button>Accept</button>
      </div>

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
          adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
          adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut
        </p>
      </div>

      <hr />

      <form>
        <div className="grid cols-3">
          <div>
            <label htmlFor="text">Text</label>
            <input placeholder="Scott Tolinski" id="text" type="text" />
          </div>
          <div>
            <label htmlFor="number">Number</label
            ><input id="number" type="number" />
          </div>

          <div>
            <label htmlFor="email">Email</label><input id="email" type="email" />
          </div>
        </div>
        <div>
          <label htmlFor="textarea">Textarea</label>
          <textarea id="textarea" value="Default value"></textarea>
        </div>
        <div>
          <label htmlFor="select">Select</label>
          <select id="select" type="text">
            <option value="one">One</option>
            <option value="two">One</option>
          </select>
        </div>

        <button>Submit</button>
        <button className="cancel">Cancel</button>
        <button disabled>Disabled</button>
        <button>Button with long text</button>
        <button>Button &xrarr;</button>
        <br />
        <button className="small">Submit</button>
      </form>
    </main>

    <footer>
      <h3 className="fake-logo">Bink Logo</h3>
      <nav>
        <a href="#">App</a>
        <a href="#">Careers</a>
        <a href="#">Support</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Terms and Conditions</a>
      </nav>
      <p>&copy; 2021 Lukie Kang</p>
    </footer>
    </div>
  );
}

export default App;
