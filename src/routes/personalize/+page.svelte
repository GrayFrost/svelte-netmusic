<script lang="ts">
  import { fetchPersonalFm } from '$api/login';

  let list = [];
  let playList = [];
  let current = {};

  let avatar = ''

  const fetchFunc = async () => {
    const res = await fetchPersonalFm();
    const { data } = res;
    list = data;
    current = data[0];
    console.log('zzh res 私人漫游', res);

    avatar = current.artists[0].picUrl;
  }
  // fetchFunc();
</script>

<div>
  <div class="flex">
    <div>
      <div class="relative">
        <img class="w-[120px] h-[120px]" src={avatar} />
      </div>
      <div>操作按钮</div>
    </div>
    <div>
      <div><span>标题</span><span>音质</span></div>
      <div><span>专辑：</span><span>歌手：</span></div>
      <div>歌词滚动区</div>
    </div>
  </div>
  <!-- 评论 -->
  <div></div>
</div>