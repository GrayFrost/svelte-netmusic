<script lang="ts">
  let languages = ['全部', '华语', '欧美', '日本', '韩国', '其他'];
  let types = ['全部', '男歌手', '女歌手', '乐队组合'];
  let filters = ['热门', 'A', 'B' ,'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'];

  let list = [1,2,3,4,5,6];
</script>

<div class="p-4">
  <div class="flex">
    <span class="flex-shrink-0">语种：</span>
    <div class="flex">
      {#each languages as item}
        <span class="w-20">{item}</span>
      {/each}
    </div>
  </div>
  <div class="flex">
    <span class="flex-shrink-0">分类：</span>
    <div class="flex">
      {#each types as item}
        <span class="w-20">{item}</span>
      {/each}
    </div>
  </div>
  <div class="flex">
    <span class="flex-shrink-0">筛选：</span>
    <div class="flex flex-wrap">
      {#each filters as item}
        <span class="w-16">{item}</span>
      {/each}
    </div>
  </div>
  <div class="grid grid-cols-5 gap-4">
    {#each list as item}
      <div class="h-0 pb-[100%] rounded bg-sky-200"></div>
    {/each}
  </div>
</div>