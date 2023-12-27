<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  let pageNo: number = 1;
  let pageSize: number = 20; // todo 100
  let list: any[] = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<div class="p-4">
  <div class="w-full h-[100px] bg-slate-500 rounded">banner</div>
  <div class="flex justify-between">
    <div>全部歌单</div>
    <ul class="flex justify-end">
      <li>华语</li>
      <li>流行</li>
      <li>摇滚</li>
      <li>民谣</li>
      <li>电子</li>
      <li>另类/独立</li>
      <li>轻音乐</li>
      <li>综艺</li>
      <li>影视原声</li>
    </ul>
  </div>
  <div class="grid grid-cols-4 gap-4">
    {#each list as item, index}
      <div class="rounded bg-slate-600 h-0 pb-[100%] cursor-pointer">
        cover{index}
      </div>
    {/each}
  </div>
  <div class="flex justify-center">
    <Button
      variant="outline"
      size="icon"
      class="h-8 w-8 dark:bg-netease-gray-2"
    >
      <ChevronLeft size={15} />
    </Button>
    <Button variant="outline" class="h-8 w-8 dark:bg-netease-gray-2">1</Button>
    <Button
      variant="outline"
      size="icon"
      class="h-8 w-8 dark:bg-netease-gray-2"
    >
      <ChevronRight size={15} />
    </Button>
  </div>
</div>
