import './content.css'
import img1 from '../../assets/image/bromo.jpg'
import img2 from '../../assets/image/nusapenida.jpg'
import img3 from '../../assets/image/padar.jpg'
import img4 from '../../assets/image/trawas.jpg'
import img5 from '../../assets/image/sukabumi.jpg'
import img6 from '../../assets/image/padang.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const content = () => {
    return(
        <div className='content'>
        <div className="contentItem">
            <img src="https://placeholder.com"  alt="" />
            <div className="contentClassTitle">
                <h1>Recomendation Destination</h1>
                <h3>Indonesia</h3>
                <h2></h2>
            </div>
            <div className="grid-container">
            <div className="grid">
                <div class="grid-item">
                <img src={img1} alt="" />
                </div>
                <h3>Bromo</h3>
                <p>650 properties</p>
            </div>
            <div className="grid">
                <div class="grid-item">
                <img src={img2} alt="" />
                </div>
                <h3>NusaPenida</h3>
                <p>750 properties</p>
            </div>
            <div className="grid">
                <div class="grid-item">
                <img src={img3} alt="" />
                </div>
                <h3>Padar</h3>
                <p>850 properties</p>
            </div>
            <div className="grid">
                <div class="grid-item">
                <img src={img4} alt="" />
                </div>
                <h3>Trawas</h3>
                <p>650 properties</p>
            </div>
            <div className="grid">
                <div class="grid-item">
                <img src={img5} alt="" />
                </div>
                <h3>Sukabumi</h3>
                <p>650 properties</p>
            </div>
            <div className="grid">
                <div class="grid-item">
                <img src={img6} alt="" />
                </div>
                <h3>Padang</h3>
                <p>650 properties</p>
            </div>
            </div>
        <button><FontAwesomeIcon icon="fa-solid fa-spinner" /> Load More</button>
        </div>
    </div>
    )
}

export default content