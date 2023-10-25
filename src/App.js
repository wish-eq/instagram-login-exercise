import "./App.css";
import instagram from "./img/instagram-logo.png";
import facebook from "./img/facebook-icon.png";
import appstore from "./img/apple-button.png";
import googleplay from "./img/googleplay-button.png";

function App() {
  return (
    <body>
      <div class="container">
        <div class="page">
          <h1 title="Instagram">
            <img id="instagram-img" src={instagram} alt="Instagram logo" />
          </h1>
          <form>
            <input
              type="text"
              placeholder="Phone number, username or email"
            ></input>
            <input type="text" placeholder="Password"></input>
            <button>Log in</button>
          </form>
          <div class="option-bar">
            <div class="line-1"></div>
            <div class="option">OR</div>
            <div class="line-2"></div>
          </div>

          <div class="fb-link">
            <img class="facebook-icon" src={facebook} alt="facebook icon"></img>
            <a href="http://localhost:3000/">Log in with Facebook</a>
          </div>
          <div class="forget-id">
            <a href="http://localhost:3000/">Forget Password?</a>
          </div>
        </div>
        <div class="page" id="page-2">
          <p>Don't have an account?</p>
          <a href="http://localhost:3000/">Sign Up</a>
        </div>
        <div class="page-download">
          <p>Get the app.</p>
          <div class="download">
            <img id="appstore-img" src={appstore}></img>
            <img id="googleplay-img" src={googleplay}></img>
          </div>
        </div>
      </div>
      <footer>
        <ul class="footer">
          <li>
            <a href="#">Meta</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Instagram Lite</a>
          </li>
          <li>
            <a href="#">Threads</a>
          </li>
          <li>
            <a href="#">Contant Uploding & Non-Users</a>
          </li>
          <li>
            <a href="#">Meta Verified</a>
          </li>
        </ul>
        <div class="foot-footer">
          <select class="lang-selector">
            <option value="english">English</option>
            <option value="thai">Thai</option>
            <option value="japanese">Japanese</option>
            <option value="chinese">Chinese</option>
          </select>
          <p class="copyright">© 2023 Instagram do Facebook</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
