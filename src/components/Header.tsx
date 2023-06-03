import {Icon} from '@iconify/react'
import { Switch,Space } from 'antd'

import { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
const data=[
  {
    key:'home',
    icon:'' ,
    label:'主页'
  },
  {
    key:'team',
    icon:'' ,
    label:'团队'
  },
  {
    key:'research',
    icon:'' ,
    label:'研究'
  },
  {
    key:'activity',
    icon:'' ,
    label:'活动'
  },
  {
    key:'competition',
    icon:'',
    label:'比赛' 
  },
  {
    key:'honor',
    icon:'',
    label:'荣誉'
  },
  {
    key:'join',
    icon:'' ,
    label:'加入我们'
  }
]

export default function Header() {
  const [language,setLanguage]=useState('zh')
  // https://blog.csdn.net/isKelel/article/details/123070685
  // https://blog.csdn.net/weixin_57002812/article/details/127736903
  const location=useLocation()
  function changeLangauge(value:boolean){
    setLanguage(value ? 'en':'zh' )
  }
  function CheckOut(){
  return (
    <div className='text-3xl'>
     ZH
    </div>
    )
  }
  function ChechClose(){
    return (
      <div className='text-3xl'>
        EN
      </div>
    )
  }

  return (
    <div className='w-[1400px] mx-auto h-20 flex justify-between mt-3 '>
      <div className='flex h-full w-56 '>
        <Icon className='h-full w-16' icon="ic:baseline-error-outline" />
        <h1 className='mt-5'>huoo</h1>
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
                <Icon className='h-full w-10' icon="ic:baseline-error-outline"/>
                <span className='mt-6 text-[25px]'>
                  {item.label}
                </span>
              </Link>
            )})
        } 
      </div>
      <div>
        <Space direction="vertical">
          <Switch 
           className='w-20 h-10 '
           checkedChildren={<CheckOut /> }
           unCheckedChildren={<ChechClose />}
           defaultChecked />
        </Space>
      </div>
    </div>
  )
}



