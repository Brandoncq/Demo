import { useState } from 'react'
import './App.css';
import enko from './imagenes/enko.png'
import mini from './imagenes/mini.png'
import P_I from'./imagenes/RP/P-I.jpg';
import I_1 from'./imagenes/RI/I-1.jpg';
import I_2 from'./imagenes/RI/I-2.jpg';
import I_3 from'./imagenes/RI/I-3.jpg';
import I_4 from'./imagenes/RI/I-4.jpg';
import I_5 from'./imagenes/RI/I-5.jpg';
import I_6 from'./imagenes/RI/I-6.jpg';
import I_7 from'./imagenes/RI/I-7.jpg';
import F_1 from'./imagenes/RF/F-1.jpg';
import F_2 from'./imagenes/RF/F-2.jpg';
import F_3 from'./imagenes/RF/F-3.jpg';
import F_4 from'./imagenes/RF/F-4.jpg';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <br></br>
      <div className="row m-0 position-relative">
        <div className="col-lg-5 col-12 p-0">
          <div className="image-card">
            <img src={I_1} className="img-fluid"/>
            <img src={I_2} className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-7 col-12 p-5">
          <div className="col-12 d-flex justify-content-end h-100 flex-column p-2  hidden">
            <h1 style={{ color: "#a52638" }}>SERVICIOS</h1>
            <h5 style={{ color: "#656d5f"}}>1. Proyecto arquitectónico, estructural e instalaciones.</h5>
            <h5 style={{ color: "#656d5f"}}>2. Análisis del inmueble</h5>
            <h5 style={{ color: "#656d5f"}}>3. Coordinación de todas las especialidades</h5>
            <h5 style={{ color: "#656d5f"}}>4. Construcción del espacio</h5>
            <div className="row p-0 m-0">
             <hr style={{ border: '2px solid #000' }} />
                <div className="col-lg-4 col-6" style={{ color: "#656d5f"}}>
                  <p>Izquierda y Centro:</p>
                  <strong>4e/oficinas Corporativas</strong>
                  <p>600 m<sup>2</sup></p>
                  <p>Lomas Verdes, Edo. De Méx., 2012</p>
                </div>
                <div className="col-lg-4 col-6" style={{ color: "#656d5f"}}>
                  <p>Derecha:</p>
                  <strong>Tupperware/Comedors</strong>
                  <p>500 m<sup>2</sup></p>
                  <p>Lerma, Edo de Méx., 2015</p>
                </div>
                <div className="col-lg-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={mini} className="img-fluid" style={{ maxWidth: '70px', maxHeight: '70px' }}/>
                </div>
            </div>
          </div>
          
        </div>
        <div className="p-0 position-absolute-img">
          <img
            src={I_5}
            className="img-absolute-incrustada img-fluid"
            alt="Imagen Incrustada"
          />
          <img
            src={I_4}
            className="img-absolute-incrustada img-fluid"
            alt="Imagen Incrustada"
          />
          <img
            src={I_3}
            className="img-absolute-incrustada img-fluid"
            alt="Imagen Incrustada"
          />
        </div>
      </div>
      <br></br>
      <div className="row m-0 position-relative">
        <div className="col-lg-6 col-12 p-3">
          <div className="image-card">
            <img src={F_1} className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6 col-12 p-3">
          <div className="image-card">
            <img src={F_3} className="img-fluid"/>
          </div>
        </div>
        <div className="position-absolute">
          <img
            src={I_6}
            className="img-absolute img-ajuste img-fluid"
            alt="Imagen Incrustada"
          />
          <img
            src={I_7}
            className="img-absolute img-ajuste img-fluid"
            alt="Imagen Incrustada"
          />
        </div>    
      </div>
      <br></br>
      <div className="row m-0">
        <div className="col-lg-6 col-12 p-0">
          <div className="image-card">
            <div className="row p-2 m-0 hidden">
              <h1 style={{ color: "#a52638" , textAlign: "right"}} className='Ajustar'>EXPERIENCIA</h1>
              <h1 style={{ color: "#656d5f" , textAlign: "right"}}><strong>comercial</strong></h1>
            </div>
            
            <div className="row p-0 m-0">
              <div className="col-lg-7 col-12 p-0" style={{ backgroundColor: "#1d2730"}}>
                <div className="image-card">
                  <img src={F_2} className="img-fluid p-0 m-0"/>
                </div>
              </div>
              <div className="col-lg-5 col-12 p-0">
                <div className="image-card">
                  <img src={P_I} className="img-fluid p-0 m-0"/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-lg-6 col-12 p-0">
        <div className="row p-5 m-0">
        </div>
          <div className="row p-5 m-0 d-flex justify-content-center">
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>AXA</strong></h6>
              <p>Búsqueda e Implementación 
                <br></br>de tiendas para Promotores</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>NEXTEL</strong></h6>
              <p>Proyecto ejecutivo de remodelación
              <br></br>de Centros de Atención y Tiendas.
              <br></br>Proyecto ejecutivo para nuevos
              <br></br>Centros de Atención y Tiendas</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>CINEMEX</strong></h6>
              <p>Proyecto de remodelación para cines existentes.
              <br></br>Proyecto de nuevos complejos.</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>TOYOTA</strong></h6>
              <p>Propuesta para remodelación
              <br></br>de nuevas salas de espera</p>
            </div>
            <div className="col-lg-8 col-6 p-0 hidden" style={{ color: "#656d5f", textAlign: "right" }}>
              <h6><strong>WALTMART</strong></h6>
              <p>Proyectos para implementación de banco Walmart
              <br></br>Levantamientos Arquitectónicos
              <br></br>Proyectos Varios</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0">
      <div className="col-lg-6 col-12 p-0">
          <div className="row p-5 m-0">
            <div className="row px-5 py-0 m-0 hidden">
              <h3><strong style={{ color: "#656d5f" , textAlign: "left"}}>Hacemos palpable</strong></h3>
              <h5 style={{ color: "#a52638", textAlign: "center" }} className="light">LA PERSONALIDAD DE LAS EMPRESAS</h5>
              <h3 style={{ color: "#656d5f", textAlign: "center" }}><strong>en cada m<sup>2</sup></strong></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12-6 p-0" style={{ color: "#656d5f", textAlign: "right" }}>
          <div className="row p-0 m-0">
            <div className="col-lg-8 col-6 hidden">
              <hr style={{ border: '2px solid #000' }} />
              <h6><strong>Aistom/Oficionas Corporativas</strong></h6>
              <p>2.500<sup>2</sup>
              <br></br>Montes, Urales, CDMX, 2010</p>
            </div>
            <div className="col-lg-4 col-6 d-flex align-items-center justify-content-center">
              <img src={mini} className="img-fluid" style={{ maxWidth: '70px', maxHeight: '70px' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
