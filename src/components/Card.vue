<template>
  <div class="card text-center q-ma-md q-pa-md shadow-up-3">
    <slot class="card__image" name="image" />
    <slot name="text" />
    <hr />
    <div class="card__data row inline content-start">
      <slot class="card-data" name="data" />
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

     &__data {
      color: #4a4a4a;
    }

    hr {
      border-top: 1px solid #efefef;
    }

    .sub-title {
      color: #4a4a4a;
    }

  }
</style>
