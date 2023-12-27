<script lang="ts">
  import {
    Pause,
    Play
  } from "lucide-svelte";
  import Playing from '$components/playing.svelte';
  import { showPlayingPage } from '../store/index'

  function toggle() {
    $showPlayingPage = !$showPlayingPage
  }
</script>
<div class="h-[50px] flex flex-col">
  <div class="h-0.5 bg-netease"></div>
  <div class="flex-1 flex justify-between dark:bg-netease-gray-2">
    <div class="flex" on:click={toggle}>
      <img src="" />
      <div>
        <div>标题</div>
        <div>进度</div>
      </div>
    </div>
    <div class="flex">
      <span class="w-[32px] h-[32px] rounded-full bg-netease flex items-center justify-center"><Pause class="w-4 h-4"/></span>
      <span class="w-[32px] h-[32px] rounded-full bg-netease flex items-center justify-center"><Play class="w-4 h-4"/></span>
    </div>
    <div>
      歌词，声音控制
    </div>
  </div>
</div>

<Playing />
