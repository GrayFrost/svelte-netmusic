<script lang="ts">
  import { fetchVideoTimelineRecommend, fetchPersonalizedMv } from '$api/video';

  const fetchFunc = async () => {
    const res = await fetchPersonalizedMv();
    console.log('zzh res', res);
  }
  fetchFunc();
</script>
<div>视频</div>