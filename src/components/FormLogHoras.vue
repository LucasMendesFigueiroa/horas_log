<template>
  <form @submit.prevent="">
    <div class="formulario">
      <label>Digite o titulo da sua Task</label>
      <input v-model="titulo" type="text" />
    </div>
    <div class="formulario">
      <label>Digite seu nome</label>
      <input v-model="nome" type="text" />
    </div>
    <div class="formulario">
      <label>Digite o tempo gasto em min</label>
      <input v-model="tempo" type="text" />
    </div>
    <div class="formulario">
      <label>Descrição</label>
      <textarea v-model="descricao" type="text"> </textarea>
    </div>
    <div>
      <button type="submit">teste</button>
    </div>
    <div>
      <button v-on:click="t">teste2</button>
    </div>
  </form>
</template>
<script lang="ts">
import LogDeHoras from "../class/LogDeHoras";
export default {
  components: {},
  dado() {
    return {
      nome: String,
      tempo: String,
      descricao: String,
      titulo: String,
    };
  },
  methods: {
    testettt(t: any) {
      console.log(t);
    },
    t() {
      const l = new LogDeHoras(
        this.titulo,
        this.nome,
        this.tempo,
        this.descricao
      );
      this.$emit("t", l);

      return;
    },

    grava(event: any) {
      // this.formularios = this.titulo;
    },
  },
};
</script>
<style scoped>
.formulario {
  text-align: start;
  font-size: 1.2em;
  display: block;
}
.formulario input,
.formulario textarea {
  width: 100%;
}
</style>
