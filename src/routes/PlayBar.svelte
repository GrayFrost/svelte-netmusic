<script lang="ts">
  import {
    Pause,
    Play
  } from "lucide-svelte";
</script>
<div class="h-[50px] flex flex-col">
  <div class="h-0.5 bg-rose-400"></div>
  <div class="flex-1 flex justify-between">
    <div>
      <img src="" />
      <div>
        <div>标题</div>
        <div>进度</div>
      </div>
    </div>
    <div class="flex">
      <span class="w-[32px] h-[32px] rounded-full bg-rose-400 flex items-center justify-center"><Pause class="w-4 h-4"/></span>
      <span class="w-[32px] h-[32px] rounded-full bg-rose-400 flex items-center justify-center"><Play class="w-4 h-4"/></span>
    </div>
    <div>
      歌词，声音控制
    </div>
  </div>
</div>