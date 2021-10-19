<template>
  <div class="page-posts-list q-pa-lg">
    <div class="row justify-between">
      <q-input v-model="text" label="Pesquisar" rounded outlined>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn class="page-posts-list__icon" :size="size" flat round icon="add">
        <q-tooltip>Novo Post</q-tooltip>
      </q-btn>
    </div>
    <div class="q-pa-md row justify-center">
      <card v-for="(card, index) in postsList" :key="index">
        <template v-slot:image>
          <div class="col-6">
            <q-img class="card__image" :src="card.image">
              <div class="absolute-bottom text-subtitle1 text-center">
                {{ card.category }}
              </div>
            </q-img>
          </div>
        </template>
        <template v-slot:text>
          <h1 class="text-h4">{{ card.title }}</h1>
          <span class="sub-title q-mb-md text-body1 ellipsis-3-lines">
            {{ card.description }}
          </span>
        </template>
        <template v-slot:content>
          <span class="text-body2">Autor: {{ card.author }}</span>
          <span class="text-body2">Data de criação: {{ card.createdAt }}</span>
          <span class="text-body2">Última alteração: {{ card.lastChange }}</span>
        </template>
        <template v-slot:button>
          <div class="row justify-end">
            <q-btn class="page-posts-list__icon" :size="size" flat round icon="edit">
              <q-tooltip>Editar</q-tooltip>
            </q-btn>
            <q-btn class="page-posts-list__icon" :size="size" flat round icon="delete">
              <q-tooltip>Excluir</q-tooltip>
            </q-btn>
          </div>
        </template>
      </card>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination color="grey-9" v-model="current" :max="5" />
    </div>
  </div>
</template>

<script>
import Card from 'components/Card.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card
  },

  computed: {
    ...mapGetters({ postsList: 'posts/postsList' })
  },

  methods: {
    ...mapActions({ getPosts: 'posts/getPosts' })
  },

  async created () {
    try {
      const data = await this.getPosts()
      return data
    } catch (err) {
      console.log(err)
    }
  },

  data () {
    return {
      text: '',
      current: 1,
      size: 'md'
    }
  },

  name: 'PostsList'
}
</script>

<style lang="scss">
  .page-posts-list {
    &__icon {
      color: $dark-grey;
    }
  }
</style>
