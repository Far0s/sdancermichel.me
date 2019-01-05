<template>
  <article class="casestudy__item" id="cinemur">
    <div class="conversation__bubble conversation__bubble--general">
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="50" viewBox="0 0 29 32" style="display:block;"><path fill="#FF5151" fill-rule="evenodd" d="M7.92 25.98c.06-.02.1-.08.1-.14v-1.39c0-.19.12-.36.3-.42l2.68-.95a.3.3 0 0 1 .41.28v4.35c0 .19-.11.36-.3.42L.85 31.96A.62.62 0 0 1 0 31.4V.6C0 .18.43-.1.84.04l10.28 3.82c.18.07.3.24.3.43v4.35a.3.3 0 0 1-.42.28l-2.67-.95a.45.45 0 0 1-.3-.42V6.1a.15.15 0 0 0-.1-.14L3.6 4.33a.15.15 0 0 0-.2.14v23.06c0 .1.1.18.2.14l4.32-1.69zM28.16.04c.4-.15.84.14.84.56v30.8c0 .42-.43.71-.84.56l-10.28-3.82a.45.45 0 0 1-.3-.43V15.67c0-.1-.1-.17-.2-.14l-2.77 1.03a.31.31 0 0 1-.22 0l-2.78-1.03a.3.3 0 0 1-.2-.28v-2.97a.3.3 0 0 1 .42-.29l2.62.98h.1l6.01-2.24a.3.3 0 0 1 .42.28v14.83c0 .06.04.12.1.14l4.31 1.69c.1.04.22-.03.22-.14V4.47c0-.1-.11-.18-.21-.14L18 7.13a.3.3 0 0 1-.41-.29V4.3c0-.19.11-.36.3-.42L28.15.04z"/></svg>
      <h2><strong>CINÉMUR</strong></h2>
      <p>CINÉMUR is a team passionate designers and engineers with a strong vision of innovation. During my internship I worked on the top movie app for the French market with more than 350k members and 500k downloads (on iOS/Android). <br>
      As an intern, I renovated the user profile, added the new 'collections' feature, and worked daily on the website's codebase.</p>
    </div>

    <div class="conversation__bubble conversation__bubble--general">
      <p>
        <a href="https://cinemur.fr/explorer" target="_blank">Explorer / Collections</a>
        I worked on the new 'Explorer' page, wich presents user-made movies collections, and also special ones made by the CINÉMUR team.
        <img src="/images/cinemur_explorer.png" alt="" data-action="zoom">
      </p>
    </div>

    <div class="conversation__bubble conversation__bubble--general">
      <p>
        <a href="https://cinemur.fr/me" target="_blank">Profile</a>
        I overhauled the profile to integrate the new collections features, and push some user data. The goal was to allow the user to have a clear view about his/her utilisation of the website.
        <img src="/images/cinemur_profile.png" alt="" data-action="zoom">
      </p>
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
