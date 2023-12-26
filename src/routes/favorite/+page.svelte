<script lang="ts">
  import MusicListTable from '$components/music-list-table.svelte';

  let activeTab: 'list' | 'comment' | 'collect' = 'list';
  let list = [1,2,3,4,5,6,7];
</script>

<div>
  <div class="flex h-[180px]">
    <div class="w-[180px] h-[180px] bg-slate-400 rounded">cover</div>
    <div class="flex-1">
      <div class="flex">
        <span>歌单</span>
        <h3>我喜欢的音乐</h3>
      </div>
      <div class="flex">
        <div>avatar</div>
        <div>nickname</div>
        <div>创建时间</div>
      </div>
      <div class="flex">
        <div>播放全部</div>
        <div>收藏</div>
        <div>分享</div>
        <div>下载全部</div>
      </div>
      <div class="flex">
        <div>歌曲数</div>
        <div>播放数</div>
      </div>
    </div>
  </div>
  <div>
    <div class="flex">
      <span on:click={() => activeTab = 'list'} class={activeTab === 'list' ? 'text-netease' : ''}>歌曲列表</span>
      <span on:click={() => activeTab = 'comment'} class={activeTab === 'comment' ? 'text-netease' : ''}>评论</span>
      <span on:click={() => activeTab = 'collect'} class={activeTab === 'collect' ? 'text-netease' : ''}>收藏者</span>
    </div>
    <div class={activeTab === 'list' ? 'block' : 'hidden'}>
      <MusicListTable list={list} />
    </div>
    <div class={activeTab === 'comment' ? 'block' : 'hidden'}>评论tabpane</div>
    <div class={activeTab === 'collect' ? 'block' : 'hidden'}>收藏者tabpane</div>
  </div>

</div>