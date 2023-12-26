<script>
	import { Settings, Mail, Shirt } from 'lucide-svelte';
	import { Input } from "$lib/components/ui/input";
</script>

<header class="h-12 flex dark:bg-netease-gray-2">
	<div class="w-[200px]">
		&lt; &gt;
	</div>
	<div class="flex flex-1 justify-between">
		<div class="flex items-center">
			<a href="/find/recommend" class="mx-4">个性推荐</a>
			<a href="/find/list" class="mx-4">歌单</a>
			<a href="/find/rank" class="mx-4">排行榜</a>
			<a href="/find/musicians" class="mx-4">歌手</a>
			<a href="/find/latest" class="mx-4">最新音乐</a>
		</div>
		<div class="flex items-center">
			<Input class="h-8"/>
			<Settings />
			<Mail />
			<Shirt />
		</div>
	</div>
</header>
