<script>
	import { Settings, Mail, Shirt } from 'lucide-svelte';
	import { Input } from "$lib/components/ui/input";
</script>

<header class="h-[48px] flex pt-4">
	<div class="w-[200px]">
		&lt; &gt;
	</div>
	<div class="flex flex-1 justify-between">
		<div class="flex">
			<a href="/find/recommend">个性推荐</a>
			<a href="/find/list">歌单</a>
			<a href="/find/rank">排行榜</a>
			<a href="/find/musicians">歌手</a>
			<a href="/find/latest">最新音乐</a>
		</div>
		<div class="flex items-center">
			<Input class="h-8"/>
			<Settings />
			<Mail />
			<Shirt />
		</div>
	</div>
</header>
