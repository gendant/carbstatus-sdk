<script lang="ts">
    export let index: number

    const minValue = 50
    const max = minValue + 100;

    $: value = minValue + index;
</script>

{#if index != undefined}
    <div class="progress-bar">
        <span data-value="{index}" style="width: {index}%;">{index}</span>
        <progress class="progress-linear" {value} {max} />
    </div>
{:else}
    <!-- indeterminate -->
    <div class="progress-bar">
        <progress class="progress-linear" />
    </div>
{/if}

<style>
    .progress-bar span {
        position: absolute;
        display: inline-block;
        color: #fff;
        font-size: 6vw;
        font-weight: bolder;
        top: 0em;
        left: 0em;
        font-family: monospace;

    }

    .progress-bar {
        display: block;
        position: relative;
        width: 70%;
        height: auto;

    }
    .progress-linear {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        height: 100%;
        color: rgb(var(--primary-rgb, 33, 150, 243));
        background-color: rgba(
            var(--primary-rgb, 30, 150, 243),
            0.12
        );
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
        background-image: linear-gradient(
            to right,
            transparent 50%,
            currentColor 50%,
            currentColor 60%,
            transparent 60%,
            transparent 71.5%,
            currentColor 71.5%,
            currentColor 84%,
            transparent 84%
        );
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



    @media screen and (min-width: 822px) {
    .progress-bar span{
      font-size: 4em;

    }
    }
  
</style>
