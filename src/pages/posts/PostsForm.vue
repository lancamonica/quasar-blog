<template>
  <div class="page-post-form q-pa-lg">
    <div class="col-6">
      <q-img class="page-post-form__image full-width" :src="detailsPost.image" />
      <q-btn color="grey-4" text-color="brand" glossy unelevated icon="camera_enhance" label="Editar" @click="openInputUrl" />
    </div>
    <div v-if="showInputUrl">
      <q-input class="col-3 q-mt-md" rounded outlined v-model="detailsPost.image" label="URL da imagem" />
    </div>
    <div class="row items-start justify-between">
      <q-input class="col-3 q-mt-md" rounded outlined v-model="detailsPost.category" label="Categoria" />
      <q-input class="col-4 q-mt-md" rounded outlined v-model="detailsPost.title" label="Título" />
      <q-input class="col-3 q-mt-md" rounded outlined v-model="detailsPost.author" label="Autor" />
      <q-input class="col-12 q-mt-md" rounded outlined v-model="detailsPost.description" label="Descrição" />
    </div>

    <div class="q-mt-md row justify-end q-pa-sm">
      <q-btn color="brand q-mr-sm" label="Voltar" @click="$router.go(-1) "/>
      <q-btn color="brand q-mr-sm" label="Salvar" @click="handleSave" />
      <q-btn v-if="idPost" color="brand" label="Excluir" @click="openModal" />
    </div>

    <q-dialog v-model="isOpenModal" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete_forever" color="grey-9" text-color="white" />
          <span class="q-ml-sm">Tem certeza que deseja excluir este post?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="brand" @click="openModal" />
          <q-btn flat label="Confirmar" color="brand" @click="handleDelete" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { date } from 'quasar'

export default {
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
        updatedAt: this.detailsPost.updatedAt = date.formatDate(new Date(), 'DD/MM/YYYY'),
        createdAt: this.detailsPost.createdAt = date.formatDate(new Date(), 'DD/MM/YYYY')
      }

      if (this.isEdit) {
        await this.updatePost(data)
        return this.$router.push({ name: 'PostsList' })
      }

      await this.addPost(data)

      this.$router.push({ name: 'PostsList' })
    },

    async handleDelete () {
      await this.deletePost(this.detailsPost.id)
      this.$router.push({ name: 'PostsList' })
    },

    openModal () {
      this.isOpenModal = !this.isOpenModal
    },

    openInputUrl () {
      this.isEditImage = true
    }

  },

  computed: {
    ...mapGetters({
      detailsPost: 'posts/detailsPost',
      putEditPost: 'posts/putEditPost',
      postDelete: 'posts/postDelete'
    }),

    isEdit () {
      return this.$route.name === 'DetailsPostEdit'
    },

    showInputUrl () {
      return !this.$route.query.id || this.isEditImage
    },

    idPost () {
      return this.$route.query.id
    }
  },

  async created () {
    if (this.isEdit) {
      await this.getPost(this.idPost)
    }
  },

  data () {
    return {
      text: '',
      current: 1,
      isOpenModal: false,
      isEditImage: false
    }
  },

  name: 'PostsList'
}
</script>

<style lang="scss">
  .page-post-form {
    &__image {
      height: 50vh;
    }
  }
</style>
