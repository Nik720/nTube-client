<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <span>Ntube Admin</span>
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />

      <b-navbar-nav class="ml-auto">
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
    </AppHeader>

    <div class="app-body">
      <AppSidebar fixed>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarMinimizer/>
      </AppSidebar>

      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>

    <TheFooter>
      <!--footer-->
      <div>
        <a href="javascript:void(0)">Ntube</a>
        <span class="ml-1">&copy; 2018 Ntube.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="javascript:void(0)">Ntube</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>

<style lang="scss">
</style>