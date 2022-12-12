import React from 'react'
import { useSelector} from 'react-redux';
export default function ButtonLook() {
  const {buttonTextContent,bgColor,Icon,toDisable,toActive}=useSelector(state=>state.btnreducer);
  return (
    <>
        <div class="col-12">
                        <div class="input-group mb-3 border p-3">
                          <span class="h3 fw-5 me-2">Indicator button: </span>
                           <button className={bgColor+" "+toActive} disabled={toDisable}>
                           <span className='me-2'><i className={Icon}></i></span> 
                            {buttonTextContent}
                           </button>
                       </div>
        </div>
    </>
  )
}
