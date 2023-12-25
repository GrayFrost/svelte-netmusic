<script lang="ts">
  import { onMount } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Dialog from "$lib/components/ui/dialog";
  import { fetchQrKey, fetchQrCreate, fetchQrCheck, fetchLoginStatus, fetchUserPlayList, fetchPersonalFm, fetchPlaylistTrackAll, fetchSongUrl } from '../api/login';
  // import storage from '$lib/utils/storage';

  let isLogin = false;
  let dialogOpen = false;
  let storageData = null;
  let userInfo = {};

  // const data = storage.get();
  $: {
    if (storageData) {
      isLogin = true;
      const { profile } = storageData;
      userInfo = profile;
    }
  }
  
  

  const createQrCode = (url: string) => {
    new QRCode(document.getElementById("qrcode"), url)
  };

  const getLoginInfo = async () => {
    const { data: userInfo } = await fetchLoginStatus();
    // todo storage.set(userInfo);
    isLogin = true;
  }

  const statusCheck = async (key: string) => {
    if (!dialogOpen) {
      return;
    }
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
  }
  

  const openQrCodeModal = async () => {
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
  {#if !isLogin}
    <div on:click={openQrCodeModal}>
      登录
    </div>
  {:else}
    <div class="flex items-center pl-4">
      <Avatar.Root>
        <Avatar.Image src={userInfo.avatarUrl || ''} alt="avatar" />
      </Avatar.Root>
      <span class="px-4">{userInfo.nickname || ''}</span>
    </div>
  {/if}
  
  <Dialog.Root bind:open={dialogOpen}>
    <Dialog.Trigger>
      
    </Dialog.Trigger>
    <Dialog.Content>
      <div class="flex flex-col">
        <h3>请扫码登录</h3>
        <div id="qrcode"></div>
      </div>
    </Dialog.Content>
  </Dialog.Root>
</div>