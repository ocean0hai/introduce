import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'
import { UploadHooks } from '@/hooks/useUpload'
interface DataType{
  key:number,
  name:string,
  time:string,
  imgsrc:string,
  imgsrc2:string,
  imgsrc3:string,
}
const data:DataType[]=[]
for(let i=0;i<10;i++){
  data.push({
    key:i,
    name:`${i}`,
    time:`${i}`,
    imgsrc:'../../../public/123.jpg',
    imgsrc2:'../../../public/123.jpg',
    imgsrc3:'../../../public/123.jpg',
  })
}

export default function ActivityManage() {
  const {handleDelete,handleUpload}=UploadHooks("activity")
  const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'时间',dataIndex:'time'},
  {
    title:'img1',
    dataIndex:'',
    render:({imgsrc})=>{
      return <div className='flex'> <img className='w-40 h-32' src={imgsrc} alt="" /> </div>
      }
  },
  {
    title:'img2',
    dataIndex:'',
    render:({imgsrc})=>{
      return <div className='flex'> <img className='w-40 h-32' src={imgsrc} alt="" /> </div>
      }
  },
  {
    title:'img3',
    dataIndex:'',
    render:({imgsrc})=>{
      return <div className='flex'> <img className='w-40 h-32' src={imgsrc} alt="" /> </div>
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
