<script lang="ts">
  import { link }  from 'svelte-spa-router';
</script>

<div>
  close
</div>
<div class="navigate">
  <a href="/" use:link>个性推荐</a>
  <a href="/find-music/list" use:link>歌单</a>
  <a href="/find-music/rank" use:link>排行榜</a>
  <a href="/find-music/musicians" use:link>歌手</a>
  <a href="/find-music/latest-music" use:link>最新音乐</a>
</div>


<style lang="less" scoped>
.navigate {
  display: flex;
}
</style>