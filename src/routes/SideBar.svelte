<script lang="ts">
  import {
    Music,
    Radio,
    BoomBox,
    PlaySquare,
    UsersRound,
    Heart,
    Clock4,
    Disc3,
    Star
  } from "lucide-svelte";
  import ListItem from "$components/list-item.svelte";
</script>

<div class="w-[200px] flex flex-col">
  <div class="h-16 flex-0">
    avatar
  </div>
  <div class="flex-1 overflow-scroll">
  <ListItem isActive={true}>
    <Music />
    <a href="/find-music">发现音乐</a>
  </ListItem>
  <ListItem>
    <Radio />
    <a href="">播客</a>
  </ListItem>
  <ListItem>
    <BoomBox />
    <a href="">私人漫游</a>
  </ListItem>
  <ListItem>
    <PlaySquare />
    <a href="">视频</a>
  </ListItem>
  <ListItem>
    <UsersRound />
    <a href="">关注</a>
  </ListItem>
  <div>
    <div>我的音乐</div>
    <ListItem>
      <Heart />
      我喜欢的音乐
    </ListItem>
    <ListItem>
      <Clock4 />
      最近播放
    </ListItem>
    <ListItem>
      <Disc3 />
      我的播放
    </ListItem>
    <ListItem>
      <Star />
      <a href="/collect">我的收藏</a>
    </ListItem>
  </div>
  <div>
    <div>创建的歌单</div>
    <ListItem>自己创建的歌单</ListItem>
  </div>
  <div>
    <div>收藏的歌单</div>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
    <ListItem>歌单一</ListItem>
  </div>
  </div>
</div>
