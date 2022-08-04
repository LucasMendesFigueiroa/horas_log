<template>
  <div class="painel">
    <h2 v-if="visibilidade" class="painel-titulo" @click="visivel = !visivel">
      {{ titulo }} true
    </h2>
    <h2 v-else class="painel-titulo">{{ titulo }} false</h2>

    <div class="painel-conteudo" v-show="visivel">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["titulo", "visibilidade"],

  data() {
    return {
      visivel: true,
    };
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;

  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 50%;
  height: 100%;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: rgba(201, 222, 217, 0.995);
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 2px 2px 2px;
}
</style>
