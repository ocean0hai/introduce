import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
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

export default function CompetitionManage() {
  const {handleDelete,handleUpload} =UploadHooks('competition')
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'描述',dataIndex:'text'},
  {title:'官网链接',dataIndex:'link'},
  {
    title:'img1',
    dataIndex:'',
    render:({imgsrc})=>{
      return(<div><img className='w-72 h-40' src={imgsrc} alt="" /></div>
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
