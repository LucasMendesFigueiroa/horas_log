<template>
  <div>
    <ul class="listahome">
      <li>
        <div class="painelhome">
          <painel titulo="Log de horas">
            <formlog @forme="formulario" />
          </painel>
        </div>
      </li>
      <li class="painelhome">
        <painel titulo="Horas Logadas">
          <div v-for="loga in horaslogadas" :key="loga">
            <painel :titulo="loga[0]" visibilidade="true">
              <cardinf :formulario="loga" />
            </painel>
          </div>
        </painel>
      </li>
    </ul>
  </div>
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
    };
  },

  methods: {
    showevent(event: any) {
      console.log(event);
    },
    formulario(form: string[]) {
      this.horaslogadas.push(form);
    },
  },
});
</script>
<style scoped>
.listahome {
  list-style: none;
}
.painelhome {
  width: 50%;
}
</style>
