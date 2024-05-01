import React from "react";
import {Button} from 'react-bootstrap';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faX } from "@fortawesome/free-solid-svg-icons";


function Anb(){
  function Inside(x){
  const inside=["50gb storage","unlimited public project","Community Access","Unlimited Private Projects","Dedicated Phone Support","free subdomain","Monthly Status Report"]
    
    const InsideOne=inside.map((inside,ind)=>{
         
            if(ind<x){
          return(<li ><p><FontAwesomeIcon icon={faCheck} />{' '}{' '}{' '}{inside}</p></li>)
       }
          else if (ind>=x){

            return(<li><p class="text-muted"><FontAwesomeIcon icon={faX} />{'  '}{inside}</p></li>)

           }
    })
    return InsideOne
  }


return(     

              <div className="container"  >
        <div className="row mt-5">
        <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100" class="c1" >
                   <h5>FREE</h5>
                  <h3 className="card-header">0 $/month</h3>
                  <div className="card-body">
                    <p className="card-text">
                      <li style={{marginBottom:"-9px"}}><FontAwesomeIcon icon={faCheck} />{' '}Single User</li><br/>

                    {Inside(3)}

                    
                    </p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">BUTTON</Button>
                  </div>
              </div>
            </div>
                <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100" class="c1">
                <h5>PLUS</h5>
                  <h3 className="card-header">9$/month</h3>
                  
                  <div className="card-body">
                    <p className="card-text"> 
                    <li style={{marginBottom:"-9px"}}><FontAwesomeIcon icon={faCheck} />{' '}5 Users</li><br/>
                    {Inside(6)}</p>
                  </div>
                  <div className="card-footer">
                  
                    <Button variant="btn btn-primary">BUTTON</Button>
                    
                  </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100" class="c1">
                  <h5>PRO</h5>
                  <h3 className="card-header">49$/month</h3>
                  <div className="card-body">
                    <p className="card-text"> 
                    <li style={{marginBottom:"-9px"}}><FontAwesomeIcon icon={faCheck} />{' '}Unlimited users</li><br/>
                    {Inside(7)}</p>
                  </div>
                  <div className="card-footer">
                    <Button variant="btn btn-primary">BUTTON</Button>
                  </div>
              </div>
            </div>
            
        </div>
        
        
    </div>

                
    )
         
         }
    


export default Anb