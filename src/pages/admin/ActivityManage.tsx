import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Modify from '@/components/admin/Modify'

interface DataType{
  key:number,
  name:string,
  time:string,
  imgsrc:string,
  imgsrc2:string,
  imgsrc3:string,
}
const data:DataType[]=[]
for(let i=0;i<10;i++){
  data.push({
    key:i,
    name:`${i}`,
    time:`${i}`,
    imgsrc:'../../../public/123.jpg',
    imgsrc2:'../../../public/123.jpg',
    imgsrc3:'../../../public/123.jpg'
  })
}

const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'描述',dataIndex:'text'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc})=>{
      return(<div><img className='w-72 h-40' src={imgsrc} alt="" /></div>
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
function handleDelete(item:DataType){
  console.log(item);
   
}

export default function ActivityManage() {
  return (
    <div>
      <Table 
       className='w-[800px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </div>
  )
}
