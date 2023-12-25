<script>
  import "../app.pcss";
  import Header from "./Header.svelte";
  import PlayBar from "./PlayBar.svelte";
  import SideBar from "./SideBar.svelte";
  import Music from '$lib/components/music/index.svelte';
  // import Counter from "./Counter.svelte";
</script>

<div class="w-full h-full flex flex-col relative overflow-hidden">
  <Header></Header>

  <main class="flex flex-1 overflow-hidden">
    <SideBar />
    <div class="flex-1 h-full overflow-scroll">
    <slot />
    </div>
  </main>
  <!-- <Counter /> -->
  <!-- <Music /> -->
  <PlayBar />
</div>
