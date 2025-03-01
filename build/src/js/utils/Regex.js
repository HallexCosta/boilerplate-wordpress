const REGEX = {
  https: /^https:\/\/.+/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  fullname: /\S+(?:\s+\S+)+/,
  whatsapp: /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/,
  cnpj: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/
};

export default REGEX;