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
}
const data:DataType[]=[]

export default function HonorManage() {
  const {handleDelete,handleUpload}=UploadHooks("honor")
  const {data}=useGetTable('honor')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'比赛名',dataIndex:'name'},
  {title:'时间',dataIndex:'time'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc1})=>{
      return(
        <div className='flex'>
          <img className='w-48 h-32 rounded-lg mx-2' src={imgsrc1} alt="" />
        </div>
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
        form={columns.slice(0,-1)}
        uploadData={handleUpload}
        table={'honor'} />
      <Table 
       className='w-[1100px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}

