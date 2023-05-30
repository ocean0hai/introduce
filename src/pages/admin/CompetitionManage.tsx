import React from 'react'
import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
interface DataType{
  key:number,
  name:string,
  imgsrc:string,
  text:string,
  link:string
}
const data:DataType[]=[]
for(let i=0;i<10;i++){
  data.push({
    key:i,
    name:`${i}`,
    imgsrc:'../../../public/123.jpg',
    text:`${i}`,
    link:`${i}`
  })
}

const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'描述',dataIndex:'text'},
  {title:'官网链接',dataIndex:'link'},
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
      <Button  >修改</Button>
      <Button onClick={()=>handleDelete(item)}>删除</Button>
    </div>
  }
]
function handleDelete(item:DataType){
  console.log(item);
   
}


export default function CompetitionManage() {
  return (
    <div>
      <Table 
       className='w-[1000px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </div>
  )
}
