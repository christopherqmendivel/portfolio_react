import transition from "../animations/transition"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import MapContainer from '../components/Mapa';


function Contacto() {

  return (
    <div className="contact">
      <div className="contact-info">
        <h1>
          <span className="html-tag">
            &lt;h1&gt;
          </span>
          Contacto
          <span className="html-tag">
            &lt;/h1&gt;
          </span>
        </h1>
        <span className="html-tag">
          &lt;p&gt;
        </span>
        <p className="info">Agradezco tu tiempo al ponerte en contacto. Estoy entusiasmado ante la oportunidad de colaborar contigo. ¿En qué puedo ayudarte hoy?</p>
        <span className="html-tag">
          &lt;/p&gt;
        </span>


        <form className="form">
          <span className="html-tag">
            &lt;form&gt;
          </span>
          <input type="text" className=" ipt nombre" id="nombre" placeholder="Nombre" name="nombre" />
          <input type="text" className=" ipt correo" id="correo" placeholder="Correo" name="correo" />
          <input type="text" className=" ipt asunto" id="correo" placeholder="asunto" name="asunto" />
          <textarea name="mensaje" className=" ipt form-contacto" placeholder="Mensaje" id="mensaje-textarea" cols="30" rows="10"></textarea>

          <button type="submit" className="btn btnEnviar slide" id="btnEnviar">Enviar</button>
          <span className="html-tag">
            &lt;/form&gt;
          </span>
        </form>


      </div>
      <div className="map">
        <div className="ubicacion-contacto">
          <span>Christopher Quiroz,</span>
          <span>Santander, Cantabria - ES</span>
          <span><FontAwesomeIcon icon={faAt} className='email' />: cquirozmendivel@gmail.com</span>
        </div>
        < MapContainer />

      </div>
    </div>
  )
}

export default transition(Contacto);