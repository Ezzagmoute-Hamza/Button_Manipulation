import React from 'react'
import { useSelector } from 'react-redux';
export default function CreatedButtons() {
  const {lastData}=useSelector(state=>state.btnreducer);
  
  return (
    <>
          <div className='mb-3'>
                <div class="card text-center">
                        <div class="card-header text-start">
                        Collection of buttons
                        </div>
                        <div class="card-body text-start">
                            {
                                lastData.map(ele=>{
                                    return(
                                        <button className={ele.color+" "+ele.active+" mx-1 my-1"} disabled={ele.disable}>
                                            <span className='me-2'><i className={ele.icon}></i></span> 
                                                {ele.text}
                                        </button>
                                    );
                                })  
                            }
                        </div>
                        <div class="card-footer text-start">
                        <span>{lastData.length===0?"No found":lastData.length}</span> element(s)
                        </div>
                </div>
              </div>
    </>
  )
}
