<template>
  <div class="card">
    <form @submit.prevent="grava()">
      <div>
        <div>
          <div class="formulario">
            <label>Digite o titulo da sua Task</label>
            <input v-model="titulo" type="text" :placeholder="formulario[0]" />
          </div>
          <div class="formulario">
            <label>Digite seu nome</label>
            <input v-model="nome" type="text" :placeholder="formulario[1]" />
          </div>
          <div class="formulario">
            <label>Digite o tempo gasto em min</label>
            <input v-model="tempo" type="number" :placeholder="formulario[2]" />
          </div>
          <div class="formulario">
            <label>Descrição</label>
            <textarea
              v-model="descricao"
              type="text"
              :placeholder="formulario[3]"
            >
            </textarea>
          </div>
        </div>
        <div>
          <button class="botao" type="submit">Salvar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  props: ["formulario", "index"],

  components: {},
  dado() {
    return {
      titulo: String,
      nome: String,
      tempo: Number,
      descricao: String,
      validacao: false,
    };
  },
  methods: {
    grava() {
      const l = [
        this.index,
        [this.titulo, this.nome, this.tempo, this.descricao],
        this.formulario,
      ];

      this.titulo = Boolean(l[1][0]) === true ? l[1][0] : l[2][0];
      this.nome = Boolean(l[1][1]) === true ? l[1][1] : l[2][1];
      this.tempo = Boolean(l[1][2]) === true ? l[1][2] : l[2][2];
      this.descricao = Boolean(l[1][3]) === true ? l[1][3] : l[2][3];

      if (this.valida()) {
        this.$emit("forme", l);
      }
      return;
    },

    valida(): boolean {
      if (
        Boolean(this.titulo) &&
        Boolean(this.nome) &&
        Boolean(this.tempo) &&
        Boolean(this.descricao)
      ) {
        console.log(false);
        return true;
      }
      console.log(true);
      return false;
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
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
  background: darkcyan;
  color: white;
}
</style>
