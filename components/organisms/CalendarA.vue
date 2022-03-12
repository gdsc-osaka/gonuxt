<template>
  <div>
    <v-sheet tile height="42" class="d-flex mb-2 justify-space-between">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <div class="d-flex align-center text-center">
        <v-toolbar-title v-if="$refs.calendar" class="text-h5">
          {{ $refs.calendar.title }}
        </v-toolbar-title>
        <v-toolbar-title v-else class="text-h5">{{
          String(new Date().getMonth() + 1) +
          '月 ' +
          String(new Date().getFullYear())
        }}</v-toolbar-title>
      </div>

      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>

    <v-sheet height="460" elevation="3">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        locale="ja-jp"
        :day-format="dayFormat"
        :weekday-format="weekdayFormat"
        :month-format="monthFormat"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import events from '@/components/templates/scheduleA/scheduleData.json'

export default {
  data: () => ({
    type: 'month',
    weekday: [1, 2, 3, 4, 5, 6, 0],
    dayOfWeek: ['日', '月', '火', '水', '木', '金', '土'],
    events: events,
    mode: 'stack',
    value: '',
    colors: [
      'blue',
      'indigo',
      'deep-purple',
      'cyan',
      'green',
      'orange',
      'grey darken-1',
    ],
  }),
  methods: {
    dayFormat: function (date) {
      return new Date(date.date).getDate()
    },
    weekdayFormat: function (date) {
      return this.dayOfWeek[date.weekday]
    },
    monthFormat: function (date) {
      return new Date(date.date).getMonth() + 1 + ' /'
    },
    month: function (date) {
      return new Date(date.date).getMonth()
    },
  },
}
</script>
