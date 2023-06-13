import { api } from "@/api/request";
import { useEffect, useState } from "react";


export default (table:string)=> {
  const [data,setData]=useState<Array<any>>([])
  async function getData() {
    const res:any=await api.get("/admin/data",{
      params:{
        table:table
      }
    })
    if (res?.code) {
      setData(res.data) 
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return {
    data
  }
}