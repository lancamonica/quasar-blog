<template>
  <q-dialog v-bind="$attrs" v-on="$listeners" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete_forever" color="grey-9" text-color="white" />
        <span class="q-ml-sm">{{ content.subtitle }}</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat :label="content.labelCancel" color="brand" @click="cancel" />
        <q-btn flat :label="content.labelSave" color="brand" @click="confirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    confirm () {
      this.$emit('confirm')
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
