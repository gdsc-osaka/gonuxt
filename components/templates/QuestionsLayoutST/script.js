import QuestionCard from '@/components/molecules/QuestionCard.vue'

export default {
  components: { QuestionCard },
  props: {
    contact_text: {
      type: String,
      default: 'Still have questions?',
    },
    contact_link_text: {
      type: String,
      default: 'Contact us.',
    },
    contact_link: {
      type: String,
      default: 'example.html',
    },
  },

  data: () => ({
    questions: [
      {
        title: '(title) Question 1',
        txtBody:
          '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo ',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '(title) Question 2',
        txtBody: '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpawfenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a va',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '(title) Question 3',
        txtBody: '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpawfenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a va',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '(title) Question 4',
        txtBody: '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpawfenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a va',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
    ],
  }),
}
