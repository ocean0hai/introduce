import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Modal } from 'antd';
import Form from './Form';
interface propsType{
  table:string,
  form:Array<any>
}
export default function Upload({table,form}:propsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className='w-32 h-12 text-xl' onClick={showModal}>
        <Icon className='' icon="basil:upload-solid" />
        上传
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form 
          table={table}
          form={form}
        />
      </Modal>
    </>
  )
}
