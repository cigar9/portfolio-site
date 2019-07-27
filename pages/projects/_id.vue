<template>
  <div class="content">
    <h1 class="heading">{{project.name}}</h1>
    <div class="project-summary">
      <p>{{project.description}}</p>
      <ul class="chip-list">
        <li v-for="item in project.keywords" :key="item">{{ item }}</li>
      </ul>
      <p>
        <a :href="project.url" target="_blank">Visit the website</a>
      </p>
    </div>
    <ul>
      <li v-for="(image, index) in project.images" :key="index" class="project-screen">
        <span></span>
        <span></span>
        <span></span>
        <img :src="image" alt />
      </li>
    </ul>
    <p class="back-link">
      <nuxt-link to="/projects">一覧に戻る</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      projects: [
        {
          id: 'city-s',
          name: 'City Communications',
          description:
            '総合エンタテインメント企業の株式会社シティーコミュニケーションズのコーポレートサイトを制作しました。全てのコーディングと、トップページデザインからの下層デザイン起こし、レスポンシブデザインを担当しました。',
          keywords: [
            'HTML/CSS/JSコーディング',
            'デザインアシスタント',
            'レスポンシブデザイン'
          ],
          url: 'https://www.city-s.co.jp/',
          images: [
            '/images/city-01.jpg',
            '/images/city-02.jpg',
            '/images/city-03.jpg',
            '/images/city-04.png'
          ]
        },
        {
          id: 'ruf',
          name: 'RUF',
          description:
            '事業用不動産会社の株式会社RUFのコーポレートサイトを制作しました。全てのコーディングと、トップページデザインからの下層デザイン起こし、レスポンシブデザインを担当しました。',
          keywords: [
            'HTML/CSS/JSコーディング',
            'デザインアシスタント',
            'レスポンシブデザイン'
          ],
          url: 'https://www.ruf.jp/',
          images: [
            '/images/ruf-01.jpg',
            '/images/ruf-02.jpg',
            '/images/ruf-03.jpg',
            '/images/ruf-04.png'
          ]
        },
        {
          id: 'canon',
          name: 'キヤノンビズアテンダ株式会社 BPOサイト',
          description:
            'キヤノンビズアテンダ株式会社のBPOサービスサイトを制作しました。全てのコーディング、及びデザインを担当しました。',
          keywords: ['HTML/CSS/JSコーディング', 'デザイン'],
          url: 'http://www.bpo.canon-ba.co.jp/',
          images: [
            '/images/canon-01.jpg',
            '/images/canon-02.jpg',
            '/images/canon-03.jpg',
            '/images/canon-04.jpg',
            '/images/canon-05.png'
          ]
        }
      ]
    }
  },
  computed: {
    project() {
      return this.projects.find(project => project.id === this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.project-summary {
  > * ~ * {
    margin-top: 15px;
  }
}

.project-screen {
  list-style: none;
  background: #ddd;
  border-radius: 8px;
  padding: 35px 5px 5px;
  margin-top: 10%;
  position: relative;

  &:last-child {
    padding: 0;
    background: transparent;

    span {
      display: none;
    }
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 13px;
    left: 15px;
    background: #e74c3c;

    &:nth-child(2) {
      background: #f39c12;
      left: 32px;
    }

    &:nth-child(3) {
      background: #27ae60;
      left: 49px;
    }
  }
}

.back-link {
  margin-top: 60px;
}
</style>
