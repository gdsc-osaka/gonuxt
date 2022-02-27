<template>
  <v-container fluid>
    <TemplateShowcaseSec />
  </v-container>
</template>

<script scoped>
import TemplateShowcaseSec from '@/sections/template/TemplateShowcaseSec/TemplateShowcaseSec/'

export default {
  name: 'TemplatePage',
  components: { TemplateShowcaseSec },
  head: {
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Template Showcase' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'GONuxTテンプレート一覧',
      },
    ],
  },
}
</script>
