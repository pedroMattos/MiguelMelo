<template>
  <div>
    <form id="contact-form" @submit.prevent="sendMail">
      <div class="input-field">
        <label class="label" for="name-client">Nome</label>
        <input class="input" type="text" v-model="form.name" name="nameC" id="name-client">
      </div>
      <div class="input-field">
        <label class="label" for="email-client">Email</label>
        <input class="input" type="email" v-model="form.from" name="emailC" id="email-client">
      </div>
      <div class="input-field">
        <label class="label" for="tel-client">Telefone</label>
        <input class="input" type="tel" v-model="form.phone" name="telC" id="tel-client">
      </div>
      <input type="submit" class="btn" value="Enviar">
    </form>
    <p>{{mensagem}}</p>
  </div>
</template>

<script>
export default {
  name: 'contact-form',
  data() {
    return {
      mensagem: null,
      form: {
        name: null,
        from: null,
        phone: null
      }
    };
  },
  methods: {
    sendMail() {
      //formar url
      let url = '/api/v1/clients';
      //formar conteúdo
      const reqHeaders = new Headers({"Content-Type": "application/json"});
      fetch(url, {
        method: "POST",
        body: JSON.stringify(this.form),
        headers: reqHeaders
      })
      .then(resp => {
        if (resp.status == 201){
          this.mensagem = 'Enviado!';
          for (const key in this.form) {
            this.form[key] = null;
          }
        } else {
          this.mensagem = 'Houve um erro ao enviar';
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoint.scss';
  #contact-form {
    display: inline-flex;
    @include breakpoint(smartphones) {
      display: block;
    }
    .input-field {
      position: relative;
      margin-bottom: 40px;
      label {
        position: absolute;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        color: $grey-form;
        top: 0;
        transition-duration: .5s;
        cursor: text;
      }
      input:-internal-autofill-selected {
        background-color: transparent !important;
        color: $grey-text !important;
        -webkit-appearance: none !important;
        background: none;
      }
      .input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid $grey-form;
        margin-right: 10px;
        transition-duration: .5s;
        width: 250px;
        color: $grey-form;
        height: 30px;
        &:focus {
          outline: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.349);
          transition-duration: .5s;
        }
      }
    }
  }
</style>
