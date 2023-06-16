import React from 'react'
import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
import useGetTable from '@/hooks/useGetTable'
interface DataType{
  key:number,
  name:string,
  imgsrc1:string,
  text:string
}
const data:DataType[]=[]

export default function ResearchManage() {
  const {handleDelete,handleUpload}=UploadHooks("research")
  const {data}=useGetTable('research')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'描述',dataIndex:'text'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc1})=>{
      return(<div><img className='w-72 h-40' src={imgsrc1} alt="" /></div>
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
  return (
    <>
      <Upload 
        uploadData={handleUpload}
        form={columns.slice(0,-1)}
        table={'research'} />
      <Table 
       className='w-[1000px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}
