<template>
  <div class="page-post q-pa-lg">
    <div class="col-6">
      <q-img class="page-post__image" :src="detailsPost.image" />
      <q-btn color="grey-4" text-color="grey-9" glossy unelevated icon="camera_enhance" label="Editar" @click="inputImage = true" />
    </div>
    <div v-if="!this.$route.query.id || inputImage">
      <q-input class="col-3 q-mt-md" rounded outlined v-model="detailsPost.image" label="URL da imagem" />
    </div>
    <div class="row items-start justify-between">
      <q-input class="col-3 q-mt-md" rounded outlined v-model="detailsPost.category" label="Categoria" />
      <q-input class="col-4 q-mt-md" rounded outlined v-model="detailsPost.title" label="Título" />
      <q-input class="col-3 q-mt-md" rounded outlined v-model="detailsPost.author" label="Autor" />
      <q-input class="col-12 q-mt-md" rounded outlined v-model="detailsPost.description" label="Descrição" />
    </div>

    <div class="q-mt-md row justify-end q-pa-sm">
      <q-btn color="grey-9 q-mr-sm" label="Voltar" @click="$router.go(-1)"/>
      <q-btn color="grey-9 q-mr-sm" label="Salvar" @click="handleSave"/>
      <q-btn v-if="this.$route.query.id" color="grey-9" label="Excluir" @click="confirm = true"/>
    </div>

    <dialogComponent :confirm.sync="confirm">
      <template v-slot:icon>
        <q-avatar icon="delete_forever" color="grey-9" text-color="white" />
      </template>
      <template v-slot:text>
        <span class="q-ml-sm">Tem certeza que deseja excluir este post?</span>
      </template>
      <template v-slot:button>
        <q-btn flat label="Cancelar" color="grey-9" @click="confirm = false" />
        <q-btn flat label="Confirmar" color="grey-9" @click="handleDelete" />
      </template>
    </dialogComponent>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DialogComponent from 'components/Dialog.vue'
import { date } from 'quasar'

export default {
  components: {
    DialogComponent
  },

  methods: {
    ...mapActions({
      getPost: 'posts/getPost',
      updatePost: 'posts/updatePost',
      deletePost: 'posts/deletePost',
      addPost: 'posts/addPost'
    }),

    async handleSave () {
      const data = {
        ...this.detailsPost,
        lastChange: this.detailsPost.lastChange = date.formatDate(new Date(), 'DD/MM/YYYY'),
        createdAt: this.detailsPost.createdAt = date.formatDate(new Date(), 'DD/MM/YYYY')
      }

      if (this.isEdit) {
        await this.updatePost(data)
      }

      await this.addPost(data)

      this.$router.push({ name: 'PostsList' })
    },

    async handleDelete () {
      await this.deletePost(this.detailsPost.id)
      this.$router.push({ name: 'PostsList' })
    }

  },

  computed: {
    ...mapGetters({
      detailsPost: 'posts/detailsPost',
      putEditPost: 'posts/putEditPost',
      postDelete: 'posts/postDelete',
      newPost: 'posts/newPost'
    }),

    isEdit () {
      return this.$route.name === 'DetailsPostEdit'
    }
  },

  async created () {
    if (this.isEdit) {
      await this.getPost(this.$route.query.id)
    }
  },

  data () {
    return {
      text: '',
      current: 1,
      size: 'md',
      confirm: false,
      inputImage: false
    }
  },

  name: 'PostsList'
}
</script>

<style lang="scss">
  .page-post {
    &__image {
      width: 100%;
      height: 50vh;
    }
  }
</style>
