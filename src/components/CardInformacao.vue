<template>
  <div class="painel" test-id="card-informacao-label">
    <div class="formulario" v-for="(forme, i) in formulario" :key="forme">
      <label>{{ titulo[i] }} {{ forme }} </label>
    </div>

    <button class="botao" @click="apaga()">Apagar</button>
    <button class="botaoed" @click="edita()">Editar</button>

    <div v-show="visivel">
      <formlog @forme="editar" :formulario="formulario" :index="index" />
    </div>
  </div>
</template>

<script lang="ts">
import FormLogHoras from "../components/FormLogHoras.vue";

export default {
  props: ["formulario", "index"],
  components: {
    formlog: FormLogHoras,
  },

  data() {
    return {
      visivel: false,
      titulo: [
        "Titulo : ",
        "Nome : ",
        "Tempo Gasto em minutos :",
        "Descrição :",
      ],
    };
  },
  methods: {
    apaga() {
      this.$emit("apagar", this.index);

      return;
    },
    edita() {
      this.visivel = true;
      //this.$emit("editar", true);

      return;
    },
    editar(ad: []) {
      this.visivel = false;
      this.$emit("editar", ad);

      return;
    },
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 98%;
  height: 100%;
  vertical-align: top;
  text-align: center;
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
.botao,
.botaoed {
  display: inline-block;
  padding: 5px;
  border-radius: 1px;
  margin: 5px;
  font-size: 1em;
}
.botao {
  background: rgb(202, 74, 51);
  color: white;
}

.botaoed {
  background: rgb(215, 145, 39);
  color: white;
}
</style>
