<template>
  <div class="card">
    <form @submit.prevent="grava()">
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
        <button type="submit">Salvar</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
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
    grava(event: any) {
      const l = [this.titulo, this.nome, this.tempo, this.descricao];
      this.$emit("forme", l);

      return;
    },
  },
};
</script>
<style scoped>
.formulario {
  text-align: start;
  font-size: 1em;
  margin: 5px;
  display: block;
}
.formulario input,
.formulario textarea {
  border: solid 0.5px;
  width: 98%;
}
.card {
  padding: 0 auto;
  border: solid 2px;
  display: inline-block;
  margin: 1px;

  width: 99%;
  height: 100%;
  vertical-align: top;
  text-align: center;
}
</style>
