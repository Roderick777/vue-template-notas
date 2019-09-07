
<template>
    <!-- <v-container fluid class="fill-height"> -->
    <v-container fluid>
        <v-layout wrap>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <v-card class="ma-1">
                    <v-card-text>

                        <v-row class="fill-height">
                            <v-col>
                            <v-sheet height="64">
                                <v-toolbar flat >
                                <v-btn outlined class="mr-4" @click="setToday">
                                    Hoy
                                </v-btn>
                                <v-btn fab text small @click="prev">
                                    <v-icon small>mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn fab text small @click="next">
                                    <v-icon small>mdi-chevron-right</v-icon>
                                </v-btn>
                                <v-toolbar-title>{{ title }}</v-toolbar-title>
                                <div class="flex-grow-1"></div>
                                <v-menu bottom right>
                                    <template v-slot:activator="{ on }">
                                    <v-btn
                                        outlined
                                        v-on="on"
                                    >
                                        <span>{{ typeToLabel[type] }}</span>
                                        <v-icon right>mdi-menu-down</v-icon>
                                    </v-btn>
                                    </template>
                                    <v-list>
                                    <v-list-item @click="type = 'day'">
                                        <v-list-item-title>Día</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = 'week'">
                                        <v-list-item-title>Semana</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = 'month'">
                                        <v-list-item-title>Mes</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="type = '4day'">
                                        <v-list-item-title>4 días</v-list-item-title>
                                    </v-list-item>
                                    </v-list>
                                </v-menu>
                                </v-toolbar>
                            </v-sheet>
                            <v-sheet height="600">
                                <v-calendar
                                ref="calendar"
                                v-model="focus"
                                color="primary"
                                :events="events"
                                :event-color="getEventColor"
                                :event-margin-bottom="3"
                                :now="today"
                                :type="type"
                                @click:event="showEvent"
                                @click:more="viewDay"
                                @click:date="viewDay"
                                @change="updateRange"
                                ></v-calendar>
                                <v-menu
                                v-model="selectedOpen"
                                :close-on-content-click="false"
                                :activator="selectedElement"
                                full-width
                                offset-x
                                >
                                <v-card
                                    color="grey lighten-4"
                                    min-width="350px"
                                    flat
                                >
                                    <v-toolbar
                                    :color="selectedEvent.color"
                                    dark
                                    >
                                    <v-btn icon>
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                    <div class="flex-grow-1"></div>
                                    <v-btn icon>
                                        <v-icon>mdi-heart</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                    </v-toolbar>
                                    <v-card-text>
                                    <span v-html="selectedEvent.details"></span>
                                    </v-card-text>
                                    <v-card-actions>
                                    <v-btn
                                        text
                                        color="secondary"
                                        @click="selectedOpen = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-menu>
                            </v-sheet>
                            </v-col>
                        </v-row>




                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-btn absolute dark fab bottom right 
            color="pink" 
            style="position: fixed; bottom: 20px;">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      today: '2019-01-08',
      focus: '2019-01-08',
      type: 'month',
      typeToLabel: {
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        '4day': '4 Días',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
        {
          name: 'Vacación',
          details: 'Vamos pa\' la playa !',
          start: '2018-12-29',
          end: '2019-01-01',
          color: 'blue',
        },
        {
          name: 'Junta',
          details: 'Pasando el rato',
          start: '2019-01-07 09:00',
          end: '2019-01-07 09:30',
          color: 'indigo',
        },
        {
          name: 'Evento largo',
          details: 'Es evento empieza en medio de otro evento y se extiende durante varios eventos más',
          start: '2018-12-31',
          end: '2019-01-04',
          color: 'deep-purple',
        },
        {
          name: '3° a 7°',
          details: 'Probando',
          start: '2019-01-03',
          end: '2019-01-07',
          color: 'cyan',
        },
        {
          name: 'Gran Junta',
          details: 'Una junta muy importante acerca de nada',
          start: '2019-01-07 08:00',
          end: '2019-01-07 11:30',
          color: 'red',
        },
        {
          name: 'Otra Junta',
          details: 'Otra junta importante acerca de nada',
          start: '2019-01-07 10:00',
          end: '2019-01-07 13:30',
          color: 'brown',
        },
        {
          name: '7° a 8°',
          start: '2019-01-07',
          end: '2019-01-08',
          color: 'blue',
        },
        {
          name: 'Almuerzo',
          details: 'Hora de comer',
          start: '2019-01-07 12:00',
          end: '2019-01-07 15:00',
          color: 'deep-orange',
        },
        {
          name: 'Cumpleaños de alguien',
          details: 'Celebrar responsablemente',
          start: '2019-01-03',
          color: 'teal',
        },
        {
          name: 'Año nuevo',
          details: 'Vamos a comer algo bueno',
          start: '2019-01-01',
          end: '2019-01-02',
          color: 'green',
        },
        {
          name: 'Conferencia',
          details: 'El mejor momento de mi vida',
          start: '2019-01-21',
          end: '2019-01-28',
          color: 'grey darken-1',
        },
        {
          name: 'Hackathon',
          details: 'A programar como si no uiera mañana',
          start: '2019-01-30 23:00',
          end: '2019-02-01 08:00',
          color: 'black',
        },
        {
          name: 'evento 1',
          start: '2019-01-14 18:00',
          end: '2019-01-14 19:00',
          color: '#4285F4',
        },
        {
          name: 'evento 2',
          start: '2019-01-14 18:00',
          end: '2019-01-14 19:00',
          color: '#4285F4',
        },
        {
          name: 'evento 5',
          start: '2019-01-14 18:00',
          end: '2019-01-14 19:00',
          color: '#4285F4',
        },
        {
          name: 'evento 3',
          start: '2019-01-14 18:30',
          end: '2019-01-14 20:30',
          color: '#4285F4',
        },
        {
          name: 'evento 4',
          start: '2019-01-14 19:00',
          end: '2019-01-14 20:00',
          color: '#4285F4',
        },
        {
          name: 'evento 6',
          start: '2019-01-14 21:00',
          end: '2019-01-14 23:00',
          color: '#4285F4',
        },
        {
          name: 'evento 7',
          start: '2019-01-14 22:00',
          end: '2019-01-14 23:00',
          color: '#4285F4',
        },
      ],
    }),
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? '°'
          : ['°', '°', '°', '°', '°', '°', '°', '°', '°', '°'][d % 10]
      },
    },
  }
</script>

<style>

</style>