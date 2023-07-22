import { useTranslation } from 'react-i18next'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'
interface propsType{
  text:string,
  title:string,
  goPage:string
}
export default function Displaylink({text,title,goPage}:propsType) {
  const navigate=useNavigate()
  const {t}=useTranslation()
  return (
    <div className='ml-3'>
      <h1 className='text-[50px] ml-3 mt-6'>{title}</h1> 
      <div className='text-[30px] mx-3'>{text}</div>
      <div className='w-full text-center mt-8'>
        <Button  onClick={()=>navigate(goPage)} >{t('readmore')}</Button> 
      </div>
    </div>
  )
}
