import schedules from '@/components/templates/ListA/ListA.json'

export default {
  data() {
    return {
      headers: [
        { text: '予定', value: 'name', sortable: false },
        { text: 'イベント・大会・交流戦', value: 'event', sortable: false },
        { text: '場所', value: 'place', sortable: false },
        { text: '概要', value: 'overview', sortable: false },
      ],
      schedules: schedules,
      itemsPerPage: 5,
    }
  },
  methods: {
    getColor(name) {
      if (name === '4月') return 'red'
      else if (name === '5月') return 'orange'
      else return 'green'
    },
  },
}
