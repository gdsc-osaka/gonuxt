export default {
  data: () => ({
    items: [
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/gonuxt/img/sample01.jpg'),
        title: '「(title) - noapeiav vnei;a vea」',
        name: '(name) - 田中太郎',
        text: '(text1) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/gonuxt/img/sample02.jpg'),
        title: '「(title) - noapeiav vnei;a vea」',
        name: '(name) - 田中次郎',
        text: '(text2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/gonuxt/img/sample03.jpg'),
        title: '「(title) - noapeiav vnei;a vea」',
        name: '(name) - 田中三郎',
        text: '(text3) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/gonuxt/img/sample01.jpg'),
        title: '「(title) - noapeiav vnei;a vea」',
        name: '(name) - 田中四郎',
        text: '(text4) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    dialog: false,
    modalTitle: 'default',
    modalText: 'text',
  }),
  methods: {
    openModal(item) {
      this.modalTitle = item.title
      this.modalText = item.text
    },
  },
}
