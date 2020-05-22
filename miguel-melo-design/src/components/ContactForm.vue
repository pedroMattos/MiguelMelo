<template>
  <div>
    <form id="contact-form" @submit.prevent="sendMail">
      <div class="input-field">
        <label class="label" for="name-client">Nome</label>
        <input class="input" type="text" v-model="form.name" required name="nameC" id="name-client">
      </div>
      <div class="input-field">
        <label class="label" for="email-client">Email</label>
        <input class="input" type="email" v-model="form.from" required name="emailC" id="email-client">
      </div>
      <div class="input-field">
        <label class="label" for="tel-client">Telefone</label>
        <input class="input" type="text" v-model="form.phone" required name="telC" id="tel-client">
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
        phone: null,
      }
    };
  },
  // watch: {
  //   'form.phone'(val) {
  //     console.log(val);
  //   },
  // },
  mounted() {
    let tel = document.getElementById('tel-client')
    tel.setAttribute('onkeyup', 'mascara(this, mascarate)')
    tel.setAttribute('maxlength', '15')
    tel.setAttribute('onkeypress', 'return event.charCode >= 48 && event.charCode <= 57')
  },
  methods: {
    sendMail() {
      //formar url
      let url = '/contact/index.php';
      //formar conteúdo
      let formData = new FormData;
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }
      // const reqHeaders = new Headers({"Content-Type": "multipart/form-data"});
      fetch(url, {
        method: "POST",
        body: formData
      })
      .then(resp => {
        console.log('resp =>', resp);
        if (resp.status == 201){
          this.mensagem = 'Enviado!';
        } else {
          this.mensagem = 'Houve um erro ao enviar';
        }
        return resp.text()
      })
      .then(text => {
        console.log('text =>', text);
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