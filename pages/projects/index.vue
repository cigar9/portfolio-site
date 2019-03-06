<template>
  <div class="content">
    <h1 class="heading">
      Projects
    </h1>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.name">
        <p class="project-title">
          {{ project.name }}
        </p>
        <p>
          <a :href="project.link" target="_blank">{{ project.link }}</a>
        </p>
        <p>
          {{ project.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'ポートフォリオサイト',
          github: null,
          link: null,
          description:
            'このサイトです。Nuxtで作成して、Firebaseにてホスティングしています。。'
        },
        {
          name: '技術ブログ',
          github: null,
          link: 'https://cigar9.hatenablog.com/',
          description: 'はてなブログで書いています。'
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
</style>
