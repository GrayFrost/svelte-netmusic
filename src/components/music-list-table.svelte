<script lang="ts">
  // import MusicListItem from './music-list-item.svelte';
  export let list = [];

  let col1Class = 'w-[100px]';
  let col2Class = 'flex-1';
  let col3Class = 'w-[100px]';
  let col4Class = 'w-[150px]';
  let col5Class = 'w-[80px]';
</script>

<div>
  <div class="flex">
    <div class={col1Class}></div>
    <div class={col2Class}>音乐标题</div>
    <div class={col3Class}>歌手</div>
    <div class={col4Class}>专辑</div>
    <div class={col5Class}>时常</div>
  </div>
  {#each list as item, index}
    <div class="flex h-12 hover:bg-slate-600 items-center">
      <div class={col1Class}>{index}收藏下载</div>
      <div class={col2Class}>音乐标题</div>
      <div class={col3Class}>歌手</div>
      <div class={col4Class}>专辑</div>
      <div class={col5Class}>时常</div>
    </div>
  {/each}
</div>