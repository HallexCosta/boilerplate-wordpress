import Alert from "@root/utils/alert";

export default class FormContactController {
  formContactView = null;

  constructor(props) {
    console.log('> FormContactController');
    this.formContactView = props.formContactView;

    this.formContactView.handleFormContact(this.onSubmitForm.bind(this));
  }

  async onSubmitForm(formData) {
    try {
      const baseURL = window.origin;

      Alert({
        title: 'Enviando os dados...',
        color: 'gray'
      });

      const response = await fetch(`${baseURL}/wp-json/form-contact/register`, {
        method: 'POST',
        body: formData,
      });
    
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }

      Alert({
        title: 'Formulário enviado com sucesso',
        color: "success"
      });

      this.formContactView.cleanFormContact();
    
      const data = await response.json();
      return response.ok;
    } catch (error) {
      Alert({
        title: 'Ocorreu um erro, por favor entre em contato conosco!',
        color: "error"
      });
    }
  }
}