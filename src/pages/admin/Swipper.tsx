import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
import useGetTable from '@/hooks/useGetTable'
interface DataType{
  key:number,
  name:string,
  imgsrc1:string
}
const data:DataType[]=[]

export default function Swipper() {
  const {handleDelete,handleUpload}=UploadHooks('swipper')
  const {data }=useGetTable('swipper')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'名字',dataIndex:'name'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc1})=>{
      return(<div><img className='w-56 h-40' src={imgsrc1} alt="" /></div>
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
        table={'swipper'} />
      <Table 
       className='w-[800px]'
        columns={columns}
        dataSource={data}
      ></Table>
      
    </>
  )
}

