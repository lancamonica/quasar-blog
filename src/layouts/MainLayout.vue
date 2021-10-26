<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-9 glossy">
        <q-toolbar-title>Quasar Blog</q-toolbar-title>
        <div class="q-gutter-sm">
          <q-breadcrumbs active-color="white">
            <q-breadcrumbs-el class="q-ml-md cursor-pointer non-selectable" label="Home" icon="home" :to="{ name: 'PostsList' }" />
            <q-breadcrumbs-el class="q-ml-md cursor-pointer non-selectable" label="Autores" icon="person" :to="{ name: 'AuthorsList' }" />
            <q-breadcrumbs-el class="q-ml-md cursor-pointer non-selectable" label="Autores" icon="person" :to="{ name: 'AuthorsList' }" />
          </q-breadcrumbs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
