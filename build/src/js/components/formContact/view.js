export default class FormContactView {
  form = document.querySelector('#home-form-contact');
  
  name = document.querySelector('#name');
  email = document.querySelector('#email');
  whatsapp = document.querySelector('#whatsapp');
  cnpj = document.querySelector('#cnpj');
  state = document.querySelector('#state');
  zipcode = document.querySelector('#zipcode');
  message = document.querySelector('#message');
  term = document.querySelector('#term');

  // Dependencies
  formContactValidation = null;

  constructor(props) {
    console.log('> FormContactView');

    this.formContactValidation = props.formContactValidation;

    this._handleAcceptTermInputRadio();
  }

  _handleAcceptTermInputRadio() {    
    let isAccept = false;
    this.term.addEventListener('click', () => {
      this.term.checked = !isAccept;
      isAccept = !isAccept;
    });
  }

  cleanFormContact() {
    this.name.value = '';
    this.email.value = '';
    this.whatsapp.value = '';
    this.cnpj.value = '';
    this.state.value = '';
    this.zipcode.value = '';
    this.message.value = '';
    this.term.checked = false;
  }

  handleFormContact(onSubmitForm) {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const validations = [
        this.formContactValidation.isValidRegex({ element: this.name, message: 'Insira um nome válido', regex: /\S+(?:\s+\S+)+/ }),
        this.formContactValidation.isValidRegex({ element: this.email, message: 'Insira um email válido',regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }),
        this.formContactValidation.isValidRegex({ element: this.whatsapp, message: 'Insira um número de whatsapp válido', regex: /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/ }),
        this.formContactValidation.isValidRegex({ element: this.cnpj, message: 'Preencha com um CNPJ válido', regex: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/ }),
        this.formContactValidation.isSelected({ element: this.state, message: 'Selecione um estado' }),
        this.formContactValidation.isValidLenght({ element: this.zipcode, min: 9, max: 9, message: 'Insira um CEP válido' }),
        this.formContactValidation.isValidLenght({ element: this.message, min: 8, max: 2048, message: 'Insira no mínimo 8 caracteres' }),
        this.formContactValidation.isValidTerm({ element: this.term, message: 'Você precisa aceitar os termos de política de privacidade' })
      ];

      if (validations.includes(false)) {
        return false;
      }

      const formData = new FormData(this.form);
      onSubmitForm(formData);
    }); 
  }
}