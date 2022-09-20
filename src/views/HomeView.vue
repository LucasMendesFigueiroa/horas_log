<template>
  <div class="center">
    <ul class="listahome">
      <li>
        <div class="painelhome">
          <painel titulo="Log de horas">
            <formlog @forme="formulario" :formulario="forme" />
          </painel>
        </div>
      </li>

      <li class="painelhome">
        <painel titulo="Horas Logadas">
          <div v-for="(loga, i) in horaslogadas" :key="loga">
            <cardinf
              :formulario="loga"
              :index="i"
              @apagar="apaga"
              @editar="editar"
            />
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
    painel: Painel,
    cardinf: CardInformacaoVue,
  },

  data() {
    return {
      forme: ["", "", "", ""],
      //logHora: LogDeHoras,
      horaslogadas: [],
      visibilidade: false,
    };
  },

  methods: {
    formulario(form: []) {
      this.horaslogadas.push(form[1]);
    },
    apaga(ap: number) {
      this.horaslogadas.splice(ap, 1);
    },
    editar(ad: []) {
      this.visibilidade = false;
      this.horaslogadas.splice(ad[0], 1, ad[1]);
    },
    edita(visi: boolean) {
      console.log(visi);
      this.visibilidade = visi;
    },
  },
});
</script>
<style scoped>
.listahome {
  list-style: none;
}
.painelhome {
  width: 100%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
