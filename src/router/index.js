import Vue from 'vue'
import VueRouter from 'vue-router'
// 以下是具体的页面
import industryMarket from '../components/IndustryInformation/industryMarket.vue'
import prawnNews from '../components/IndustryInformation/prawnNews.vue'
import instructdetail from '../components/IndustryInformation/instructdetail.vue'
import instructpagedetail from '../components/IndustryInformation/instructpagedetail.vue'
import industryothermore from '../components/IndustryInformation/industryothermore.vue'

import policies from '../components/policies/policies.vue'
// 政策法规详情页
import policiesListArticle from '../components/policies/policiesListArticle.vue'
// 政策法规专家查看更多列表页
import policiesExpertMoreArticle from '../components/policies/policiesExpertMoreArticle.vue'
// 政策法规媒体查看更多列表页
import policiesMediaMoreArticle from '../components/policies/policiesMediaMoreArticle.vue'

import edu from '../components/fishingSkill/edu.vue'
import fishingSkillArticles from '../components/fishingSkill/fishingSkillArticles.vue'
import fishingSkillArticlesDetail from '../components/fishingSkill/fishingSkillArticlesDetail.vue'
import powerPoint from '../components/fishingSkill/powerPoint.vue'
import intellectualProperty from '../components/fishingSkill/intellectualProperty.vue'
import videoPlay from '../components/fishingSkill/videoPlay.vue'
import intellectualPropertyArticle from '../components/fishingSkill/intellectualPropertyArticle.vue'

import environmentalMonitoring from '../components/environmentalMonitoring/environmentalMonitoring.vue'

import productTraceability from '../components/productTraceability/productTraceability.vue'
// 溯源详情页
import traceabilityDetails from '../components/productTraceability/traceabilityDetails.vue'

import knowledgeGraph from '../components/knowledgeGraph/knowledgeGraph.vue'

// 专家系统->专家问诊
import expertInterrogation from '../components/expertSystem/expertInterrogation.vue'
// 跳转子页面，问答详情，专家列表，帖子列表
import questionDetail from '../components/expertSystem/questionDetail.vue'
import expertList from '../components/expertSystem/expertList.vue'
import replyList from '../components/expertSystem/replyList.vue'
import articleList from '../components/expertSystem/articleList.vue'
// 专家系统->疾病自诊
import autognosis from '../components/expertSystem/autognosis.vue'
import expertSystemManage from '../components/expertSystem/expertSystemManage.vue'
import diseaseDateil from '../components/expertSystem/diseaseDateil.vue'
import expertOne from '../components/expertSystem/expertManage/expertOne.vue'
import expertAnswer from '../components/expertSystem/expertManage/expertAnswer.vue'
import articleManage from '../components/expertSystem/expertManage/articleManage.vue'


import breedingPlan from '../components/intelligentDecision/breedingPlan.vue'
import waterQualityForecastAndWarning from '../components/intelligentDecision/waterQualityForecastAndWarning.vue'
import informationRecommendation from '../components/intelligentDecision/informationRecommendation.vue'
import precisionFeeding from '../components/intelligentDecision/precisionFeeding.vue'

import visualizationPlatform from '../components/visualizationPlatform/visualizationPlatform.vue'

// 店铺详情
import emall from '../components/emall/emall.vue'
import emallDetail from '../components/emall/emallDetail.vue'
import emallSearch from '../components/emall/emallSearch.vue'
import shopDetail from '../components/emall/shopDetail.vue'
import shopMangerDetail from '../components/emall/shopMangerDetail.vue'
import orderManage from '../components/emall/shopComponents/orderManage.vue'
import advertising from '../components/emall/shopComponents/advertising.vue'
import infoManger from '../components/emall/shopComponents/infoManger.vue'
import goodsManage from '../components/emall/shopComponents/goodsManage.vue'
import shopInfoManage from '../components/emall/shopComponents/shopInfoManage.vue'

