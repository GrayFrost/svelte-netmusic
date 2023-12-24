<script>
	import { Settings, Mail, Shirt } from 'lucide-svelte';
</script>

<header class="h-[48px] flex pt-4">
	<div class="w-[200px]">
		avatar
	</div>
	<div class="flex flex-1">
		<div class="flex">
			<a href="/find-music/recommend">个性推荐</a>
			<a href="/find-music/list">歌单</a>
			<a href="/find-music/rank">排行榜</a>
			<a href="/find-music/musicians">歌手</a>
			<a href="/find-music/latest">最新音乐</a>
		</div>
		<div class="flex items-end">
			<input />
			<Settings />
			<Mail />
			<Shirt />
		</div>
	</div>
</header>
