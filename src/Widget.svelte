<script lang="ts">
    import { onMount } from "svelte";
    import { config } from "./config";
  import Gauge from "./lib/Gauge.svelte";
  import MetaInfo from "./lib/MetaInfo.svelte";
  import {
    getData,
    onInterval,
    panic,
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
  $: linkInfo = `${config.carbstatusUrl}/?url=${domain}`


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

  function navigate(){
    window.open(linkInfo, "_blank")
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="c" on:click={navigate}>
    <img alt="carbstatus logo" class="l" src="/src/assets/icon.svg" />
    <Gauge {index} />
    <MetaInfo/>

</div>

<style>

  .c {
    cursor: pointer;
    width: 30%;
    height: auto;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    margin-bottom: 20px;
    margin-left: 20px;
    flex-wrap: wrap;
    max-width: 200px;
    z-index: 1;
    background-color: #fff;
    padding: 10px;
    

  }


  


  /* .c2{
    margin-top: 2%;
    width: 100%;
  } */

  .l {
    height: auto;
    width: 30%;
  }


</style>
