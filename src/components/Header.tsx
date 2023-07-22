import {Icon} from '@iconify/react'
import { Switch,Space, Select } from 'antd'
import i18n from 'i18next'
import { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
const data=[
  {
    key:'home',
    icon:'ion:home' ,
    label:'主页'
  },
  {
    key:'research',
    icon:'academicons:researcherid' ,
    label:'研究'
  },
  {
    key:'honor',
    icon:'bxs:trophy',
    label:'荣誉'
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
    key:'team',
    icon:'arcticons:team-fight-tactics' ,
    label:'团队'
  },
]

export default function Header() {
  // https://blog.csdn.net/isKelel/article/details/123070685
  // https://blog.csdn.net/weixin_57002812/article/details/127736903
  const location=useLocation()
  const {t}=useTranslation()
  const [lang,setLang]=useState('zh')
 
  function handleChange(value:string){
    setLang(value)
    i18n.changeLanguage(value)
    localStorage.setItem('language',value) 
  }
  useEffect(()=>{
    setLang(localStorage.getItem('language')|| 'zh')
  },[])

  return (
    <div className='h-32 flex justify-between mt-3 '>
      <div className='flex h-full w-60 items-center'>
        <Icon className='h-20 w-20' icon="bxs:low-vision" />
        <h1 className=''>{t('title')}</h1>
      </div>
      <div className='mt-10'>
        <Select
          className='w-20'
          value={lang}
          onChange={handleChange} 
          options={[
            {value:'zh',label:'中文'},
            {value:'en',label:'英文'},
          ]}
        ></Select>     
      </div>
      <div className='w-[900px] flex justify-between'>
        {
          data.map((item)=>{
            return (
              <Link 
                to={item.key} 
                key={item.key} 
                className='flex px-2 my-2 items-center no-underline rounded-2xl hover:bg-gray-100'
                style={{background: location.pathname=== '/index/'+item.key ? 'rgb(226 232 240)':'' }}
              >
                <Icon className='h-full w-10' icon={item.icon}/>
                <span className='text-[25px]'>
                  {t(item.key)}
                </span>
              </Link>
            )})
        } 
      </div>
    </div>
  )
}



