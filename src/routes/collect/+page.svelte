<script lang="ts">
import { onMount } from 'svelte';
import { fetchAlbumSublist } from '$api/login';

let list = [];
$:count = list.length;

const getList = async () => {
  const res = await fetchAlbumSublist();
  const { code, data } = res;
  list = data;
  console.log('zzh res', res);
}

onMount(() => {
  getList();
})
</script>

<div>
  <div class="flex">
    <h1>收藏的专辑（）</h1>
    <div>搜索收藏专辑</div>
  </div>
  {#each list as item}
    <div class="h-[80px] flex items-center hover:bg-gray-500">
      <img class="w-16 h-16" src={item.picUrl} alt="cover" />
      <span>{item.name}</span>
      <span>{item.artists[0].name}</span>
      <span>{item.size}首</span>
    </div>
  {/each}
</div>