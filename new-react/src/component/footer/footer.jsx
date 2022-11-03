import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = () => {
    return (
        <div>
            <footer class="footer-distributed">

<div class="footer-left">
    <h3><span>Raun</span></h3>
    <p class="footer-company-name">© 2021 PushTheme Learning Solutions Pvt. Ltd.</p>
</div>

<div class="footer-center">
    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Yogyakarta</span></p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 22-27782183</p>
    </div>

</div>
<div class="footer-right">
    <p class="footer-company-about">
        <span>About the company</span>
        booking app with Raun</p>
    <div class="footer-icons">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
    </div>
</div>
</footer>
        </div>
    )
}

export default footer
