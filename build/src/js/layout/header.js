import 'animate.css';

import WOW from 'wow.js';
import Nitropack from '@root/components/nitropack';

import FormMask from '@root/utils/form-mask';

class Header {
  constructor() {}

  run() { 
    console.log('> Header'); 
    
    // Inicia o WOW para animações
    new WOW().init();

    const formMask = new FormMask;
    const zipcodesMask = [...document.querySelectorAll('.zipcode-mask')];
    zipcodesMask.map(zipcode => {
      formMask.zipcode(zipcode);  
    });

    const cellphonesMask = [...document.querySelectorAll('.cellphone-mask')];
    cellphonesMask.map(cellphone => {
      formMask.cellphone(cellphone);  
    });

    const cnpjMask = [...document.querySelectorAll('.cnpj-mask')];
    cnpjMask.map(cnpj => {
      formMask.cnpj(cnpj);  
    });

    /**
    * Nitropack remove watermark
    */
    const nitropack = new Nitropack();
    nitropack.run();
  }
}

export default Header;