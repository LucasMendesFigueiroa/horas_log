<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <painel titulo="Log de horas">
        <div><formlog formularios="fsda" @t="tes"></formlog></div>
      </painel>
    </v-col>

    <v-col cols="12">
      <div v-for="loga in horaslogadas" :key="loga">
        <painel :titulo="loga[0]">
          <div><cardinf> </cardinf></div>
        </painel>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
//import calendarioVue from "@/components/calendario.vue";
import Vue from "vue";
import FormLogHoras from "../components/FormLogHoras.vue";
import Painel from "@/components/Painel.vue";
import CardInformacaoVue from "@/components/CardInformacao.vue";

export default Vue.extend({
  name: "Home",

  components: {
    formlog: FormLogHoras,
    //horalog: HoraLogadaVue,
    //calen: calendarioVue,
    painel: Painel,
    cardinf: CardInformacaoVue,
  },

  data() {
    return {
      //logHora: LogDeHoras,
      horaslogadas: [],
      t: "teste",
    };
  },

  methods: {
    showevent(event: any) {
      console.log(event);
    },
    tes(form: string[]) {
      this.horaslogadas.push(form);
      this.t = form[0];
      console.log(this.t);
    },
  },
});
</script>
