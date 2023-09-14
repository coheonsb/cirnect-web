<template>
  <div class="spinner">
    <svg viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke="currentColor" stroke-width="4"
              stroke-linecap="square" cx="27" cy="27" r="20" />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes circular {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
}
.spinner {
  display: flex; align-items: center; justify-content:center; flex-grow: 1;
  color:var(--refresh-color,black);
  svg {
    width: 4rem; height: 4rem;
    animation: rotator 1400ms linear infinite;
    circle {
      stroke-dasharray: 80px, 200px; stroke-dashoffset: 0px;
      fill: none;
      animation: circular 1400ms ease-in-out infinite;
    }
  }
}

</style>
