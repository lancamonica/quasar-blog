<template>
  <div class="card text-center q-ma-md q-pa-md shadow-up-3">
    <slot class="card__image" name="image" />
    <div class="card__text">
      <slot name="text" />
    </div>
    <hr />
    <div class="card__content row inline content-start">
      <slot name="content" />
    </div>
    <slot name="button" />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss">
  .card {
    max-width: 300px;
    max-height: 74vh;

    &__image {
      width: 100%;
      height: 25vh;
    }

     &__content {
      color: $text;
    }

    &__text {
      color: $text;
    }

    hr {
      border-top: 1px solid #efefef;
    }
  }
</style>
