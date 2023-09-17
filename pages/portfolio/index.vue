<template>
  <div class="portfolio fd-c">
    <div class="menu fd-r ai-c">
      <header class="fd-r">
        <img class="logo" src="/android-chrome-192x192.png" alt="">
      </header>
      <nav class="fd-r ai-c f-1">
        <ul class="fd-r ai-c f-1 jc-sa">
          <li v-for="m of menus" :key="m.text" class="menus">
            <a :href="m.anchor" class="sp14 white-2 fw700" @click="goTo()">{{ m.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="card fd-c">
      <p class="sp14 white-2 wr-bw">{{ textEffect }}</p>
      <header>
        <div id="About" class="anchor" />
        <h2 class="fd-c white-2">About </h2>
      </header>
      <div>
        <img class="profile" src="~assets/images/portfolio/profile.jpg" alt="">
        <p class="sp14 white-2">천슬별</p>
        <p class="sp14 white-2">웹 프론트엔드 개발자</p>
        <p class="sp14 white-2">1995.03.20</p>
        <p class="sp14 white-2">서울</p>

        <p :style="{display:'inline'}" class="sp14 white-2" v-html="meText" />
      </div>

      <header>
        <div id="Skills" class="anchor" />
        <h2 class="fd-c white-2">Skills</h2>
      </header>
      <div class="grid">
        <div v-for="s of skills" :key="s.name" class="item">
          <img :src="s.icon" class="tech-icon" alt="">
          <div class="item-text">
            <h4 class="sp18 white-2">{{ s.name }}</h4>
            <p class="sp14 white-2">{{ s.text }}</p>
          </div>

        </div>
      </div>

      <header>
        <div id="Project" class="anchor" />
        <h2 class="fd-c white-2">Project</h2>
      </header>
      <div class="projects">
        <button v-for="p of projects" :key="p.name" class="project" @click="showPopup(p)">
          <h5 class="sp14 fw700 mb s-10">{{ p.name }}</h5>
          <img v-if="!p.video" :src="p.img" alt="">
          <video v-else class="mt mb s-10" :poster="p.img" autoplay
                 muted
                 loop>
            <source :src="p.video" type="video/mp4">
          </video>
          <p class="sp14">{{ p.text }}</p>
        </button>
      </div>

      <header>
        <div id="Contact" class="anchor" />
        <h2 class="fd-c white-2">Contact</h2>
      </header>
      <div class="contact fd-r">
        <div v-for="c of contact" :key="c.link" class="item mr s-20">
          <a :href="c.link" target="_blank">
            <img :style="{width: '40px'}" :src="c.icon" alt="">
          </a>
        </div>

      </div>

    </div>
  </div>
</template>
<script>

import PortfolioPopup from '~/components/Popups/PortfolioPopup.vue'

import cssIcon from '~/assets/images/portfolio/icons8-css3-100.png'
import flutterIcon from '~/assets/images/portfolio/icons8-flutter-100.png'
import htmlIcon from '~/assets/images/portfolio/icons8-html-100.png'
import jsIcon from '~/assets/images/portfolio/icons8-js-100.png'
import nuxtIcon from '~/assets/images/portfolio/icons8-nuxt-jc-100.png'
import phpIcon from '~/assets/images/portfolio/icons8-php-100.png'
import vueIcon from '~/assets/images/portfolio/icons8-vue-js-100.png'
import tsIcon from '~/assets/images/portfolio/icons8-typescript-100.png'

import img01 from '~/assets/images/portfolio/img-01.png'
import img02 from '~/assets/images/portfolio/img-02.png'
import img03 from '~/assets/images/portfolio/img-03.png'
import img04 from '~/assets/images/portfolio/img-04.png'
import img05 from '~/assets/images/portfolio/img-05.png'
import img06 from '~/assets/images/portfolio/img-06.png'
import img07 from '~/assets/images/portfolio/img-07.png'
import img08 from '~/assets/images/portfolio/img-08.webp'

import githubIcon from '~/assets/images/portfolio/icons8-github.png'
import linkedinIcon from '~/assets/images/portfolio/icons8-linkedin.png'
import emailIcon from '~/assets/images/portfolio/icons8-email.png'

export default {
  name: 'Portfolio',
  inject: ['$alert', '$popup'],
  setup () {
    useHead({
      title: '천슬별 포트폴리오'
    })
  },
  data () {
    return {
      textEffect: '',
      displayText: '이 페이지는 Nuxt3 + Vue3로 만들어졌습니다. Docker와 Reverse Proxy를 사용하여 배포하고 있습니다.',
      textIndex: 0,
      menus: [{
        text: 'About Me',
        anchor: '#About'
      },
      {
        text: 'Skills',
        anchor: '#Skills'
      },
      {
        text: 'Project',
        anchor: '#Project'
      },
      {
        text: 'Contact',
        anchor: '#Contact'
      }],
      meText: `웹 게임 스타트업에서 웹 개발을 시작했습니다.<br>WebGl 관련 프로젝트와 JS 프로젝트를 많이 진행한 경험이 있습니다.<br>NBT에서 네트워크 커머스, 메타버스 프로젝트를 Vue + Nuxt를 사용하여 SSR 기반 웹 서비스를 개발합니다.<br>
      최근 Vue3 + Nuxt3로 마이그레이션 작업에 관심이 많습니다.<br>
      ${''}`,
      skills: [
        {
          name: 'Vue',
          level: 5,
          icon: vueIcon,
          text: '프론트엔드 주력 프레임워크로 사용하고 있습니다.'
        },
        {
          name: 'Nuxt',
          level: 5,
          icon: nuxtIcon,
          text: 'SSR을 목적으로 사용하고 있습니다. 신규 프로젝트는 Nuxt3로 개발중 입니다.'
        },
        {
          name: 'Javascript',
          level: 5,
          icon: jsIcon,
          text: '주요 언어로 사용하고 있습니다.'
        },

        {
          name: 'HTML',
          level: 5,
          icon: htmlIcon,
          text: 'Vue와 함께 사용하고 있습니다.'
        },
        {
          name: 'CSS',
          level: 5,
          icon: cssIcon,
          text: '대부분의 css프레임워크 없이 사용하고 있습니다. scss 비중이 더 높습니다.'
        },

        {
          name: 'Typescript',
          level: 5,
          icon: tsIcon,
          text: '최근 Vue3 + Nuxt3를 사용하며 Typescript로 전환하며 사용하고 있습니다.'
        },
        {
          name: 'Flutter',
          level: 5,
          icon: flutterIcon,
          text: '쇼핑적립 앱을 개발하며 시작하였으며 네티이브 개발 시 사용하고 있습니다.'
        },
        {
          name: 'PHP',
          level: 5,
          icon: phpIcon,
          text: '게임서버 개발 시 사용했었습니다.'
        }

      ],
      projects: [
        {
          name: '개인 홈페이지',
          text: 'Nuxt3 + Vue3로 만든 개인 홈페이지',
          tech: ['Nuxt3', 'Vue3', 'Javascript', 'Typescript', 'SCSS', 'Docker', 'Reverse Proxy', 'Nginx'],
          link: ['https://cirnect.asuscomm.com/portfolio'],
          img: img02,
          period: '2023.09.17 ~',
          description: 'Nuxt3 + Vue3로 만든 개인 홈페이지 입니다. 다양한 기능을 추가해 보는 샌드박스입니다.',
          my: '100%'
        },
        {
          name: '쇼핑적립 파트너센터',
          text: 'Nuxt3 + Vue3로 만든 공급사 파트너센터 페이지',
          tech: ['Nuxt3', 'Vue3', 'Javascript', 'Typescript', 'SCSS', 'Pinia'],
          link: ['https://partner.mysto.re'],
          img: img01,
          video: '/vidio-01.mp4',
          period: '2023.07 ~ 2023.09',
          description: 'Nuxt3 + Vue3로 만든 공급사 파트너센터 페이지, 공급사의 상품을 등록하고 관리하는 페이지입니다.',
          my: '100%'
        },
        {
          name: '메타서울',
          text: 'Nuxt2 + Vue2로 만든 가상 부동산 거래 플랫폼',
          tech: ['Nuxt2', 'Vue2', 'Javascript', 'SCSS', 'Vuex', 'PWA', 'SEO', 'Lighthouse', 'Mapbox', 'Cloud function'],
          link: ['https://metaseoul.kr'],
          img: img04,
          video: '/videos/video-03.mp4',
          period: '2022.04 ~ ',
          description: `Nuxt2 + Vue2로 만든 가상 부동산 거래 플랫폼
          <br> 설계 단계부터 참여했던 프로젝트 입니다.
          <br>프로적션에서 SEO, PWA 적용했었던 첫 프로젝트 입니다.
          <br>Auth, 마이페이지, 결제, 투표, 마커 기반 콘텐츠 등 주여 기능을 개발했습니다.
          `,
          my: '총 2명 70%'
        },

        {
          name: '쇼핑적립 웹',
          text: 'Nuxt2 + Vue2로 만든 네트워크 기반 커머스',
          tech: ['Nuxt2', 'Vue2', 'Javascript', 'SCSS', 'Vuex'],
          link: ['https://shop.mysto.re'],
          img: img07,
          period: '2021.01.11 ~ ',
          description: `Nuxt2 + Vue2로 만든 네트워크 기반 커머스
          <br>NBT에서 입사 후 처음 개발한 프로젝트 입니다.
          직접 접근이 불가한 네트워크 커머스로 네이버페이, 카카오톡, 토스 등 오퍼월 광고 기반 커머스 입니다.
          <br>접속을 위해서는 캐시슬라이드 앱 혹은 캐시피드 앱을 설치해하거나 네이버, 카카오톡, 토스의 혜택 탭에서 쇼핑하기를 클릭해야 합니다.
          `,
          my: '총 2명 50%'
        },

        {
          name: '쇼핑적립 앱',
          text: '플러터로 만든 커머스 앱',
          tech: ['flutter', 'dart', 'firebase'],
          link: ['https://play.google.com/store/apps/details?id=com.nbt.mystore'],
          img: img08,
          period: '2021.07 ~',
          description: `플러터로 만든 커머스 앱 입니다.
          <br>기존 쇼핑적립 웹이 폐쇠적인 커머스였기에 오픈 커머스를 만들기 위해 시작한 프로젝트 입니다.<br>
          플러터로 개발하였으며 기존 웹 기능을 모두 구현하였습니다.
          
          `,
          my: '총 2명 40%'
        },
        {
          name: 'Heroic Tactics',
          text: '처음 설계부터 개발, 배포까지 진행한 게임',
          tech: ['Pixi.JS', 'Javascript', 'Grunt', 'Cordova', 'Android', 'iOS'],
          link: ['https://play.google.com/store/apps/details?id=com.ziplab.heroictactics'],
          img: img06,
          video: '/videos/video-02.mp4',
          period: '2020.01 ~ 2020.08',
          description: `처음 설계부터 개발, 배포까지 진행한 게임
          <br>자사 WebGame 엔진,ㄹ 사용하여 개발한 게임입니다. <br>
          게임 엔진, 게임 클라이언트, 게임 서버, 배포까지 진행했습니다.
          `,
          my: '총 2명 90%'
        },
        {
          name: 'WebGame Js',
          text: 'Pixi.JS를 사용한 웹게임 엔진',
          tech: ['javascript', 'Pixi.JS', 'Grunt', 'webpack'],
          link: ['http://zip-lab.co.kr/'],
          img: img05,
          period: '2019.09 ~ 2020.09',
          description: `Pixi.JS를 사용한 웹게임 엔진 유지보수 및 신규 기능 개발을 했습니다.
          <br>어느정도 기반이 잡힌 프로젝트에 웹뷰에서 네이티브 결제, 푸시가 사용 가능하도록 수정했습니다.`,
          my: '30%'
        },
        {
          name: 'GAMIFY.JS',
          text: 'HTML5 기반 웹 데이터 게임화 라이브러리 (NTIS 정부과제)',
          tech: ['pixi.js', 'javascript', 'webpack', 'grunt', 'matter.js', 'chart.js'],
          link: ['http://gamify.zip-lab.co.kr'],
          img: img03,
          video: '/videos/video-01.mp4',
          period: '2018.06.01 ~ 2019.05.31',
          description: `HTML5 기반의 웹 데이터 게임화 라이브러리 개발에 참여했습니다.
          <br>Pixi.JS, Matter.JS, Chart.JS를 사용하여 개발했습니다.
          <br>
          `,
          my: '80%'
        }
      ],
      contact: [
        { icon: githubIcon, link: 'https://github.com/coheonsb' },
        { icon: linkedinIcon, link: 'https://www.linkedin.com/in/cheonseulbyeol/' },
        { icon: emailIcon, link: 'mailto:coheonsb@gmail.com' }
      ]

    }
  },
  computed: {

  },
  mounted () {
    const nuxtApp = useNuxtApp()
    nuxtApp.$gtag('Portfolio_mounted', {})
    this.typeEffect()
    // this.$alert({
    //   message: 'port',
    //   buttons: ['취소']
    // })
  },
  methods: {
    goTo () {

    },
    typeEffect () {
      const text = this.displayText
      const i = this.textIndex

      const speed = 100
      if (i < text.length) {
        this.textEffect += text.charAt(i)
        this.textIndex++
        setTimeout(this.typeEffect, speed)
      }
    },
    showPopup (p) {
      this.$popup(PortfolioPopup, {
        project: p
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.portfolio{
  background: var(--smoky-black);
  padding: 0 0 80px;
  .menu {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 62px;
    box-shadow: var(--shadow-5);
    background-color: var(--black-2);
    padding: 20px;
    margin: 62 0 20px 0;
    box-shadow: var(--shadow-2);
    .logo {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
    .menus {
      :nth-child(n) {
        // margin: 0 20px;
      }
    }
  }
  .anchor {
    position: absolute;
    bottom: 160px;
  }

  .card {
    position: relative;
    header {
      display: flex;
      position: relative;
      margin-top: 20px;
      margin-bottom: 20px;
      h2 {
        display: flex;
        position: relative;
          &::after{
          height: 5px;
          width: 40px;
          margin-top: 20px;
          background: var(--vegas-gold);
          border-radius: 3px;
          bottom: 0;
          content: "";
        }
      }
    }
    margin: calc(62px + 20px) 20px 0;
    box-shadow: var(--shadow-5);
    background-color: var(--black-2);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media screen and (max-width: 684px) {
        grid-template-columns: repeat(1, 1fr);
      }
      grid-gap: 20px;
      margin-top: 20px;
    }
    .item {
      background: var(--border-gradient-onyx);
      box-shadow: var(--shadow-2);
      padding: 20px;
      border: 0 solid #e5e7eb;
      border-radius: 20px;
      z-index: 1;
      position: relative;

      align-items: flex-start;

      .item-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 20px;
        h4 {
          margin: 0 0 10px 0;
        }
      }

      &:before {
        content: "";
        background: var(--bg-gradient-jet);
        border-radius: inherit;
        inset: 1px;
        position: absolute;
        z-index: -1;
      }
    }
    .tech-icon {
      width: 40px;
      height: 40px;
    }
  }
  .profile {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    // margin-bottom: 20px;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 684px) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-gap: 20px;
    margin-top: 20px;
    button {
      border-width: 0px;
    }
    .project {

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      align-content: center;
      border-radius: 20px;
      background: var(--border-gradient-onyx);
      box-shadow: var(--shadow-2);
      padding: 20px;
      color: var(--white-2);
      &:hover {
        box-shadow: var(--shadow-5);
        color: var(--vegas-gold);
        img {
          transform: scale(1.08);
          transition: all 0.5s ease;
        }
        video {
          transform: scale(1.08);
          transition: all 0.5s ease;
        }
      }
    }
    h5 {
      margin: 0 0 10px 0;
    }
    video{
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      // height: calc(50% - 90px);
      max-height: calc(92vw / 4);
      @media screen and (max-width: 684px) {
        max-height: calc(92vw / 2);
      }
      object-fit: cover;
      overflow: hidden;
      border-radius: 20px;
      pointer-events: none;
    }
    img {
      width: 85%;
      // height: calc(20vw);
      margin-left: auto;
      margin-right: auto;
      max-height: calc(92vw / 4);
      @media screen and (max-width: 684px) {
        max-height: calc(92vw / 2);
      }
      object-fit: cover;
      object-position: top;
      overflow: hidden;
      border-radius: 20px;
    }
  }
}
</style>
