import { Image } from 'antd'
interface propsType{
 img:string
}
export default function Preview({img}:propsType) {
  return (
    <Image
    width={'100%'}
    height={'100%'}
    src={"../../../public/activity/"+img+"图片.jpg"}
    preview={{
      src: '../../../public/activity/'+img+'图片.jpg',
    }}
  />
  )
}
