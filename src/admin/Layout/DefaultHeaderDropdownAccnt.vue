<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <i class="fa fa-user fa-lg"></i>
    </template>
    <template slot="dropdown">
      <b-dropdown-item @click="logout()"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
      logout() {
        localStorage.removeItem('nTube.jwt')
        localStorage.removeItem('nTube.user')
        this.$router.push('/')
      }
     }
  }
}
</script>
