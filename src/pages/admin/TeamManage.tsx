import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
import useGetTable from '@/hooks/useGetTable'
interface DataType{
  key:number,
  name:string,
  identity:string
  imgsrc1:string
}
const data:DataType[]=[]

export default function TeamManage() {

  const {handleDelete,handleUpload}=UploadHooks('team')
  const {data}=useGetTable('team')
  
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'名字',dataIndex:'name'},
  {title:'身份',dataIndex:'identity'},
  {
    title:'照片',
    dataIndex:'',
    render:({imgsrc1})=>{
      return(<div><img src={imgsrc1} alt="" /></div>
      )}
  },
  {
    title:'操作',
    dataIndex:'',
    render:(item)=><div>
      <Button onClick={()=>handleDelete(item)}>删除</Button>
    </div>
  }]
  return (
    <>
      <Upload 
        form={columns.slice(0,-1)}
        uploadData={handleUpload}
        table={'team'} />
      <Table 
       className='w-[800px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}
