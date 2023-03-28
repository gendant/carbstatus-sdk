<script lang="ts">
    import { config } from "../config";


    export let index: number
    export let domainColorRGB: string

    const minValue = 50
    const max = minValue + 100;
    $: value = minValue + index;
    $: fillColor= domainColorRGB ? domainColorRGB : index < 50 ? config.colors[1]: index >=  50 && index < 75 ? config.colors[2]: config.colors[3]

    
</script>

{#if index != undefined}
    <div class="progress-bar" style="--primary-rgb: {fillColor}">
        <div class="progress-text" data-value="{index}">{index}</div>
        <progress class="progress-linear" {value} {max} />
    </div>
{:else}
    <!-- indeterminate -->
    <div class="progress-bar" style="--primary-rgb: {fillColor}">
        <progress class="progress-linear" />
    </div>
{/if}

<style>
    .progress-text {
        position: absolute;
        color: #fff;
        font-size: 40px; /* fallback */
        font-size: clamp(10px, 6vw, 40px);
        font-weight: bolder;
        font-family: monospace !important;

    }

    .progress-bar {
        display: block;
        width: 70%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: left;

    }
    .progress-linear {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        height: 100%;
        color: rgb(var(--primary-rgb, 86,149,251));
        background-color: rgba(var(--primary-rgb, 86,149,251),0.5);
        font-size: 1em;
        width: 100%;
    }

    .progress-linear::-webkit-progress-bar {
        background-color: transparent;
    }

    /* Determinate */
    .progress-linear::-webkit-progress-value {
        background-color: currentColor;
        transition: all 0.2s;
    }

    .progress-linear::-moz-progress-bar {
        background-color: currentColor;
        transition: all 0.2s;
    }

    .progress-linear::-ms-fill {
        border: none;
        background-color: currentColor;
        transition: all 0.2s;
    }

    /* Indeterminate */
    .progress-linear:indeterminate {
        background-size: 200% 100%;
        background-image: linear-gradient(to right,transparent 50%,currentColor 50%,currentColor 60%,transparent 60%,transparent 71.5%,currentColor 71.5%,currentColor 84%,transparent 84%);
        animation: progress-linear 2s infinite linear;
    }

    .progress-linear:indeterminate::-moz-progress-bar {
        background-color: transparent;
    }

    .progress-linear:indeterminate::-ms-fill {
        animation-name: none;
    }

    @keyframes progress-linear {
        0% {
            background-size: 200% 100%;
            background-position: left -31.25% top 0%;
        }
        50% {
            background-size: 800% 100%;
            background-position: left -49% top 0%;
        }
        100% {
            background-size: 400% 100%;
            background-position: left -102% top 0%;
        }
    }



    /* @media screen and (min-width: 822px) {
    .progress-bar span{
      font-size: 4em;

    }
    } */

    @media (prefers-color-scheme: dark) {

        .progress-linear{
        background-color: rgba(var(--primary-rgb, 30, 150, 243),0.5);
        }
}
  
</style>
