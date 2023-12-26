<script lang="ts">
  let creates = [1,2,3];
  let subscribes = [1,2,3];
</script>

<section>
  <div class="flex justify-between">
    <div>我创建的播客</div>
    <div>管理播客</div>
  </div>
  {#each creates as item}
    <div class="flex items-center h-16 hover:bg-slate-500">
      <div>avatar</div>
      <div>name</div>
      <div>订阅数</div>
      <div>数量</div>
    </div>
  {/each}
  <div></div>
</section>
<section>
  <div class="flex">
    <div>我订阅的播客</div>
  </div>
  {#each subscribes as item}
    <div class="flex items-center h-16 hover:bg-slate-500">
      <div>avatar</div>
      <div>name</div>
      <div>播客创建者</div>
      <div>数量</div>
    </div>
  {/each}
</section>