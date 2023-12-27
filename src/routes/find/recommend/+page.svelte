<script lang="ts">
  import Slider from '$components/slider.svelte';
  import { fetchHomepageBlockPage } from '$api/video';

  let recommends = [1,2,3,4,5, 6, 7,8,9, 10];
  let plays = [1,2,3,4];
  let latests = [1,2,3,4,5,6,7,8,9,10];
  let mvs = [1,2];
  let podcasts = [1,2,3,4,5,6];
  let lives = [1,2,3,4];

  async function getData() {
    const res = await fetchHomepageBlockPage();
    console.log('zzh res', res);
  }

  // getData();
</script>

<div>
  <h2>推荐</h2>
  <Slider />
  <section>
    <h3>推荐歌单</h3>
    <div class="grid grid-cols-5 gap-4">
      {#each recommends as recommendItem}
        <div class="bg-slate-400 rounded">
          <div>图片</div>
          <span>标题</span>
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h3>独家放送</h3>
    <div class="grid grid-cols-4 gap-4">
      {#each plays as playItem, index}
        <div class="bg-slate-500 rounded h-0 pb-[50%]">
          独家放送{index}
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h3>最新音乐</h3>
    <div class="grid grid-cols-2 gap-4">
      {#each latests as latestItem, index}
        <div class="flex items-center">
          <div class="w-10 h-10 bg-slate-700 rounded-sm"></div>
          <span>{index}</span>
          <div>
            <div>最新音乐标题</div>
            <div>歌手名称</div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h3>推荐MV</h3>
    <div class="grid grid-cols-4 gap-4">
      {#each mvs as mvItem, index}
        <div class="rounded bg-slate-800 h-0 pb-[50%] cursor-pointer">mv{index}</div>
      {/each}
    </div>
  </section>
  <section>
    <h3>播客</h3>
    <div class="grid grid-cols-2 gap-4">
      {#each podcasts as podcastItem, index}
        <div class="flex items-center">
          <div class="bg-red-500 w-20 h-20 rounded-sm"></div>
          <div>
            <div>标题</div>
            <div>内容描述</div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h3>Look直播</h3>
    <div class="grid grid-cols-4 gap-4">
      {#each lives as liveItem, index}
        <div class="bg-red-500 rounded h-0 pb-[100%] cursor-pointer">
          直播{index}
        </div>
      {/each}
    </div>
  </section>
</div>