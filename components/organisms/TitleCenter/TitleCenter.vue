<template>
  <v-row justify="center" class="text-center" no-gutters>
    <v-col cols="12" sm="6">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <p class="mb-7">{{ txtBody }}</p>

      <div class="mb-2">
        <v-btn
          style="text-transform: none"
          large
          rounded
          color="black"
          class="white--text"
        >
          Add to Chrome — It’s Free
        </v-btn>
      </div>
      <small>Firefox and Safari soon.</small>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Design better.',
    },
    txtBody: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi.',
    },
  },
}
</script>