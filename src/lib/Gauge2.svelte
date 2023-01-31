<script lang="ts">
    import Spinner from "./Spinner.svelte";



export let index:number

const s1Color ="#b43016"
const s2Color = "#16b43b"
const s3Color = "#2816b4"
const minX = 15
const textMinX = 3

$: color = index < 50 ? s1Color : index >= 50 && index < 75 ? s2Color : s3Color
$: l2x = index < 30 ? `${minX + index}%` : `${index}%`
$: tx = `${textMinX}%`

</script>


{#if index}
<svg class="m">
    <rect class="l1" x="0" y="0" width="100%" height="100%" fill={color}/>
    <rect class="l2" x={l2x} y="0" width="100%" height="100%" />
    <text class="t" x={tx} y="75%" font-size="100" font-family="Arial">
        <tspan>{index}</tspan>
    </text>

</svg>
{:else}
<svg class="m">
    <rect class="l2" x={0} y="0" width="100%" height="100%" />
    <Spinner></Spinner>

</svg>

{/if}




<style>
    .m{
        width: 80%;
        border: 1px solid #cba;
        border-radius: 10px;
    }
    .l2{
        fill: #e4ecee
    }

    .t{
        fill: white;
        font-weight: 600;
    }




</style>