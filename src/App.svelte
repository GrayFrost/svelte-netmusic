<script lang="ts">
  import Router from 'svelte-spa-router';
  import routes from './router';
  import BasicLayout from './components/basic-layout'
  import Header from './containers/header';
  import Sidebar from './containers/sidebar';
  import Footer from './containers/footer';
</script>

<BasicLayout>
  <Header slot="header" />
  <Sidebar slot="sidebar" />
  <Router {routes} slot="content" />
  <Footer slot="footer"></Footer>
</BasicLayout>

<style>

</style>
