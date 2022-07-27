<template>
  <form>
    <input
      type="search"
      @input="titulo"
      placeholder="Digite o titulo da sua Task"
    />
    <input type="search" @input="nome" placeholder="Digite seu nome" />
    <input
      type="search"
      @input="tempo"
      placeholder="digite o tempo gasto em min"
    />
    <input type="search" @input="descricao" placeholder="Descrição" />
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
<style scoped></style>
