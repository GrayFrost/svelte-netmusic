<script lang="ts">
  let list = ['飙升榜', '新歌榜', '原创榜', '热歌榜'];
  let list2 =  [1,2,3,4,5,6,7,8,9];
</script>

<div class="p-4">
  <section>
    <h3>官方榜</h3>
    {#each list as item}
      <div class="flex">
        <div class="w-[100px] h-[100px] bg-gray-700 rounded">
          {item}
        </div>
        <div>
          <ul>
            <li>歌曲1</li>
            <li>歌曲2</li>
          </ul>
          <div>查看全部</div>
        </div>
      </div>
    {/each}
  </section>
  <section>
    <h3>全球榜</h3>
    <div class="grid grid-cols-4 gap-4">
      {#each list2 as item}
        <div class="h-0 pb-[100%] rounded bg-orange-200"></div>
      {/each}
    </div>
  </section>
</div>