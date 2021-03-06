<template>
  <div class="wrapper" :class="{ 'has-hover' : !isMobile }">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    if (process.browser) {
      const isMobile = new MobileDetect(window.navigator.userAgent).mobile()
      if (isMobile) {
        this.isMobile = true
      }
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
  line-height: 1.75;
  background-color: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
a:visited {
  color: #eb4d4b;
  transition: color 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
  .has-hover &:hover {
    color: orangered;
  }
}

.wrapper {
  width: 100%;
  overflow: hidden;
}

.content {
  color: #fff;
  width: calc(100% - 200px);
  max-width: 800px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  padding: 0 0 80px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 110px;
    padding: 0 30px 60px;
  }
  &__section {
    margin-top: 4rem;
  }
  &__section-heading {
    margin-bottom: 1rem;
  }
}

.heading {
  font-size: 40px;
  letter-spacing: 0.1em;
  margin-bottom: 0.5em;
  word-break: break-all;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
}

.heading-small {
  font-size: 22px;
  letter-spacing: 0.2em;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
}

.text-block {
  > * ~ * {
    margin-top: 1em;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: scale(1.1);
}

.chip-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.chip-list li {
  font-size: 12px;
  background: rgba(#333, 0.8);
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0.5em 1.5em;
  border-radius: 4px;
}
</style>
