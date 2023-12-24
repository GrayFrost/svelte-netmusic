<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchQrKey, fetchQrCreate, fetchQrCheck, fetchLoginStatus, fetchUserPlayList, fetchPersonalFm, fetchPlaylistTrackAll, fetchSongUrl } from '../api/login';

  let key = '';
  let cookieData = '';
  let playlistData = [];
  let personalFMData = {};
  let testUrl = ''

  const createQrCode = (url: string) => {
    const qrcode = new QRCode(document.getElementById("qrcode"), url)
  };

  const statusCheck = async (key: string) => {
    const { code, cookie } = await fetchQrCheck({
      key
    });
    if (code === 803) {
      cookieData = cookie;
    } else if (code === 801 || code === 802) {
      setTimeout(() => {
        statusCheck(key);
      }, 1000)
    } else if (code === 800) {
      alert('二维码过期，请刷新');
      return;
    } // 502状态
    console.log('zzh res check', code);
    
  }

  // 登录
  // const { data } = await fetchQrKey();
    // const { code, unikey } = data;
    // const { data: createRes } = await fetchQrCreate({
    //   key: unikey
    // });
    // const { qrurl } = createRes;
    //createQrCode(qrurl);
    // statusCheck(unikey);

  onMount(async () => {
    
    

    const { data: userInfo } = await fetchLoginStatus();
    localStorage.setItem('net-music-user-info', JSON.stringify(userInfo.account));
    const { account: { id } } = userInfo;
    const res = await fetchUserPlayList({ uid: id, limit: 10});
    const { playlist } = res;
    playlistData = playlist;
    
    // const fmRes = await fetchPersonalFm();
    console.log('zzh playlist', playlist);
    const first = playlist[0];
    const allRes = await fetchPlaylistTrackAll({
      id: first.id
    });
    const { songs } = allRes;
    const firstSong = songs[0];
    const { data } = await fetchSongUrl({
      id: firstSong.id
    })
    const { url } = data[0];
    testUrl = url;
  })
</script>
<div>
  <h2>个性推荐</h2>
  <div id="qrcode"></div>
  <audio
    src={testUrl}
    controls
    autoplay
    loop
    muted
  >
    浏览器不支持音频播放。
  </audio> 
  <ul>
    {#each playlistData as item}
      <li style="display: flex">
        <img src={item.coverImgUrl} style="width: 64px;height: 64px;"/>
        <span>{item.name}</span>
      </li>
    {/each}
  </ul>
</div>