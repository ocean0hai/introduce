import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
interface DataType{
  key:number,
  name:string,
  identity:string
  imgsrc:string
}
const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'名字',dataIndex:'name'},
  {title:'身份',dataIndex:'identity'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc})=>{
      return(<div><img src={imgsrc} alt="" /></div>
      )}
  },
  {
    title:'操作',
    dataIndex:'',
    render:(item)=><div>
      <Button onClick={()=>handleDelete(item)}>删除</Button>
    </div>
  }
]
async function handleDelete(item:DataType) {
  const {key}=item
   console.log(key);
   
}
const data:DataType[]=[]
for(let i=0;i<10;i++){
  data.push({
    key:i,
    name:`${i}`,
    identity:`${i}`,
    imgsrc:'../../../public/xiao.jpg'
  })
}
export default function TeamManage() {
  return (
    <>
      <Upload 
        form={columns.slice(0,-1)}
        table={'research'} />
      <Table 
       className='w-[800px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}
