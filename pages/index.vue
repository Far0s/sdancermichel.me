<template>
  <div class="wrapper">
    <conversation></conversation>

    <aside class="casestudies">
      <button class="back">← back</button>
      <casestudyCinemur></casestudyCinemur>
      <casestudyPureemaison></casestudyPureemaison>
      <casestudySynerghetic></casestudySynerghetic>
    </aside>
  </div>
</template>

<script>
import conversation from '~/components/conversation.vue'
import casestudyCinemur from '~/components/casestudyCinemur.vue'
import casestudyPureemaison from '~/components/casestudyPureemaison.vue'
import casestudySynerghetic from '~/components/casestudySynerghetic.vue'

export default {
  components: {
    conversation,
    casestudyCinemur,
    casestudyPureemaison,
    casestudySynerghetic
  }
}
</script>

<style lang="scss">
body {
  background: #ebfaff;;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  transition: .3s ease-out;
  .zoom-overlay {
    background: #FEFEFE;
  }
}

button {
  -webkit-appearance: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
a,
button {
  font-family: 'Merriweather', serif;
  font-size: 18px;
  line-height: 1.75em;
  font-weight: 300;
  color: #60696B;
  margin: 0;
  text-decoration: none;
}

.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  @media screen and (min-width: 540px) {
    padding: 16px 0;
  }
}

strong {
  font-weight: 700;
}

a {
  font-weight: 700;
  color: #6CBDD3;
  position: relative;
  &::after {
    content: '';
    background: #6CBDD3;
    height: 2px;
    width: 0%;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: .15s cubic-bezier(0.22, 0.61, 0.36, 1) .15s;
  }
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    &::after {
      width: 100%;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}

button {
  color: #6CBDD3;
  background: #FEFEFE;
  position: relative;
  padding: 0 10px;
  z-index: 1;
  transition: .15s cubic-bezier(0.22, 0.61, 0.36, 1) .15s;
  &::after {
    content: '';
    background: #6CBDD3;
    height: 100%;
    width: 0%;
    position: absolute;
    left: 0;
    transition: .15s cubic-bezier(0.22, 0.61, 0.36, 1) .15s;
    z-index: -1;
  }
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    color: #FEFEFE;
    &::after {
      width: 100%;
    }
  }
}

.synerghetic {
  background: rgba($color: #490C66, $alpha: .3);
  button {
    color: #490C66;
    &::after {
      background: #490C66;
    }
    &:hover {
      color: #FEFEFE;
    }
  }
  svg {
    margin: 20px auto;
    transform: rotate(-180deg);
    will-change: transform;
    transition: .8s cubic-bezier(.66, -.87, .26, 1.57) .2s;
    &:hover {
      transform: rotate(0deg);
    }
  }
  a {
    color: #490C66;
    &::after {
      background: #490C66;
    }
  }
}

.pureemaison {
  background: rgba($color: #f2c145, $alpha: .5);
  button {
    color: #f2c145;
    &::after {
      background: #f2c145;
    }
    &:hover {
      color: #FEFEFE;
    }
  }
  img.pureemaison_logo {
    display: block;
    max-width: 75px;
    margin: 0 auto 20px;
    transform: rotateX(0);
    will-change: transform;
    transition: 1.2s cubic-bezier(.66, -.87, .26, 1.57) .2s;
    &:hover {
      transform: rotateX(360deg);
    }
  }
  a {
    color: #f2c145;
    &::after {
      background: #f2c145;
    }
  }
}

.cinemur {
  background: rgba($color: #FF5151, $alpha: .5);
  button {
    color: #FF5151;
    &::after {
      background: #FF5151;
    }
    &:hover {
      color: #FEFEFE;
    }
  }
  svg {
    transform: rotateY(-360deg);
    margin: 20px auto;
    will-change: transform;
    transition: 1.2s cubic-bezier(.66, -.87, .26, 1.57) .2s;
    &:hover {
      transform: rotateY(0deg);
    }
  }
  a {
    color: #FF5151;
    &::after {
      background: #FF5151;
    }
  }
}
</style>
