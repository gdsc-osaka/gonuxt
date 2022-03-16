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
        title: '(title) Question',
        txtBody:
          '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo ' ,
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '(title) Question',
        txtBody: '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpawfenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a va',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '(title) Question',
        txtBody: '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpawfenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a va',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
      {
        title: '(title) Question',
        txtBody: '(txtBody) - fenaio;efi vaenio;a vanwi;eo venapaionvpawfenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a vanwi;eo venapaionvpaw fenaio;efi vaenio;a va',
        icon: 'https://res.cloudinary.com/uisual/image/upload/assets/icons/question.svg',
      },
    ],
  }),
}
