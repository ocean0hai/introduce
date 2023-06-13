import { objArrType } from "@/type"
export function honorts(arr:Array<any>){
  const data:objArrType={}
  arr.map(item=>{
    const str=item.time.slice(0,4)
    if(str in data){
      data[str]=[...data[str],item]
    }else{
      data[str]=[item] 
    }
  })
  return data;
}