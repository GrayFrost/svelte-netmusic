<script>
  import "../app.pcss";
  import Header from "./Header.svelte";
  import PlayBar from "./PlayBar.svelte";
  import SideBar from "./SideBar.svelte";
  // import Counter from "./Counter.svelte";
</script>

<div class="w-full h-full flex flex-col relative overflow-hidden">
  <Header></Header>

  <main class="flex flex-1 overflow-hidden">
    <SideBar />
    <div class="flex-1 h-full overflow-scroll dark:bg-netease-gray-3">
      <slot />
    </div>
  </main>
  <!-- <Counter /> -->
  <PlayBar />
</div>
