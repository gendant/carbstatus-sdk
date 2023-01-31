<script lang="ts">
    import { config } from "../config";

    export let domain:string
    export let emission: number
    export let time: number
    $: linkInfo = `${config.carbstatusUrl}/?url=${domain}`
    $: formatEmission = Number(emission).toFixed(2)
    $: formatTime = new Date(Math.abs(Date.now() - time*1000)).getMinutes()
</script>

{#if emission }
<div class="tw">
    
    <p class="ex">Carbon emissions: <span class="em">{formatEmission}</span> <span class="un">gCO2/MWh</span></p>
    <p class="ux">Next update in <span class="em">{formatTime}</span><span class="un">min</span></p>

    <div class="mo">
    <a class="l" href={linkInfo} target="_blank" rel="noreferrer noopener"><p class="t">Visit CarbStatus Page</p></a>
    <svg class="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304Z"></path><path d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16Z"></path></svg>
    </div>
</div>
{/if}

<style>

    .l{
        text-decoration: none;
        color: inherit;
    }

    .a{
        min-width: 2em;
        max-width: 2em;
    }
    .mo{
        background-color: #fff;
        border: 1px solid;
        border-radius: 10px;
        width: 30%;
        flex-flow: row;
        display: flex;
        justify-content: space-around;
        

    }

    .tw{
        padding: 0.2em 1em;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }

    .ex{
        text-transform: uppercase;
        font-size: 1.2em;
        padding: 1em;
    }

    .ux{
        text-transform: uppercase;
        font-size: 1.2em;
        padding: 1em;
    }

    .t{
        text-transform: uppercase;
        font-size: 1.2em;
        padding-left: 1em;

    }

    .un{
        text-transform: none;
        font-size: 0.8em;
    }

    .em{
        font-weight: 900;
        font-size: 1.2em;
        font-family: monospace;

        
    }

</style>
