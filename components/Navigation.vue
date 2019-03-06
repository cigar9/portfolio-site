<template>
  <div class="menu-wrapper" :class="{ 'is-about' : currentPage === 'about', 'is-projects' : currentPage === 'projects' }">
    <div class="menu-home">
      <nuxt-link to="/" @click.native="changeCurrentPage()">
        <LogoSymbol class="logo-symbol" />
        <LogoType v-if="currentPage === null" class="logo-type" />
      </nuxt-link>
    </div>
    <div class="menu-about menu-item">
      <nuxt-link to="/about" @click.native="changeCurrentPage('about')">
        <p>ABOUT</p>
      </nuxt-link>
    </div>
    <div class="menu-projects menu-item">
      <nuxt-link to="/projects" @click.native="changeCurrentPage('projects')">
        <p>PROJECTS</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import LogoSymbol from '@/components/LogoSymbol'
import LogoType from '@/components/LogoType'

export default {
  components: {
    LogoSymbol,
    LogoType
  },
  computed: {
    ...mapState(['currentPage'])
  },
  watch: {
    // ブラウザバック等で、現在のパスを取得して背景を切り替える
    $route: function() {
      this.detectCurrentPage()
    }
  },
  mounted() {
    // ページ表示時に、現在のパスを取得して背景を切り替える
    this.detectCurrentPage()
  },
  methods: {
    ...mapMutations(['changeCurrentPage']),
    ...mapActions(['detectCurrentPage'])
  }
}
</script>

<style lang="scss" scoped>
.logo-symbol {
  fill: #fff;
  width: 50px;
  height: 50px;
}

.logo-type {
  fill: #fff;
  width: 120px;
  margin-top: 10px;
}

.menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.menu-item {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  transition: all 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
  display: flex;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: inherit;
    filter: grayscale(100%) brightness(65%);
    z-index: -1;
    transition: filter 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
    @media only screen and (max-width: 600px) {
      filter: brightness(65%);
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    border: 1px solid rgba(#fff, 0.2);
    pointer-events: none;
    transition: all 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
    .has-hover & {
      opacity: 0;
      transform: scale(1.05);
    }
  }
  a {
    flex: 1;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: #fff;
    transition: all 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
    @media only screen and (max-width: 600px) {
      color: rgba(#fff, 0.5);
    }
    .has-hover & {
      opacity: 0;
      transform: scale(1.1);
    }
  }
  .has-hover &:hover {
    &::before {
      filter: grayscale(0%);
    }
    &::after {
      opacity: 1;
      transform: scale(1);
    }
    p {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.menu-home {
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 40px);
  right: calc(50% - 40px);
  bottom: calc(50% - 40px);
  left: calc(50% - 40px);
  transition: all 0.7s cubic-bezier(0.7, 0.37, 0.29, 0.99);
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    flex: 1;
  }
}

.menu-about {
  left: 0;
  right: 50%;
  background: url('/images/stage-image.jpg') no-repeat center center / cover;
}

.menu-projects {
  left: 50%;
  right: 0;
  background: url('/images/coding-image.jpg') no-repeat center center / cover;
  @media only screen and (max-width: 600px) {
    left: 0;
    top: 50%;
  }
}

/* Aboutページがアクティブの時 */
.menu-wrapper.is-about {
  @media only screen and (max-width: 600px) {
    position: absolute;
  }
  .menu-home {
    top: 0;
    right: 0;
    bottom: calc(100% - 80px);
    left: calc(100% - 80px);
    background: #fff;
    @media only screen and (max-width: 600px) {
      top: 0;
      right: calc(100% - 80px);
      bottom: calc(100% - 80px);
      left: 0;
    }
    svg {
      fill: #000;
    }
  }
  .menu-about {
    width: 100%;
    pointer-events: none;
    @media only screen and (max-width: 600px) {
      position: fixed;
      width: 100%;
      height: 100%;
      &::before {
        filter: grayscale(100%) brightness(65%);
      }
    }
    * {
      display: none;
    }
  }
  .menu-projects {
    width: 80px;
    height: 80px;
    top: 80px;
    left: calc(100% - 80px);
    right: 0;
    z-index: 2;
    @media only screen and (max-width: 600px) {
      top: 0;
      left: 80px;
    }
  }
  p {
    font-size: 12px;
  }
}

/* Projectsページがアクティブの時 */
.menu-wrapper.is-projects {
  @media only screen and (max-width: 600px) {
    position: absolute;
  }
  .menu-home {
    top: 0;
    right: calc(100% - 80px);
    bottom: calc(100% - 80px);
    left: 0;
    background: #fff;
    svg {
      fill: #000;
    }
  }
  .menu-projects {
    width: 100%;
    pointer-events: none;
    left: 0;
    @media only screen and (max-width: 600px) {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      &::before {
        filter: grayscale(100%) brightness(65%);
      }
    }
    * {
      display: none;
    }
  }
  .menu-about {
    width: 80px;
    height: 80px;
    top: 80px;
    z-index: 2;
    @media only screen and (max-width: 600px) {
      top: 0;
      left: 80px;
    }
  }
  p {
    font-size: 12px;
  }
}
</style>
