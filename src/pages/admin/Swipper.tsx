import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/upload'
interface DataType{
  key:number,
  name:string,
  imgsrc:string
}
const data:DataType[]=[]
for(let i=0;i<10;i++){
  data.push({
    key:i,
    name:`${i}`,
    imgsrc:'../../../public/xiao.jpg'
  })
}

export default function Swipper() {
  const {handleDelete,handleUpload}=UploadHooks('swipper')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'名字',dataIndex:'name'},
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

