import "../scss/style.scss";

import Routes from "./routes/index";
import Header from "./layout/header";
import Footer from "./layout/footer";

document.addEventListener("DOMContentLoaded", function () {
	const header = new Header();
  header.run();
  
  const routes = new Routes({
    page: $$page
  });
  routes.run();

  const footer = new Footer();
  footer.run();
});
