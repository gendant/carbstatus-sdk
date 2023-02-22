<script lang="ts">
    import { onMount } from "svelte";
    import { config } from "./config";
  import Gauge from "./lib/Gauge.svelte";
    import Logo from "./lib/Logo.svelte";
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
   * Boolean that controls whether to display the widget from data-widget attribute in script tag.
   */
  export let hideWidget: boolean = false

  /**
   * Carbstatus data, refreshed periodically
   */
  let data: IIndexData;
  $: index = data?.nvalue;
  $: linkInfo = `${config.carbstatusUrl}/?url=${domain}`
  $: setGlobalCarbstatusData(data)


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

  // make data available externally
  const setGlobalCarbstatusData = (data:IIndexData)=> globalThis.carbstatus = data

  function navigate(){
    window.open(linkInfo, "_blank")
  }
</script>

{#if !hideWidget }
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="c" on:click={navigate}>
    <Logo {index}/>
    <Gauge {index} />
    <MetaInfo/>

</div>

{/if}

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
    padding: 5px;
  }

  @media (prefers-color-scheme: dark) {
    .c{
      background-color: rgb(17, 12, 12);
    }
}

</style>
