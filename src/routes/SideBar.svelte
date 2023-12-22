<script lang="ts">
  import { Music, Radio, BoomBox, PlaySquare } from 'lucide-svelte';
</script>

<div class="w-[200px]">
  <div class="h-12 flex items-center px-4">
    <Music />
    <a href="/find-music">发现音乐</a>
  </div>
  <div class="h-12 flex items-center px-4">
    <Radio />
    <a href="">博客</a>
  </div>
  <div class="h-12 flex items-center px-4">
    <BoomBox />
    <a href="">私人漫游</a>
  </div>
  <div class="h-12 flex items-center px-4">
    <PlaySquare />
    <a href="">视频</a>
  </div>
  <div class="h-12 flex items-center px-4">
    <a href="">关注</a>
  </div>
</div>
