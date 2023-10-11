import { useState } from 'react'
import React, { useEffect } from 'react';
import enko from '../imagenes/enko.png'
import mini from '../imagenes/mini.png'
import experiencia from '../imagenes/experiencia.jpg'
import P_I from'../imagenes/RP/P-I.jpg';
import I_3 from'../imagenes/RI/I-3.jpg';
import F_2 from'../imagenes/RF/F-2.jpg';
import F_4 from'../imagenes/RF/F-4.jpg';
function Inicio() {
    const [elementosVisibles, setElementosVisibles] = useState([]);
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !elementosVisibles.includes(entry.target)) {
            entry.target.classList.add('show');
            setElementosVisibles([...elementosVisibles, entry.target]);
          }
        });
      });
  
      var elementosOcultos = document.querySelectorAll('.hidden');
      elementosOcultos.forEach((el) => observer.observe(el));
  
      return () => {
        observer.disconnect();
      };
    }, [elementosVisibles]);
    return (
      <div>
        <div className="row m-0">
          <div className="col-lg-5 col-12 p-0 m-0 position-portada">
            <img
              src={I_3}
              className="img-fluid img-portada"
              alt="Imagen Incrustada"
            />
            
          </div>
          <div className="position-logo"> 
            <div className="col-12 p-5 m-0 ">
              <div className="col-12 p-5 m-0 d-flex aling-items-center justify-content-end">
                <div className="col-12 p-5 m-0 d-flex aling-items-center justify-content-end">
                  <img src={mini}  className="img-fluid img-logo" style={{ minWidth: '100px', minHeight: '100px' }}/>
                </div>
              </div>
            </div>
          </div>
        </div>       
        <br></br>
        <div className="row m-0">
          <div className="col-lg-5 col-12 p-0 m-0">
            <div className="image-card">
              <img src={F_4} className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-7 col-12 p-3 m-0">
            <div className="row p-0 m-0">
              <div className="row px-5 py-0 m-0 hidden">
                <div className="row px-5 m-0">
                <h1 style={{ color: "#a52638" , textAlign: "left"}} className="Ajustar p-0">ENKO</h1>
                <h1 style={{ color: "#656d5f" , textAlign: "center"}} className="p-0"><strong>arquitectura</strong></h1>
              </div>
              </div>
              <div className="row p-5 m-0" style={{ color: "#656d5f" ,textAlign: 'justify' }}>
                <div className="col-lg-4 col-12 m-0">
                </div>
                <div className="col-lg-8 col-12 m-0 hidden">
                  <p>Trabajamos en equipo con nuestros clientes
                  para lograr una solución única donde las
                  personas puedan realizas sus actividades 
                  de la mejor manera posible.</p>
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="col-lg-4 col-12 m-0">
                  <h1 style={{ color: "#656d5f" , textAlign: "left"}} className="p-0"><strong>13 años</strong></h1>
                  <h4 style={{ color: "#a52638" , textAlign: "left"}} className="p-0">DE EXPERIENCIA</h4>
                </div>
                <div className="col-lg-8 col-12 p-0 m-0">
                  <div className="row p-0 m-0 d-flex justify-content-center aling-items-center">
                    <div className="col-lg-3 col-6 m-0 d-flex flex-column justify-content-center text-center">
                      <i className='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#fbc781"}}></i>
                      <p style={{ color: "#656d5f" , textAlign: "left"}} className="p-0 text-center">Residencial</p>
                    </div>
                    <div className="col-lg-3 col-6 m-0 d-flex flex-column justify-content-center text-center">
                      <i className='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#c97c87"}}></i>
                      <h6 style={{ color: "#656d5f" , textAlign: "left"}} className="p-0 text-center">Industrial</h6>
                    </div>
                    <div className="col-lg-3 col-6 m-0 d-flex flex-column justify-content-center text-center">
                      <i className='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#8697c8"}}></i>
                      <p style={{ color: "#656d5f" , textAlign: "left"}} className="p-0 text-center">Coorporativo</p>
                    </div>
                    <div className="col-lg-3 col-6 m-0 d-flex flex-column justify-content-center text-center">
                      <i className='bx bxs-adjust-alt' style={{ fontSize: '75px' , color: "#b7e5f7"}}></i>
                      <p style={{ color: "#656d5f" , textAlign: "left"}} className="p-0 text-center">Comercial</p>
                    </div>
                  </div>
                </div>
              </div>
           
              <div className="row p-0 m-0">
                <div className="col-12 d-flex aling-items-center justify-content-center">
                  <img src={experiencia} className="img-fluid"/>
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="col-lg-5 col-12 p-0 m-0">
                  <div className="image-card">
                    <div className="row p-1 m-0 hidden">
                      <hr style={{ border: '2px solid #000' }}/>
                      <p>Izquierda</p>
                      <strong>Merck Sharp & Dohme/Oficinas Corporativas</strong>
                      <p>2,500 m<sup>2</sup></p>
                      <p>San Jerónimo, CDMX 2011</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 p-0 m-0">
                  <div className="image-card">
                    <div className="row p-1 m-0 hidden">
                      <hr style={{ border: '2px solid #000' }}/>
                      <p>Superior:</p>
                      <strong>Alsea/Oficinas Corporativas</strong>
                      <p>2,2000 m<sup>2</sup></p>
                      <p>Reforma 222, CDMX, 2007</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12 p-0 m-0">
                  <div className="image-card">
                    <div className="row p-1 m-0 d-flex aling-items-center justify-content-center">
                      <img src={mini} className="img-fluid" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
  
  export default Inicio;
  
  window.addEventListener("click", e=>{
    console.log(e.target)
  })