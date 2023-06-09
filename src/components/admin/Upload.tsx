import React, {  useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Modal,Form,Input } from 'antd';
import {objType} from '@/type/index.ts'

interface propsType{
  table:string,
  form:Array<any>,
  uploadData:(key:any)=>void,
}
export default function Upload({table,form,uploadData}:propsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [obj,setObj]=useState<objType>({})
   const showModal = () => {
    setIsModalOpen(true);
  };
  function inputObj(key:string,vaule:string){
    obj[key]=vaule
  }

  const handleOk = () => {
    uploadData(obj)
    const obj1={}
    setObj(pre=>obj1)
    setIsModalOpen(pre=>false);
  };

  const handleCancel = () => {
    const obj1={}
    setObj(pre=>obj1)
    setIsModalOpen(pre=>false);
  };
  function uploadInput(file:any){
    if(typeof obj['files'] === 'undefined' ){
      obj['files']=file
    }else if(obj.files.length >0 ){
      obj.files=[...obj.files,file[0]]
    }
  }
  
  return (
    <>
      <Button className='w-32 h-12 text-xl' onClick={showModal}>
        <Icon className='' icon="basil:upload-solid" />
        上传
      </Button>
      <Modal 
        title={table} 
        open={isModalOpen} 
        onOk={handleOk}
        onCancel={handleCancel}
        >
        <Form
        >

          {
            form.map((item,index)=>{
              return ( item.dataIndex!=='' && item.dataIndex !== 'key') ? (
                <Form.Item
                  key={index}
                  label={item.title}
                  name={item.dataIndex}
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input 
                  value={obj[item.dataIndex]}
                  onChange={(e)=>{
                    inputObj(item.dataIndex,(e.target as HTMLInputElement).value) 
                  }}></Input>
                </Form.Item>
              ): item.dataIndex === '' ? (
                <Form.Item label={item.title} key={index} className='flex'>
                  <input 
                  type="file" 
                  onChange={(e)=>{
                    uploadInput((e.target as HTMLInputElement).files)
                  }}/>
                </Form.Item>
              ):''
            })
          }
        </Form>
      </Modal>
    </>
  )
}
