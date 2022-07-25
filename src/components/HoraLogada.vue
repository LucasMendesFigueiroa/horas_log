<template>
  <div>
    <h6>{{ titulo }}</h6>
    <v-row>
      <v-col cols="11" sm="5">
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label=""
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            :max="end"
            :min="start"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
export default {
  props: ["titulo", "start", "end"],
  data() {
    return {
      time: null,
      menu2: false,
    };
  },
  methods: {
    test(t: any) {
      console.log(t);
    },
  },
};
</script>
