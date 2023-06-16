import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
import useGetTable from '@/hooks/useGetTable'
interface DataType{
  key:number,
  name:string,
  time:string,
  imgsrc1:string,
  imgsrc2:string,
  imgsrc3:string,
}
const data:DataType[]=[]

export default function ActivityManage() {
  const {handleDelete,handleUpload}=UploadHooks("activity")
  const {data}=useGetTable('activity')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'时间',dataIndex:'time'},
  {
    title:'图片1',
    dataIndex:'',
    render:({imgsrc1})=>{
      return <div className='flex'> <img className='w-40 h-32' src={imgsrc1} alt="" /> </div>
      }
  },
  {
    title:'图片2',
    dataIndex:'',
    render:({imgsrc2})=>{
      return <div className='flex'> <img className='w-40 h-32' src={imgsrc2} alt="" /> </div>
      }
  },
  {
    title:'图片3',
    dataIndex:'',
    render:({imgsrc3})=>{
      return <div className='flex'> <img className='w-40 h-32' src={imgsrc3} alt="" /> </div>
      }
  },
  {
    title:'操作',
    dataIndex:'',
    render:({key})=><div>
      <Button onClick={()=>handleDelete(key)}>删除</Button>
    </div>
  }
  ]
  return (
    <>
      <Upload 
        form={columns.slice(0,-1)}
        table={'activity'} 
        uploadData={handleUpload}
      />
      <Table 
       className='w-[800px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}
