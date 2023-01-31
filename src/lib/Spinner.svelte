<script lang="ts">


</script>

<svg class="spinner" viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>
</svg>

<style>
.spinner {
  animation: rotate 2s linear infinite;
}
  
  .path {
    stroke: rgb(49, 57, 60);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  


@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>