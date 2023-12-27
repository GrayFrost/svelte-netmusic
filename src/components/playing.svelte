<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { showPlayingPage } from '../store/index'

</script>

{#if $showPlayingPage}
<div class="absolute top-12 bottom-[50px] w-full bg-netease-gray-2" transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
  <div class="flex">
    <div class="flex-1">
      <div class="w-[120px] h-[120px] rounded-full bg-black flex items-center justify-center">
        <div class="w-20 h-20 rounded-full bg-orange-400"></div>
      </div>
    </div>
    <div class="flex-1">
      <div>标题</div>
      <div>
        <span>专辑</span>
        <span>歌手</span>
        <span>来源</span>
      </div>
      <div>
        歌词
      </div>
    </div>
  </div>
  <div class="flex">
    <div>
      <h3>评论</h3>
      <h3>精彩评论</h3>
      <h3>最新评论</h3>
    </div>
    <div>
      <h3>相似歌曲</h3>
    </div>
  </div>
</div>
{/if}