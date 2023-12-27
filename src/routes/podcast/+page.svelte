<script lang="ts">
  let list = [1,2,3,4,5];
</script>

<div class="p-4">
  <div class="flex h-[200px]">
    <div class="h-full flex-1 bg-red-100 rounded mr-4">left</div>
    <div class="h-full w-[320px] bg-red-300 rounded">right</div>
  </div>
  <section>
    <h3>猜你喜欢</h3>
    <div class="grid grid-cols-5 gap-4">
      {#each list as item}
        <div class="h-0 pb-[100%] rounded-sm bg-slate-300"></div>
      {/each}
    </div>
  </section>
  <section>
    <h3>脱口秀</h3>
    <div class="grid grid-cols-2 gap-4">
      {#each list as item}
        <div class="flex">
          <div class="w-16 h-16 rounded-sm bg-orange-800"></div>
          <div>text</div>
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h3>娱乐</h3>
    <div class="grid grid-cols-5 gap-4">
      {#each list as item}
        <div class="h-0 pb-[100%] rounded-sm bg-slate-300"></div>
      {/each}
    </div>
  </section>
  <section>
    <h3>知识</h3>
    <div class="grid grid-cols-5 gap-4">
      {#each list as item}
        <div class="h-0 pb-[100%] rounded-sm bg-slate-300"></div>
      {/each}
    </div>
  </section>
</div>