import Login from "./script/login.js";
import Post from "./script/post.js";
import PostCreate from "./script/postcreate.js";
import PostList from "./script/postlist.js";

class App {
  activeScreen;
  container;
  nav;
  main;

  constructor(container) {
    this.container = container;
  }

  changeActiveScreen(screen) {
    if (this.activeScreen !== undefined) {
      this.container.innerHTML = "";
    }

    this.activeScreen = screen;
    this.activeScreen.initRender(this.container);
  }
}
const container = document.getElementById("app");
const app = new App(container);

// check file to load html code
  const login = new Login();
  app.changeActiveScreen(login);
  
//export instant của app chứ ko export class vì App là duy nhất
export default app;