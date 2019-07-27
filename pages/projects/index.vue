<template>
  <div class="content">
    <h1 class="heading">Projects</h1>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">Client Works</h2>
      <ul class="project-list">
        <li v-for="item in clients" :key="item.name" class="project-screen">
          <nuxt-link :to="{name: 'projects-id', params: {id: item.path}}">
            <img :src="item.image" alt />
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">Private Works</h2>
      <ul class="project-list">
        <li v-for="project in projects" :key="project.name">
          <p class="project-title">{{ project.name }}</p>
          <p>
            <a :href="project.link" target="_blank">{{ project.link }}</a>
          </p>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          name: '株式会社シティーコミュニケーションズ',
          path: 'city-s',
          image: '/images/city-01.jpg'
        },
        {
          name: '株式会社RUF',
          path: 'ruf',
          image: '/images/ruf-01.jpg'
        },
        {
          name: 'キヤノンビズアテンダ株式会社',
          path: 'canon',
          image: '/images/canon-01.jpg'
        }
      ],
      projects: [
        {
          name: 'ポートフォリオサイト',
          github: null,
          link: null,
          description:
            'このサイトです。Nuxtで作成して、Firebaseにてホスティングしています。'
        },
        {
          name: 'Ukotsu-Sakotsu',
          link: 'https://uko-sako.net/',
          description:
            'Nuxt.js と Contentful で作ったブログです。友人と共同で書いていますがかなりの三日坊主。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    display: block;
  }
  > li {
    width: calc(50% - 30px);
    margin-bottom: 1em;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }
  > li ~ li {
    @media only screen and (max-width: 600px) {
      margin-top: 2em;
    }
  }
}

.project-title {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.project-screen {
  img {
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(#000, 0.5);
    transition: all 0.4s cubic-bezier(0.7, 0.37, 0.29, 0.99);
  }

  &:hover {
    img {
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(#000, 0.8);
    }
  }
}
</style>
