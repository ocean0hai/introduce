import { api } from "@/api/request";
import { message } from "antd";
export function UploadHooks(table:string){

  async function handleDelete(id:number){
    const res:any=await api.delete('/delete/table',{
      params:{
        table:table,
        id:id
      }
    })
    if (res?.code===200) {
      message.success("删除成功！！") 
    } 
  }
  
  async function handleUpload(form:any){
    const res:any=await api.post("upload",{
      table:table,
      ...form
    })
    if(res?.code===200){
      message.success("上传成功！！")
    }
  } 
  return{
    handleDelete,
    handleUpload
  }
}