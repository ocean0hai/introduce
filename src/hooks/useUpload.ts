import { api } from "@/api/request";
import { message } from "antd";
export function UploadHooks(table:string){

  async function handleDelete(id:number){
    console.log(id);
    
    // const res:any=await api.delete('/admin/delete',{
    //   params:{
    //     table:table,
    //     id:id
    //   }
    // })
    // if (res?.code===200) {
    //   message.success("删除成功！！") 
    // } 
  }
  
  async function handleUpload(form:any){
    console.log(form,table);
    
  //   const res:any=await api.post("/admin/upload",{
  //     table:table,
  //     ...form
  //   })
  //   if(res?.code===200){
  //     message.success("上传成功！！")
  //   }
  } 
  return{
    handleDelete,
    handleUpload
  }
}