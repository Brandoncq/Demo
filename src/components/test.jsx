import { useState } from 'react'
import React, { useEffect, useRef } from 'react';
import enko from '../imagenes/enko.png'
import mini from '../imagenes/mini.png'
import P_I from'../imagenes/RP/P-I.jpg';
import P_1 from'../imagenes/RP/P-1.jpg';
import P_1_1 from'../imagenes/RP/P-1-1.jpg';
import P_1_2 from'../imagenes/RP/P-1-2.jpg';
import P_2 from'../imagenes/RP/P-2.jpg';
import P_2_1 from'../imagenes/RP/P-2-1.jpg';
import P_2_2 from'../imagenes/RP/P-2-2.jpg';
import P_3 from'../imagenes/RP/P-3.jpg';
import P_3_1 from'../imagenes/RP/P-3-1.jpg';
import P_3_2 from'../imagenes/RP/P-3-2.jpg';
function Portada() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-1 m-0">
          <div className="image-card">
            <div className="row p-0 m-0">
              <div className="col-lg-6 col-12 p-1 m-0">
                <div className="image-card imagen-container">
                  <img src={P_1_2} className="img-fluid imagen"/>
                </div>
              </div >
              <div className="col-lg-6 col-12 p-1 m-0">
                <div className="row p-0 m-0">
                  <div className="col-12 p-0 m-0">
                    <div className="image-card pb-1">
                      <img src={P_1_1} className="img-fluid hidden"/>
                    </div>
                  </div >
                  <div className="col-12 p-0 m-0">
                    <div className="image-card pt-1">
                      <img src={P_1} className="img-fluid hidden"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-5 m-0 hidden">
            <hr style={{ border: '2px solid #000' }}/>
            <p>Izquierda</p>
            <strong>Mancera Ernst & Young/Oficinas Corporativas</strong>
            <p>16000 m<sup>2</sup></p>
            <p>Antara, CDMX, 2006</p>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-1 m-0">
          <div className="image-card">
            <div className="row p-0 m-0">
              <div className="col-lg-6 col-12 p-1 m-0">
                <div className="image-card imagen-container">
                  <img src={P_2_2} className="img-fluid imagen"/>
                </div>
              </div >
              <div className="col-lg-6 col-12 p-1 m-0">
                <div className="row p-0 m-0">
                  <div className="col-12 p-0 m-0">
                    <div className="image-card pb-1">
                      <img src={P_2} className="img-fluid hidden"/>
                    </div>
                  </div >
                  <div className="col-12 p-0 m-0">
                    <div className="image-card pt-1">
                      <img src={P_2_1} className="img-fluid hidden"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="row p-5 m-0">
            <hr style={{ border: '2px solid #000' }}/>
            <div className="col-lg-8 col-6 hidden">
              <p>Derecha</p>
              <p><strong>Tip & Toe/Clinica de Belleza</strong></p>
              <p>100 m<sup>2</sup></p>
              <p>Metec, Mex, 2014</p>
            </div >
            <div className="col-lg-4 col-6 d-flex aling-items-center justify-content-center">
              <img src={mini}  className="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
            </div>
          </div>
            
        </div>
        </div>
        <div className="col-lg-6 col-12 px-0 py-1 m-0">
          <div className="image-card imagen-container" style={{ backgroundColor:"#231f20" }}>
            <div className="row p-3 m-0">
              <div className="col-12 d-flex aling-items-center justify-content-end">
                <img src={enko}  className="img-fluid" style={{ maxWidth: '200px', maxHeight: '200px' }}/>
              </div>
            </div>
            <div className="row px-5 py-2 m-0 hidden">
              <h5 style={{ color: "#aca8a9", textAlign: "center" }}>“BRINDAMOS</h5>
              <h2 style={{ color: "#78797d", textAlign: "center" }}><strong>una correcta planeación</strong></h2>
              <h5 style={{ color: "#aca8a9", textAlign: "center" }}>DE LOS ESPACIOS CON BASE</h5>
              <h2 style={{ color: "#78797d", textAlign: "center" }}><strong>a la creatividad y las</strong></h2>
              <h5 style={{ color: "#aca8a9", textAlign: "right" }}>NECESIDADES DE CADA CLIENTE”</h5>
            </div>
            <div className="row p-3 m-0">
              <div className="col-12 hidden" style={{ textAlign: "right" }}>
                <h6 style={{ color: "white", textAlign: "right" }}>Adolfo Arévalo</h6>
                <p style={{ color: "white", textAlign: "right" }}><em>Arquitecto de Enko Arquitectura</em></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="image-card">
          <div className="image-card">
            <div className="row p-0 m-0">
              <div className="col-lg-6 col-12 px-0 py-1 m-0">
                <div className="image-card imagen-container">
                  <img src={P_3_2} className="img-fluid imagen"/>
                </div>
              </div >
              <div className="col-lg-6 col-12 p-1 m-0">
                <div className="row p-0 m-0">
                  <div className="col-12 p-0 m-0">
                    <div className="image-card pb-1">
                      <img src={P_3_1} className="img-fluid"/>
                    </div>
                  </div >
                  <div className="col-12 p-0 m-0">
                    <div className="image-card pt-1">
                      <img src={P_3} className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        <div className="row p-5 m-0">
        <div className="col-lg-6 col-12 p-0 m-0">

        </div>
        <div className="col-lg-6 col-12 p-0 m-0">
          <div className="row p-0 m-0">
            <hr style={{ border: '2px solid #000' }}/>
            <div className="col-lg-8 col-6 hidden">
              <p>Derecha</p>
              <strong>Grupo Editorial Expansión/Comedor</strong>
              <p>800 m<sup>2</sup></p>
              <p>Constituyentes, CDMX, 2009</p>
            </div >
            <div className="col-lg-4 col-6 d-flex aling-items-center justify-content-center">
              <img src={mini}  className="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
            </div>
          </div>
          
        </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default Portada;

window.addEventListener("click", e=>{
  console.log(e.target)
})