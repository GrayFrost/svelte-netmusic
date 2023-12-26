<script lang="ts">
  import { getStores, navigating, page, updated } from '$app/stores';
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
  import LoginState from "$components/login-state.svelte";

  let path: string;
  function getPath(currentPath: string) {
    path = currentPath;
  }
  $: getPath($page.url.pathname);
</script>

<div class="w-[200px] flex flex-col dark:bg-netease-gray-1">
  <LoginState />
  <div class="flex-1 overflow-scroll">
  <ListItem isActive={path.startsWith('/find')}>
    <Music />
    <a href="/find">发现音乐</a>
  </ListItem>
  <ListItem isActive={path === '/podcast'}>
    <Radio />
    <a href="/podcast">播客</a>
  </ListItem>
  <ListItem isActive={path === '/personalize'}>
    <BoomBox />
    <a href="/personalize">私人漫游</a>
  </ListItem>
  <ListItem isActive={path === '/video'}>
    <PlaySquare />
    <a href="/video">视频</a>
  </ListItem>
  <ListItem isActive={path === '/follow'}>
    <UsersRound />
    <a href="/follow">关注</a>
  </ListItem>
  <div>
    <div>我的音乐</div>
    <ListItem isActive={path === '/favorite'}>
      <Heart />
      <a href="/favorite">我喜欢的音乐</a>
    </ListItem>
    <ListItem isActive={path === '/recently'}>
      <Clock4 />
      <a href="/recently">最近播放</a>
    </ListItem>
    <ListItem isActive={path === '/my-podcast'}>
      <Disc3 />
      <a href="/my-podcast">我的播客</a>
    </ListItem>
    <ListItem isActive={path === '/collect'}>
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
