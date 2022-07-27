<template>
  <form>
    <div class="formulario">
      <label for="titulo">Digite o titulo da sua Task</label>
      <input type="search" @input="titulo" />
    </div>
    <div class="formulario">
      <label for="nome">Digite seu nome</label>
      <input type="search" @input="nome" />
    </div>
    <div class="formulario">
      <label for="tempo">Digite o tempo gasto em min</label>
      <input type="search" @input="tempo" />
    </div>
    <div class="formulario">
      <label for="descricao">Descrição</label>
      <textarea type="search" @input="descricao"> </textarea>
    </div>
  </form>
</template>
<script lang="ts">
export default {
  components: {},
  dado() {
    return {
      nome: "",
      tempoGato: "",

      forms: [
        { imp: "", titulo: "nome" },
        { imp: "", titulo: "Tempo Logado" },
      ],
      titulo: "teste",
      start: "09:10",
      end: null,
    };
  },
  methods: {
    testettt(t: any) {
      console.log(t);
    },
    testet2(t: any) {
      // console.log("teste2", t);
    },
  },
};
</script>
<style scoped>
.formulario {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>
