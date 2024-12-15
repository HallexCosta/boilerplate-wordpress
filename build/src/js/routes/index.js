import Home from '../pages/home';

class Routes {
  page = null;
  
  constructor(props) {
    this.page = props.page;
  }

  run() {
    switch (this.page) {
      case "home":
        const home = new Home();
        home.run();
        break;
    }
  }
}

export default Routes;