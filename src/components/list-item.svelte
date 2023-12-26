<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let isActive: boolean = false;

  let divClass: string;
  $: divClass = twMerge("h-12 flex items-center px-4 hover:bg-black",
  isActive && "text-netease bg-black"
  )
</script>

<div class={divClass}>
  <slot />
</div>