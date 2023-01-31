<script lang="ts">
    import { onMount } from "svelte";
  import Gauge from "./lib/Gauge.svelte";
  import MetaInfo from "./lib/MetaInfo.svelte";
  import {
    getData,
    onInterval,
    panic,
    REFRESH_RATE_MS,
    type IIndexData,
  } from "./utils";

  /**
   * Domain name from data-domain attribute in script tag.
   */
  export let domain: string;

  /**
   * Carbstatus data, refreshed periodically
   */
  let data: IIndexData;
  $: index = data?.nvalue;
  $: time = data?.time;
  $: emission = data?.value

  //initial data fetching
  onMount(async()=>{
    try {
      data = await getData(domain);

    }catch(e){
      panic(e)
    }
  })


  onInterval(async () => {
    try {
      //reset data to "indeterminate" state
      data = undefined
      data = await getData(domain);
    } catch (e) {
      panic(e);
    }
  });
</script>

<div class="c">
  <div class="c1">
    <img alt="carbstatus logo" class="l" src="/src/assets/icon.svg" />
    <Gauge {index} />
  </div>
  <div class="c2">
    <MetaInfo {domain} {emission} {time}  />
  </div>
</div>

<style>
  .c {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .c1 {
    display: flex;
    flex-direction: row;
  }

  .c2{
    margin-top: 2%;
    width: 100%;
  }

  .l {
    margin: 0 auto;
    width: 10em;
  }
</style>
