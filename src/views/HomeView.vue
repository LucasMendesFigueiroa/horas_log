<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <painel :titulo="teste">
        <formlog></formlog>
      </painel>
    </v-col>
    <v-col cols="12"> </v-col>
  </v-row>
</template>

<script lang="ts">
//import calendarioVue from "@/components/calendario.vue";
import Vue from "vue";
import FormLogHoras from "../components/FormLogHoras.vue";
import Painel from "@/components/Painel.vue";

export default Vue.extend({
  name: "Home",

  components: {
    formlog: FormLogHoras,
    //horalog: HoraLogadaVue,
    //calen: calendarioVue,
    painel: Painel,
  },

  data() {
    return {
      teste: "teste",
    };
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
  methods: {
    showevent(event: any) {
      console.log(event);
    },
  },
});
</script>
