import FormContact from '@root/components/formContact';

import HomeView from './view';

export default class Home {
  constructor() {}

  run() {
    console.log('> Home');

    const formContact = new FormContact();
    formContact.run();

    const homeView = new HomeView();
    homeView.run();
  }
}