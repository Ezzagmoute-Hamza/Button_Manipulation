import React from 'react'
import Manipulate from "./Manipulate";
import ButtonLook from "./ButtonLook";
import CreatedButtons from "./CreatedButtons";
export default function UserInterface() {
  return (
    <div className='container-fluid'>
        <div class="card border border-primary">
            <div class="card-header bg-primary text-light">
              Ex 1 : Button
            </div>
            
            <div class="card-body">
                  <div class="row">
                      <Manipulate/>
                      <ButtonLook/>  
                      <CreatedButtons/>
                </div>
            </div>
        </div>
    </div>
  )
}
