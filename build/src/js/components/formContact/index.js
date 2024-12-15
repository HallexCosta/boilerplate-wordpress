import FormContactValidation, { ERROR } from "./validation";
import FormContactView from "./view";
import FormContactController from "./controller";

export default class FormContact {
  constructor() {
    console.log('> Form Contact');
  }

  run() {
    const formContactValidation = new FormContactValidation({
      typeError: ERROR.field
    });
    const formContactView = new FormContactView({
      formContactValidation,
    });
    const formContactController = new FormContactController({
      formContactView
    });
  }
}