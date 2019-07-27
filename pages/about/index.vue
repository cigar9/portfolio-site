<template>
  <div class="content">
    <h1 class="heading">
      About
    </h1>
    <div class="text-block">
      <p>
        大阪や東京でWeb制作をした後、よりフロントエンジニアリングの力を高めたいと考え、現在は事業会社でフロントエンドエンジニアをしています。<br>
        が、必要に応じてデザインやディレクションをすることもあり、自身の職種領域が曖昧になってきている今日このごろです。<br>
        一貫しているのは「物を作るのが好き」「ユーザーが使いやすいもの、使って楽しいものを作りたい」なので、UI/UXデザイン～フロントエンド実装が興味のあるところだと感じています。
      </p>
      <p>
        サイト名の由来は「しがない」から来ています。<br>
        しがない人間なんだから、サボらず頑張れよという自戒です。<br>
        当て字で「Cigar」にしましたがタバコは吸いません。
      </p>
    </div>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">
        略歴
      </h2>
      <ol class="career-list">
        <li v-for="item in biography" :key="item.term">
          <span>{{ item.term }}</span>
          {{ item.event }}
        </li>
      </ol>
    </section>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">
        実務経験
      </h2>
      <ul class="chip-list">
        <li v-for="item in experiences" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">
        個人的興味
      </h2>
      <ul class="chip-list">
        <li v-for="item in personalInterests" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">
        お布施中
      </h2>
      <ul class="chip-list">
        <li v-for="item in tools" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
    <section class="content__section">
      <h2 class="heading-small content__section-heading">
        趣味
      </h2>
      <ul class="chip-list">
        <li v-for="item in hobbies" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      biography: [
        {
          term: '2010年12月',
          event: 'California State University, Northridge 卒業'
        },
        {
          term: '2011年4月～2012年3月',
          event: '照明器具メーカーで営業。肌に合わなくて辞める。'
        },
        {
          term: '2012年4月～2016年3月',
          event:
            'バンドでプロを目指しながらインハウスのWeb担当や制作会社でWebデザイナーをする。コンテストとか勝ってサマソニとか出た。'
        },
        {
          term: '2016年4月～2019年4月',
          event: '夢破れた後、東京のWeb制作会社の正社員になる。'
        },
        {
          term: '2019年5月～現在',
          event: '自社サービスの開発に携わりたく、事業会社に転職して奮闘中。'
        }
      ],
      experiences: [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'Vue.js',
        'Pug',
        'ejs',
        'Sass',
        'Webpack',
        'Docker（開発環境）',
        'Git',
        'Gulp',
        'FLOCSS',
        'Sketch',
        'InVision',
        'Photoshop',
        'Illustrator',
        'Adobe XD',
        'Figma'
      ],
      personalInterests: [
        'React.js',
        'Redux',
        'Vue.js',
        'TypeScript',
        'AWS',
        'Firebase'
      ],
      tools: ['PhpStorm', 'esa.io'],
      hobbies: ['DTM', 'キャンプ', 'ゲーム（主にPC）']
    }
  }
}
</script>

<style lang="scss" scoped>
.career-list {
  list-style: none;
  > li {
    display: flex;
    align-items: baseline;
    @media only screen and (max-width: 600px) {
      display: block;
    }
    span {
      flex: none;
      width: 12em;
      @media only screen and (max-width: 600px) {
        font-weight: bold;
        display: block;
      }
    }
  }
  > li ~ li {
    margin-top: 1em;
  }
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
