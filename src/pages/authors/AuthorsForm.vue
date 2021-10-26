<template>
  <div class="q-pa-lg">
    <div class="row items-start justify-between">
      <q-input class="col-5 q-mt-md" rounded outlined v-model="detailsAuthor.name" label="Nome" />
      <q-input class="col-5 q-mt-md" rounded outlined v-model="detailsAuthor.email" label="E-mail" />
    </div>

    <div class="q-mt-md row justify-end q-pa-sm">
      <q-btn color="grey-9 q-mr-sm" label="Voltar" @click="comeBack"/>
      <q-btn color="grey-9 q-mr-sm" label="Salvar" @click="handleSave" />
      <q-btn v-if="idAuthor" color="grey-9" label="Excluir" @click="openModal" />
    </div>

    <dialog-confirm v-model="isOpenModal" :content="contentDialog" @cancel="openModal" @confirm="handleDelete" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DialogConfirm from 'components/DialogConfirm'

export default {
  components: {
    DialogConfirm
  },

  methods: {
    ...mapActions({
      getAuthor: 'authors/getAuthor',
      updateAuthor: 'authors/updateAuthor',
      deleteAuthor: 'authors/deleteAuthor',
      addAuthor: 'authors/addAuthor'
    }),

    async handleSave () {
      if (this.isEdit) {
        await this.updateAuthor(this.detailsAuthor)
        return this.$router.push({ name: 'AuthorsList' })
      }
      await this.addAuthor(this.detailsAuthor)
      this.$router.push({ name: 'AuthorsList' })
    },

    async handleDelete () {
      await this.deleteAuthor(this.detailsAuthor.id)
      this.$router.push({ name: 'AuthorsList' })
    },

    openModal () {
      this.isOpenModal = !this.isOpenModal
    },

    comeBack () {
      this.$router.go(-1)
    }
  },

  computed: {
    ...mapGetters({
      detailsAuthor: 'authors/detailsAuthor',
      putEditAuthor: 'authors/putEditAuthor',
      authorDelete: 'authors/authorDelete'
    }),

    isEdit () {
      return this.$route.name === 'DetailsAuthorEdit'
    },

    idAuthor () {
      return this.$route.query.id
    },

    contentDialog () {
      return {
        subtitle: 'Tem certeza que deseja excluir este autor?',
        labelCancel: 'Cancelar',
        labelSave: 'Confirmar'
      }
    }
  },

  async created () {
    if (this.isEdit) {
      await this.getAuthor(this.idAuthor)
    }
  },

  data () {
    return {
      text: '',
      current: 1,
      isOpenModal: false,
      isEditImage: false
    }
  }
}
</script>
