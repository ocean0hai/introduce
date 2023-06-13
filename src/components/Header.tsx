import {Icon} from '@iconify/react'
import { Switch,Space, Select } from 'antd'

import { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
const data=[
  {
    key:'home',
    icon:'ion:home' ,
    label:'主页'
  },
  {
    key:'team',
    icon:'arcticons:team-fight-tactics' ,
    label:'团队'
  },
  {
    key:'research',
    icon:'academicons:researcherid' ,
    label:'研究'
  },
  {
    key:'activity',
    icon:'carbon:user-activity' ,
    label:'活动'
  },
  {
    key:'competition',
    icon:'material-symbols:all-match-outline-sharp',
    label:'比赛' 
  },
  {
    key:'honor',
    icon:'bxs:trophy',
    label:'荣誉'
  }
]

export default function Header() {
  const [language,setLanguage]=useState('zh')
  // https://blog.csdn.net/isKelel/article/details/123070685
  // https://blog.csdn.net/weixin_57002812/article/details/127736903
  const location=useLocation()
  function handleChange(value:string){
    console.log(value);
  }
  return (
    <div className='w-[1400px] mx-auto h-20 flex justify-between mt-3 '>
      <div className='flex h-full w-56 '>
        <Icon className='h-full w-16' icon="bxs:low-vision" />
        <h1 className='mt-5'>计算机视觉</h1>
      </div>
      <div>
        <Select
          className='w-20'
          defaultValue="中文"
          onChange={handleChange} 
          options={[
            {value:'zh',label:'中文'},
            {value:'en',label:'英文'},
          ]}
        ></Select>     
      </div>
      <div className='w-[800px] flex justify-between'>
        {
          data.map((item)=>{
            return (
              <Link 
                to={item.key} 
                key={item.key} 
                className='flex px-2 no-underline rounded-2xl hover:bg-gray-100'
                style={{background: location.pathname=== '/index/'+item.key ? 'rgb(226 232 240)':'' }}
              >
                <Icon className='h-full w-10' icon={item.icon}/>
                <span className='mt-6 text-[25px]'>
                  {item.label}
                </span>
              </Link>
            )})
        } 
      </div>
    </div>
  )
}



