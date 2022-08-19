<template>
  <div class="card">
    <form @submit.prevent="grava()">
      <div>
        <div>
          <div class="formulario" :class="estilo">
            <label>Digite o titulo da sua Task</label>
            <input v-model="titulo" type="text" :placeholder="formulario[0]" />
          </div>
          <div class="formulario" :class="estilo">
            <label>Digite seu nome</label>
            <input v-model="nome" type="text" :placeholder="formulario[1]" />
          </div>
          <div class="formulario" :class="estilo">
            <label>Digite o tempo gasto em min</label>
            <input v-model="tempo" type="number" :placeholder="formulario[2]" />
          </div>
          <div class="formulario" :class="estilo">
            <label>Descrição</label>
            <textarea
              v-model="descricao"
              type="text"
              :placeholder="formulario[3]"
            >
            </textarea>
          </div>
        </div>

        <label class="card-perigo" v-show="visivel">
          Alguns campos não estão preenchidos
        </label>

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
      estilo: "card-perigo",
      visivel: true,
    };
  },

  methods: {
    grava() {
      this.titulo =
        Boolean(this.titulo) === true ? this.titulo : this.formulario[0];
      this.nome = Boolean(this.nome) === true ? this.nome : this.formulario[1];
      this.tempo =
        Boolean(this.tempo) === true ? this.tempo : this.formulario[2];
      this.descricao =
        Boolean(this.descricao) === true ? this.descricao : this.formulario[3];

      const l = [
        this.index,
        [this.titulo, this.nome, this.tempo, this.descricao],
        this.formulario,
      ];
      if (this.valida()) {
        this.$emit("forme", l);
      }
    },
    estilos() {
      if (this.estilo == "padrao" || !this.estilo) return "card-padrao";
      if (this.estilo == "perigo") return "card-perigo";
    },

    valida(): boolean {
      if (
        Boolean(this.titulo) &&
        Boolean(this.nome) &&
        Boolean(this.tempo) &&
        Boolean(this.descricao)
      ) {
        this.visivel = false;
        return true;
      }
      this.visivel = true;
      return false;
    },
  },
};
</script>
<style scoped>
.card-padrao {
  background: rgba(2, 109, 192, 0.995);
}
.card-perigo {
  display: block;
  color: rgb(255, 0, 0);
  background: rgba(250, 193, 193, 0.995);
}
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
