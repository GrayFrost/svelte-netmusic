<script>
  import "../app.pcss";
  import Header from "./Header.svelte";
  import PlayBar from "./PlayBar.svelte";
  import SideBar from "./SideBar.svelte";
  import Music from '$lib/components/music/index.svelte';
</script>

<div class="w-full h-full flex flex-col relative">
  <Header></Header>

  <main class="flex flex-1">
    <SideBar />
    <div class="flex-1 h-full">
    <slot />
    </div>
  </main>
  <Music />
  <PlayBar />
</div>
