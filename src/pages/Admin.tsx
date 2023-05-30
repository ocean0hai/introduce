import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuItem from '@/components/admin/MenuItem'
import Modify from '@/components/admin/Modify'
const menuData=[
  {
    path:'team',
    icon:'' ,
    label:'团队'
  },
  {
    path:'research',
    icon:'' ,
    label:'研究'
  },
  {
    path:'activity',
    icon:'' ,
    label:'活动'
  },
  {
    path:'competition',
    icon:'',
    label:'比赛' 
  },
  {
    path:'honor',
    icon:'',
    label:'荣誉'
  }
]


export default function Admin() {
  return (
    <div className='w-[1400px] mx-auto'> 
      <h1 className=' text-center mt-8'>后台管理</h1>
      <div className='flex'>
        <div className='w-80 bg-gray-100 '>
          {
            menuData.map((item,index)=>{
              return <MenuItem key={index} {...item} />
            })
          }
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
