import type { ColumnsType } from 'antd/es/table'
import {Table,Button} from 'antd'
import Upload from '@/components/admin/Upload'

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
    imgsrc:'1../../../public/123.jpg',
    imgsrc2:'2../../../public/123.jpg',
    imgsrc3:'../../../public/123.jpg'
  })
}

const columns:ColumnsType<DataType>=[
  {title:'id',dataIndex:'key'},
  {title:'name',dataIndex:'name'},
  {title:'时间',dataIndex:'time'},
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc})=>{
      return(<div><img className=' w-40 h-24' src={imgsrc} alt='' /></div>
      )}
  },
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc2})=>{
      return(<div><img className='w-40 h-24' src={imgsrc2} alt="" /></div>
      )}
  },
  {
    title:'图片',
    dataIndex:'',
    render:({imgsrc3})=>{
      return(<div><img className='w-40 h-24' src={imgsrc3} alt="" /></div>
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
function handleDelete(item:DataType){
  console.log(item);
}
function handleUpload(form:any){
  console.log(form);
     
}
export default function ActivityManage() {
  return (
    <>
      <Upload 
        form={columns.slice(0,-1)}
        footer={handleUpload}
        table={'research'} />
      <Table 
       className='w-[800px]'
        columns={columns}
        dataSource={data}
      ></Table>
    </>
  )
}
