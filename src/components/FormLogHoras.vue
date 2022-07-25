<template>
  <div>
    <v-card class="mx-auto" height="500" max-width="1000">
      <v-card-title>
        <span class="text-h5">Log de Horas</span>
      </v-card-title>
      <v-row>
        <v-col cols="12" sm="6">
          <horalog v-on:time="start"></horalog>
        </v-col>
        <v-col cols="12" sm="6">
          <horalog :start="start" @click="testet2(start)"></horalog>
        </v-col>
      </v-row>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                :error-messages="nameErrors"
                label="Horario de inicio"
                required
                @input="testettt"
                @blur="testet2"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                :error-messages="nameErrors"
                label="Horario final"
                required
                @input="testettt"
                @blur="testet2"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                :error-messages="nameErrors"
                label="Tempo Gasto"
                required
                @input="testettt"
                @blur="testet2"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :error-messages="nameErrors"
                label="Nome "
                required
                @input="testettt"
                @blur="testet2"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :error-messages="nameErrors"
                label="Nome da Tarefa "
                required
                @input="testettt"
                @blur="testet2"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import HoraLogadaVue from "@/components/HoraLogada.vue";

export default {
  components: {
    horalog: HoraLogadaVue,
  },
  dado() {
    return {
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
