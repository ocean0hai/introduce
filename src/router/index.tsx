import {Navigate} from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import Activity from '@/pages/Activity'
import Competition from '@/pages/Competition'
import Join from '@/pages/Join'
import Research from '@/pages/Research'
import Team from '@/pages/Team'
import Honor from '@/pages/Honor'
import Admin from '@/pages/Admin'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import TeamManage from '@/pages/admin/TeamManage'
import ResearchManage from '@/pages/admin/ResearchManage'
import ActivityManage from '@/pages/admin/ActivityManage'
import CompetitionManage from '@/pages/admin/CompetitionManage'
import HonorManage from '@/pages/admin/HonorManage'

const routes=[
  {
    path:'/index',
    element:<Index />,
    children:[
    {
      path:'home',
      element:<Home />,
    },
    {
      path:'activity',
      element:<Activity />
    },
    {
      path:'competition',
      element:<Competition />
    },
    {
      path:'join',
      element:<Join />
    },
    {
      path:'research',
      element:<Research />
    },
    {
      path:'team',
      element:<Team />
    },
    {
      path:'honor',
      element:<Honor />
    }
  ]},
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/admin',
    element:<Admin />,
    children:[
      {
        path:'',
        element:<Navigate to='/login' />
      },
      {
        path:'teammanage',
        element:<TeamManage />
      },
      {
        path:'researchmanage',
        element:<ResearchManage />
      },
      {
        path:'activitymanage',
        element:<ActivityManage />
      },
      {
        path:'competitionmanage',
        element:<CompetitionManage />
      },
      {
        path:'honormanage',
        element:<HonorManage />
      }
    ]

  },
  {
    path:'/',
    element:<Navigate to='/index/home' />
  }
]

export default routes