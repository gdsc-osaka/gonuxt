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
      {title:"Question",
      txtBody:"(Answer) - fenaio;efi vaenio;a vanwi;eo venapaionvpaw",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },
      {title:"Question",
      txtBody:"(Answer) - fenaio;efi vaenio;a vanwi;eo venapaionvpaw",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },{title:"Question",
      txtBody:"(Answer) - fenaio;efi vaenio;a vanwi;eo venapaionvpaw",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },{title:"Question",
      txtBody:"(Answer) - fenaio;efi vaenio;a vanwi;eo venapaionvpaw",
      icon: "https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg"
      },
    ],
  }),
}
