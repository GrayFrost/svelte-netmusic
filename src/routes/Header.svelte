<script lang="ts">
	import { getStores, navigating, page, updated } from '$app/stores';
	import { Settings, Mail, Shirt } from 'lucide-svelte';
	import { Input } from "$lib/components/ui/input";
	import { twMerge } from 'tailwind-merge';

	let path: string;
  function getPath(currentPath: string) {
    path = currentPath;
  }
  $: getPath($page.url.pathname);

	let finds = [
		{url: '/find/recommend', name: '个性推荐'},
		{url: '/find/list', name: '歌单'},
		{url: '/find/rank', name: '排行榜'},
		{url: '/find/musicians', name: '歌手'},
		{url: '/find/latest', name: '最新音乐'}
	]

</script>

<header class="h-12 flex dark:bg-netease-gray-2">
	<div class="w-[200px]">
		&lt; &gt;
	</div>
	<div class="flex flex-1 justify-between">
		<div class="flex items-center">
			{#each finds as item}
				<a href={item.url} class={`mx-4 ${path === item.url ? 'text-rose-500' : ''}`}>{item.name}</a>
			{/each}
		</div>
		<div class="flex items-center">
			<Input class="h-8"/>
			<Settings />
			<Mail />
			<Shirt />
		</div>
	</div>
</header>
