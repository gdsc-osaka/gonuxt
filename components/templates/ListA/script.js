export default {
  data() {
    return {
      headers: [
        { text: '予定', value: 'name', sortable: false },
        { text: 'イベント・大会・交流戦', value: 'event', sortable: false },
        { text: '場所', value: 'place', sortable: false },
        { text: '概要', value: 'overview', sortable: false },
      ],
      schedules: [
        {
          name: '4月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
        {
          name: '5月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
        {
          name: '5月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
        {
          name: '5月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
        {
          name: '6月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
        {
          name: '6月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
        {
          name: '6月',
          event: '新歓',
          place: '体育館',
          overview:
            'nfd;anid;a avupe feanip na;owei nfw; vnea;o nfd;anid;a avupe feanip na;owei nfw; vnea;o',
        },
      ],
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
