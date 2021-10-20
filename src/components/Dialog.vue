<template>
  <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <slot name="icon" />
          <slot name="text" />
        </q-card-section>
        <q-card-actions align="right">
          <slot name="button" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  props: {

    confirm: {
      type: Boolean
    }
  },

  name: 'DialogComponent'
}
</script>
