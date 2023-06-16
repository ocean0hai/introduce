import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
import useGetTable from '@/hooks/useGetTable'
interface DataType{
  key:number,
  name:string,
  imgsrc1:string,
  text:string,
  link:string
}
const data:DataType[]=[]

export default function CompetitionManage() {
  const {handleDelete,handleUpload} =UploadHooks('competition')
  const {data}=useGetTable('competition')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'描述',dataIndex:'text'},
  {title:'官网链接',dataIndex:'link'},
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
    render:(item:number)=><div>
      <Button onClick={()=>handleDelete(item)}>删除</Button>
    </div>
  }
]
  return (

    <>
      <Upload 
        form={columns.slice(0,-1)}
        uploadData={handleUpload}
        table={'competition'} />
      <Table 
       className='w-[1000px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}