// 个人中心
import me from '../components/Me/me.vue'
// 个人中心---首页
import meHomePage from '../components/Me/components/meHomePage.vue'
// 个人中心---收藏夹
import favorite from '../components/Me/components/favorite.vue'
// 个人中心---收货地址管理
import addressMan from '../components/Me/components/addressMan.vue'
// 个人中心---修改密码
import changePassword from '../components/Me/components/changePassword.vue'
import shopManage from '../components/Me/components/shopManage.vue'
import expertPage from '../components/Me/components/expertPage.vue'
import message from '../components/Me/components/message.vue'

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
    redirect: '/industryMarket',
    children: [
      {
        path: '/',
        redirect: '/instructdetail'
      }
    ]
  },
  {
    path: '/instructdetail',
    component: instructdetail
  },
  {
    path: '/industryMarket',
    component: industryMarket

  },
  {
    path: '/instructpagedetail',
    component: instructpagedetail
  },
  {
    path: '/prawnNews',
    component: prawnNews,
  },

  {
    path: '/shopDetail',
    component: shopDetail
  },
  {
    path: '/shopMangerDetail',
    component: shopMangerDetail,
    children: [
      {
        path: '/',
        redirect: '/infoManger'
      },
      {
        path: '/advertising',
        component: advertising
      },
      {
        path: '/orderManage',
        component: orderManage
      },
      {
        path: '/infoManger',
        component: infoManger
      },
      {
        path: '/goodsManage',
        component: goodsManage
      },
      {
        path: '/shopInfoManage',
        component: shopInfoManage
      }
    ]
  },
  {
    path: '/policies',
    component: policies

  },

  // 知识产权详情页
  {
    path: '/intellectualPropertyArticle',
    component: intellectualPropertyArticle

  },
  // 政策法规详情页
  {
    path: '/policiesListArticle',
    component: policiesListArticle
  },
  // 政策法规专家查看更多列表页
  {
    path: '/policiesExpertMoreArticle',
    component: policiesExpertMoreArticle
  },
  // 政策法规媒体查看更多列表页
  {
    path: '/policiesMediaMoreArticle',
    component: policiesMediaMoreArticle
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
    path: '/fishingSkillArticlesDetail',
    component: fishingSkillArticlesDetail,
    name: "fishingSkillArticlesDetail"

  },
  {
    path: '/videoPlay',
    component: videoPlay,
    name: 'videoPlay'
  },
  {
    path: '/intellectualPropertyArticle',
    component: intellectualPropertyArticle

  },
  {
    path: '/powerPoint',
    component: powerPoint

  },
  {
    path: '/intellectualProperty',
    component: intellectualProperty

  },
  {
    path: '/environmentalMonitoring',
    component: environmentalMonitoring

  },
  {
    path: '/productTraceability',
    component: productTraceability

  },
  {
    // 溯源详情页
    path: '/traceabilityDetails',
    component: traceabilityDetails

  },
  {
    path: '/knowledgeGraph',
    component: knowledgeGraph

  },
  {
    // 专家问诊
    path: '/expertInterrogation',
    component: expertInterrogation,
    name: 'wzp_expertInterrogation'
  },
  {
    // 问答详情
    path: '/expertInterrogation/questionDetail/:id',
    component: questionDetail,
    name: 'wzp_questionDetail'
  },
  {
    // 专家列表
    path: '/expertInterrogation/expertList',
    component: expertList,
    name: 'wzp_expertList'
  },
  {
    // 问答列表
    path: '/expertInterrogation/replyList',
    component: replyList,
    name: 'wzp_replyList'
  },
  {
    // 文章列表
    path: '/expertInterrogation/articleList',
    component: articleList,
    name: 'wzp_articleList'
  },
  {
    // 疾病自诊
    path: '/autognosis',
    component: autognosis

  },
  {
    path: '/expertSystemManage',
    component: expertSystemManage,
    children: [  // 个人中心首页
      {
        path: '/',
        redirect: '/expertOne'
      },
      {
        path: '/expertOne',
        component: expertOne
      },
      // 个人中心收藏夹
      {
        path: '/expertAnswer',
        component: expertAnswer
      },
      // 个人中心收货地址管理
      {
        path: '/articleManage',
        component: articleManage
      }
    ]

  },
  {
    // 疾病详情
    path: '/autognosis/diseaseDateil',
    component: diseaseDateil

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
    path: '/emallDetail',
    component: emallDetail,
    name: 'emallDetail'
  },
  {
    path: '/emallSearch',
    component: emallSearch,
    name: 'emallSearch'
  },
  {
    path: '/me',
    component: me,
    children: [
      // 个人中心首页
      {
        path: '/',
        redirect: '/message'
      },
      {
        path: '/meHomePage',
        component: meHomePage
      },
      {
        path: '/message',
        component: message
      },
      // 个人中心收藏夹
      {
        path: '/favorite',
        component: favorite
      },
      // 个人中心收货地址管理
      {
        path: '/addressMan',
        component: addressMan
      },
      // 个人中心修改密码
      {
        path: '/changePassword',
        component: changePassword
      },
      // 个人中心修改密码
      {
        path: '/shopManage',
        component: shopManage
      },
      // 个人中心修改密码
      {
        path: '/expertPage',
        component: expertPage
      }
    ]

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