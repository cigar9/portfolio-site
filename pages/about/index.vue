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
          <p v-html=item.event></p>
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
          term: '1987年3月',
          event: '兵庫県尼崎市にて生誕。幼少期は大阪府八尾市で過ごした。'
        },
        {
          term: '1990年～2005年',
          event:
            '兵庫県三田市で過ごす。兄の影響でラグビーを始め、中学生までは地元のスクール、高校はラグビー部に所属した。ポジションはフランカー。<br>PC関係では、ADSLが広がり始めた頃に個人ホームページを作って遊んでいた。ようこそ！あなたは○○人目のお客様です！'
        },
        {
          term: '2005年～2010年',
          event:
            'カリフォルニアに大学留学する。専攻を決められずに海を渡ったが、モノ作り・デザインに興味があり、大工の父親の影響もあってインテリアデザインを専攻した。合間に日本人ラグビーチームに所属したり、バンド活動をしたりしていた。'
        },
        {
          term: '2010年12月',
          event: 'California State University, Northridge 卒業'
        },
        {
          term: '2011年4月～2012年3月',
          event:
            '就活は端的に言えば失敗し、照明器具メーカーにCADオペで応募したが、気づけば営業になっていた。体中に湿疹が出るなどして、肌に合わなくて辞める。'
        },
        {
          term: '2012年4月～2016年3月',
          event:
            '一度はバンドでプロを目指してみようと、インハウスのWeb担当や制作会社でWebデザイナーをする一方、CD制作やライブツアーを精力的にしていた。コンテストとか勝ってサマソニとかも出た。'
        },
        {
          term: '2016年4月～2019年4月',
          event: 'バンドの夢が破れた後、東京のWeb制作会社の正社員になる。'
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
        'React.js',
        'TypeSript',
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
