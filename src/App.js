
import './css/App.css';

function App() {
  return (
    <div className="App">
    <header>
      <h1 class="fake-logo">Fake Logo</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <main class="layout">
      <h1>Hello World</h1>

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
      <div class="grid">
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

      <div class="card">
        <h3>Card Heading</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <button>Accept</button>
      </div>

      <div class="grid grid--split">
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

      <div class="split">
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
        <div class="grid cols-3">
          <div>
            <label for="text">Text</label>
            <input placeholder="Scott Tolinski" id="text" type="text" />
          </div>
          <div>
            <label for="number">Number</label
            ><input id="number" type="number" />
          </div>

          <div>
            <label for="email">Email</label><input id="email" type="email" />
          </div>
        </div>
        <div>
          <label for="textarea">Textarea</label>
          <textarea id="textarea">Default value</textarea>
        </div>
        <div>
          <label for="select">Select</label>
          <select id="select" type="text">
            <option value="one">One</option>
            <option value="two">One</option>
          </select>
        </div>

        <button>Submit</button>
        <button class="cancel">Cancel</button>
        <button disabled>Disabled</button>
        <button>Button with long text</button>
        <button>Button &xrarr;</button>
        <br />
        <button class="small">Submit</button>
      </form>
    </main>

    <footer>
      <h3 class="fake-logo">Fake Logo</h3>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <p>&copy; 2020 Level Up Tutorials LLC</p>
    </footer>
    </div>
  );
}

export default App;
