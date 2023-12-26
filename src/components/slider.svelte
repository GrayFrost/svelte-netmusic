<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  let sliderRef;
  let list = [1,2,3, 4,5];
  let currentIndex = 0;
  let autoPlay = true;
  let timer: number;
  let interval = 1000;

  function pause() {
    if (timer) {
      clearInterval(timer);
    }
  }

  function play() {
    pause();
    if (autoPlay) {
      timer = setInterval(()=>{
        next();
      }, interval)
    }
  }

  function prev() {
    currentIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
  }

  function next() {
    currentIndex = ++currentIndex % list.length;
  }

  onMount(() => {
    // play();
  })

  onDestroy(() => {
    pause();
  })

let activeClass: string;
let prevClass: string;
let nextClass: string;
let prevIndex: number;
let nextIndex: number;
$: {
  nextIndex = currentIndex === list.length - 1 ? 0 : currentIndex + 1;
  prevIndex = currentIndex === 0 ? list.length - 1 : currentIndex - 1;
  const common = 'absolute top-0 left-1/2 w-8/12 h-full transition-all bg-sky-100 bg-no-repeat transform -translate-x-1/2 -translate-z-20 z-1 text-black rounded';
  activeClass = twMerge(
    common,
    'z-20 -translate-x-1/2 translate-z-0'
  )
  prevClass = twMerge(
    common,
    'z-19 -translate-x-3/4 -translate-z-[100px] bg-orange-400'
  )
  nextClass = twMerge(
    common,
    'z-18 -translate-x-1/4 -translate-z-[100px] bg-sky-400'
  )
}


</script>
<!--   on:mouseout={play}-->
<div class="w-full h-[200px] text-center py-3 relative" bind:this={sliderRef} on:mouseover={pause}>
  <div class="relative w-full h-[180px]">
    {#each list as item, index}
    <div class={index == currentIndex ? activeClass : index == prevIndex ? prevClass :  index == nextIndex ? nextClass : ''}>
        编号{index}
    </div>
    {/each}
    <span on:click={prev} class="z-21 absolute top-2/4 text-black left-0">&lt;</span>
    <span on:click={next} class="z-21 absolute top-2/4 text-black right-0">&gt;</span>
  </div>
  <div class="w-full h-5">
    {#each list as item, index}
      <span on:mouseover={() => currentIndex = index} class="inline-block w-5 h-0.5 mx-2 my-1 cursor-pointer bg-netease"></span>
    {/each}
  </div>
</div>
