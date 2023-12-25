<script lang="ts">
import { onMount } from 'svelte';
import { Input } from "$lib/components/ui/input";
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
// todo loadmore
</script>

<div>
  <div class="flex items-center pt-[64px] px-[32px]">
    <div class="w-16 h-16 bg-orange-400 rounded-sm"></div>
    <span>我的数字专辑</span>
  </div>
  <div class="flex px-[32px] space-between pt-[64px]">
    <h1>收藏的专辑（{count}）</h1>
    <Input placeholder="搜索收藏的专辑" />
  </div>
  {#each list as item}
    <div class="h-[80px] flex items-center hover:bg-gray-500 py-4 px-[32px]">
      <img class="w-16 h-16 rounded-sm" src={item.picUrl} alt="cover" />
      <div class="flex-1">{item.name}</div>
      <div class="w-[200px]">{item.artists[0].name}</div>
      <div class="w-[64px]">{item.size}首</div>
    </div>
  {/each}
</div>