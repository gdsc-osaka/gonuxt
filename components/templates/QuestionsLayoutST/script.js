import QuestionCard from '@/components/molecules/QuestionCard.vue'

export default {
  components: { QuestionCard },
  props: {
    contact_text: {
      type: String,
      default: 'Still have questions?'
    },
    contact_link_text: {
      type: String,
      default: 'Contact us.'
    },
    contact_link: {
      type: String,
      default: 'example.html'
    },
  },

  
  data: () => ({
    questions: [
      {title:"Lorem ipsum dolor?",
      txtBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },
      {title:"Lorem ipsum dolor?",
      txtBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },
      {title:"Lorem ipsum dolor?",
      txtBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },
      {title:"Lorem ipsum dolor?",
      txtBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      }, 
    ],
  }),
}
