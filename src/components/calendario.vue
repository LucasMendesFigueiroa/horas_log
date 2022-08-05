<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
          @click:time="showevent"
          @click:event="showevent"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data() {
    return {
      teste2: [{ t1: 1 }, { t2: 2 }, { t3: 3 }],
      teste: false,
      today: "2019-01-08",
      events: [
        {
          name: "Weekly Meeting",
          id: "teste",
          phone: "0561894189641968",
          start: "2019-01-07 09:00",
          end: "2019-01-07 10:00",
        },
        {
          name: `Thomas' Birthday`,
          start: "2019-01-10",
        },
        {
          name: "Mash Potatoes",
          start: "2019-01-09 12:30",
          end: "2019-01-09 15:30",
        },
      ],
    };
  },
  mounted() {
    this.$refs.calendar.scrollToTime("08:00");
  },
  methods: {
    showevent(event: any) {
      if (this.teste) {
        this.teste = false;
      } else {
        this.teste = true;
      }

      console.log(event);
    },
  },
});
</script>
<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>
