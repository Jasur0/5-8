import Fecebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import Vimeo from "../images/vimeo.svg"
import Pinterest from "../images/pinterest.svg"
import YouTube from "../images/youtube.svg"

import Visa from "../images/visa.svg"
import PayPal from "../images/paypal.svg"
import Discover from "../images/discover.svg"
import Mastercard from "../images/mastercard.svg"

function Footer() {
  return (
    <footer className='footer'>
        <div class="footer__top">
            <div class="container">
                <div class="footer__box">
                    <p class="footer__title">Customer Services</p>
                    <ul class="footer__list">
                        <li class="footer__item"><a href="" class="footer__link">Contact Us</a></li>
                        <li class="footer__item"><a href="" class="footer__link">Shipping</a></li>
                        <li class="footer__item"><a href="" class="footer__link">Click & Collect</a></li>
                        <li class="footer__item"><a href="" class="footer__link">Returns</a></li>
                        <li class="footer__item"><a href="" class="footer__link">FAQ’s</a></li>
                    </ul>
                </div>
                <div class="footer__box">
                    <p class="footer__title">Customer Assistance</p>
                    <ul class="footer__list">
                        <li class="footer__item"><a href="" class="footer__link">Track My Orders</a></li>
                        <li class="footer__item"><a href="" class="footer__link">Online Returns</a></li>
                        <li class="footer__item"><a href="" class="footer__link">Shipping Rates</a></li>
                        <li class="footer__item"><a href="" class="footer__link">Returns & Exchanges</a></li>
                        <li class="footer__item"><a href="" class="footer__link">International Shipping</a></li>
                    </ul>
                </div>
                <div class="footer__box">
                    <p class="footer__title">Customer Services</p>
                    <ul class="footer__list">
                        <li class="footer__item"><a href="" class="footer__link"><img src={Fecebook} alt="facebook" /> Contact Us</a></li>
                        <li class="footer__item"><a href="" class="footer__link"><img src={Twitter} alt="twitter" /> Shipping</a></li>
                        <li class="footer__item"><a href="" class="footer__link"><img src={Vimeo} alt="vimeo" /> Click & Collect</a></li>
                        <li class="footer__item"><a href="" class="footer__link"><img src={Pinterest} alt="pinterest" /> Returns</a></li>
                        <li class="footer__item"><a href="" class="footer__link"><img src={YouTube} alt="youtube" /> FAQ’s</a></li>
                    </ul>
                </div>
                <div class="footer__box">
                    <p class="footer__title">Join The Club</p>
                    <div class="footer__search">
                        <input type="text" class="footer__input" placeholder="E-mail Address*" />
                        <button class="footer__button">JOIN</button>
                    </div>
                    <p class="footer__text">Sign me up to receive emails on new product arrivals, special offers and exclusive events.</p>
                    <div class="footer__cards">
                        <a href="" class="footer__card"><img src={Visa} alt="visa" /></a>
                        <a href="" class="footer__card"><img src={PayPal} alt="paypal" /></a>
                        <a href="" class="footer__card"><img src={Discover} alt="discover" /></a>
                        <a href="" class="footer__card"><img src={Mastercard} alt="mastercard" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <p class="footer__author">Designed and Powered by <span>ZICO</span></p>
        </div>
    </footer>
  )
}

export default Footer