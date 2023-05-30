import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'

interface DataType{
  key:number,
  name:string,
  time:string,
  imgsrc:string,
}
const data:DataType[]=[]
for(let i=0;i<10;i++){
  data.push({
    key:i,
    name:`${i}`,
    time:`${i}`,
    imgsrc:'../../../public/123.jpg',
  })
}

const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'比赛名',dataIndex:'name'},
  {title:'时间',dataIndex:'time'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc})=>{
      return(
        <div className='flex'>
          <img className='w-48 h-32 rounded-lg mx-2' src={imgsrc} alt="" />
        </div>
      )}
  },
  {
    title:'操作',
    dataIndex:'',
    render:(item)=><div>
      <Button  >修改</Button>
      <Button onClick={()=>handleDelete(item)}>删除</Button>
    </div>
  }
]
function handleDelete(item:DataType){
  console.log(item);
   
}


export default function HonorManage() {
  return (
    <div>
      <Table 
       className='w-[1100px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </div>
  )
}

