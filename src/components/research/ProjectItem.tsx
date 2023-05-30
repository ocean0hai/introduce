import React from 'react'

export default function ProjectItem() {
  return (
    <div className='mx-4 my-8'>
      <div className=' text-3xl'>
        <h3 className='text-center font-bold'>fsadf</h3>
        <img className='float-left mr-9 mb-3 rounded-2xl w-[400px] h-[300px]' src="../../../public/123.jpg" alt="" />
        This project aims to develop and utilize humanoid robots for analyzing behavior
         principles of children with ASDs and go beyond simple goals of using robots as 
         a neat toy to make kids smile or maybe even engage in joint attention. Our goal 
         is to use the robotic technology as co-robot to interpret behavior, determine if 
         behavior is appropriate, provide feedback on different behavior, provide adaptation 
         on for behavior therapy progress, and reward if behavior is improved towards therapeutic 
         goals. We use Nao and Zeno, two commercially available humanoid robots and develop the 
         necessary features such as facial expressions recognition, speech processing, and multi-modal 
         feedback system for automatic interventions with children with ASDs. Families who would like to 
         participate in this project can find information here.
         For more information on the Nao and Zeno humanoid robots, follow this link.
      </div>
    </div>
  )
}
