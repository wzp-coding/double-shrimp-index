import Vue from 'vue'
import VueRouter from 'vue-router'
// 以下是具体的页面
import industryMarket from '../components/IndustryInformation/industryMarket.vue'
import prawnNews from '../components/IndustryInformation/prawnNews.vue'

import policies from '../components/policies/policies.vue'

import edu from '../components/fishingSkill/edu.vue'
import fishingSkillArticles from '../components/fishingSkill/fishingSkillArticles.vue'
import figureLibrary from '../components/fishingSkill/figureLibrary.vue'
import powerPoint from '../components/fishingSkill/powerPoint.vue'
import intellectualProperty from '../components/fishingSkill/intellectualProperty.vue'

import environmentalMonitoring from '../components/environmentalMonitoring/environmentalMonitoring.vue'

import productTraceability from '../components/productTraceability/productTraceability.vue'

import knowledgeGraph from '../components/knowledgeGraph/knowledgeGraph.vue'

// 专家系统->专家问诊
import expertInterrogation from '../components/expertSystem/expertInterrogation.vue'
// 专家系统->疾病自诊
import autognosis from '../components/expertSystem/autognosis.vue'

import breedingPlan from '../components/intelligentDecision/breedingPlan.vue'
import waterQualityForecastAndWarning from '../components/intelligentDecision/waterQualityForecastAndWarning.vue'
import informationRecommendation from '../components/intelligentDecision/informationRecommendation.vue'
import precisionFeeding from '../components/intelligentDecision/precisionFeeding.vue'

import visualizationPlatform from '../components/visualizationPlatform/visualizationPlatform.vue'

import emall from '../components/emall/emall.vue'
import me from '../components/Me/me.vue'
// 登录页面
import login from '../components/login/login.vue'
import reg from '../components/login/reg.vue'
import forgetPass from '../components/login/forgetPass.vue'
import nav from '../components/login/nav.vue'
import footer from '../components/login/footer.vue'







Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/industryMarket'
  },
  {
    path: '/industryMarket',
    component: industryMarket

  },
  {
    path: '/prawnNews',
    component: prawnNews

  },
  {
    path: '/policies',
    component: policies

  },
  {
    path: '/edu',
    component: edu

  },
  {
    path: '/fishingSkillArticles',
    component: fishingSkillArticles

  },
  {
    path: '/figureLibrary',
    component: figureLibrary

  },
  {
    path: '/powerPoint',
    component: powerPoint

  }
  ,
  {
    path: '/intellectualProperty',
    component: intellectualProperty

  }
  ,
  {
    path: '/environmentalMonitoring',
    component: environmentalMonitoring

  },
  {
    path: '/productTraceability',
    component: productTraceability

  },
  {
    path: '/knowledgeGraph',
    component: knowledgeGraph

  },
  {
    path: '/expertInterrogation',
    component: expertInterrogation
  },
  {
    path: '/autognosis',
    component: autognosis

  },
  {
    path: '/breedingPlan',
    component: breedingPlan

  },
  {
    path: '/waterQualityForecastAndWarning',
    component: waterQualityForecastAndWarning

  },
  {
    path: '/informationRecommendation',
    component: informationRecommendation

  },
  {
    path: '/precisionFeeding',
    component: precisionFeeding

  },
  {
    path: '/visualizationPlatform',
    component: visualizationPlatform

  },
  {
    path: '/emall',
    component: emall

  },
  {
    path: '/me',
    component: me

  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/forgetPass',
    component: forgetPass
  },
  {
    path: '/reg',
    component: reg
  }
  ,
  {
    path: '/nav',
    component: nav

  },
  {
    path: '/footer',
    component: footer

  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫 ,to目标路径，from来源路径，next放行路径
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/login')
  next()
})


export default router
