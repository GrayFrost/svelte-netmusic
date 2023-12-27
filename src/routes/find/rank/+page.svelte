<script lang="ts">
  import { fetchTopList, fetchPlayListDetail } from "$api/video";
  let list = [];

  async function getListData() {
    const res = await fetchTopList();
    const { list: listData } = res;
    list = listData;
    // await getFirstData(); // todo
  }


  getListData();

  // 调到歌单
  function gotoList(item) {
    const { id } = item;
  }

  function countText(count: number): string {
    if (count >= 100000000) {
      return Math.floor(count / 100000000) + '亿';
    } else if (count >= 1000000 && count < 100000000) {
      return Math.floor(count / 1000000) + '万';
    } else {
      return count + '';
    }
  }
</script>

<div class="p-4">
    <div class="grid grid-cols-4 gap-4">
      {#each list as item}
        <div class="hover:cursor-pointer">
          <div
            class="h-0 pb-[100%] rounded relative"
            style={`background: url(${item.coverImgUrl}); background-size: cover;`}
          >
            <span class="absolute top-1 right-2">{countText(item.playCount)}</span>
          </div>
          <div class="text-slate-300 hover:text-white text-sm" on:click={gotoList(item)}>{item.name}</div>
        </div>
      {/each}
    </div>
</div>
