<template>
  <article class="casestudy__item" id="pureemaison">
    <div class="conversation__bubble conversation__bubble--general">
      <img src="/images/pureemaison.png" alt="Purée Maison" class="pureemaison_logo">
      <h2><strong>Purée Maison</strong></h2>
      <p>I worked 3 months at Purée Maison as a web developer intern. I worked on multiple agency projects: e-commerce websites, corporate landing pages and creative experiences. I also took part in the creative process behind a marketing campaign for Mastercard.</p>

      <img src="/images/pm_family.jpg" alt="Purée Maison class of '16" data-action="zoom">
    </div>

    <button>← back</button>
  </article>
</template>

<style lang="scss">
.casestudies {
  position: absolute;
  opacity: 1;
  width: 100vw;
  max-width: 480px;
  min-height: 200px;
  margin: 0 auto;
  padding: 14px;
  box-sizing: border-box;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  transition: .3s ease-out .5s, transform .5s ease-out;
  pointer-events: all;
  >.casestudy__item {
    display: none;
    position: absolute;
    top: 59px;
    margin: 0 0 16px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: .5s ease-out;
    &.is-active {
      display: block;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
    >button {
      margin-bottom: 14px;
      &:last-of-type {
        margin-top: 14px;
      }
    }
  }
}

.conversation:not(.is-reading-casestudy)+.casestudies {
  opacity: 0;
  pointer-events: none;
  >button {
    opacity: 0;
  }
}
</style>
