<script lang="ts">
  import { onMount } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Dialog from "$lib/components/ui/dialog";
  import { fetchQrKey, fetchQrCreate, fetchQrCheck, fetchLoginStatus, fetchUserPlayList, fetchPersonalFm, fetchPlaylistTrackAll, fetchSongUrl } from '../api/login';

  let isLogin = false;
  let dialogOpen = false;
  let imgSrc = 'https://hbimg.b0.upaiyun.com/abe38d8df0470b34a484161886f7c3e45b421663604d-jY2yP8_fw658';

  const createQrCode = (url: string) => {
    const qrcode = new QRCode(document.getElementById("qrcode"), url)
  };

  const getLoginInfo = async () => {
    const { data: userInfo } = await fetchLoginStatus();
    localStorage.setItem('net-music-user-info', JSON.stringify(userInfo.account));
  }

  const statusCheck = async (key: string) => {
    const { code, cookie } = await fetchQrCheck({
      key
    });
    if (code === 803) {
      getLoginInfo();
      // todo close modal
    } else if (code === 801 || code === 802) {
      setTimeout(() => {
        statusCheck(key);
      }, 1000);
    } else if (code === 800) {
      alert('二维码过期，请刷新');
      return;
    } // 502状态
    console.log('zzh res check', code);
  }

  

  const openQrCodeModal = async () => {
    console.log('zzh clickc');
    // todo test
    dialogOpen = true;
    const { data } = await fetchQrKey();
    const { code, unikey } = data;
    const { data: createRes } = await fetchQrCreate({
      key: unikey
    });
    const { qrurl } = createRes;
    // dialogOpen = true;
    createQrCode(qrurl);
    statusCheck(unikey);
  }
</script>

<div class="h-16 flex-0 flex">
  <div on:click={openQrCodeModal}>
    <Avatar.Root>
      <Avatar.Image src={imgSrc} alt="avatar"  />
    </Avatar.Root>
  </div>
  
  <Dialog.Root bind:open={dialogOpen}>
    <Dialog.Trigger>
      
    </Dialog.Trigger>
    <Dialog.Content>
      <h3>请扫码登录</h3>
      <div id="qrcode"></div>
    </Dialog.Content>
  </Dialog.Root>
</div>