import Navbar from './components/Navbar'
import Collect1 from './images/collect1.png'
import Collect2 from './images/collect2.png'
import Collect3 from './images/collect3.png'
import Collect4 from './images/collect4.png'

import Jacket1 from './images/jacket1.png'
import Jacket2 from './images/jacket2.png'
import Jacket3 from './images/jacket3.png'
import Jacket4 from './images/jacket4.png'
import Basket from './images/basket.png'
import Like from './images/like.svg'
import view from './images/view.svg'
import Footer from './components/Footer'

const collect = [
  {
    name:'Barcelona',
    image:Collect1
  },
  {
    name:'Barcelona',
    image:Collect2
  },
  {
    name:'Barcelona',
    image:Collect3
  },
  {
    name:'Barcelona',
    image:Collect4
  },
]
const jacket = [
  {
    image:Jacket1,
    neme:"Cotton-Blend-Jacket",
    mony:"$48.00"
  },
  {
    image:Jacket2,
    neme:"Multi Pocket Jacket",
    mony:"$59.00"
  },
  {
    image:Jacket3,
    neme:"Velvet Blazer",
    mony:"$48.00"
  },
  {
    image:Jacket4,
    neme:"Cotton-Blend-Jacket",
    mony:"$16.00",
    oldin:"$28.00"
  },
]

function App() {
  return (
    <div>
      <header class="header">
        <Navbar/>
        <div class="header__content">
            <h1 class="header__title">Amazing Shop Layouts</h1>
            <p class="header__text">Grayson Collection</p>
            <button class="header__button">SHOP NOW</button>
        </div>
    </header>
    <main>
        <section class="collect">
            <div class="container">
                {collect.map((item) => {
                  return(
                    <div class="collect__box">
                    <p class="collect__title">{item.name}</p>
                    <img src={item.image} alt="collection" class="collect__image" />
                  </div>
                  )
                })}
            </div>
        </section>
        <section class="project">
            <div class="project__top">
                <h3 class="project__top-title">eCommerce Ready</h3>
                <p class="project__top-text">Style your products and shop pages, add a cart widget to your header, and convert clicks into sales.</p>
            </div>
            <div class="project__bottom">
                <div class="container">
                    <p class="project__bottom-text">The Chloe Collection</p>
                    <h3 class="project__bottom-title">The Project Jacket</h3>
                    <button class="project__bottom-button">PURCHASE THEME</button>
                </div>
            </div>
        </section>
        <section class="jacket">
            <div class="jacket__top">
                <h3 class="jacket__top-title">Highly Customizable</h3>
                <p class="jacket__top-text">Style your products and shop pages, add a cart widget to your header, and convert clicks into sales.</p>
            </div>
            <div class="jacket__bottom">
                <div class="container">
                    {jacket.map((item) => {
                      return (
                        <div class="jacket__bottom-box">
                          <div class="jacket__bottom-box_top">
                              <img src={item.image} alt="jacket" class="jacket__bottom-box_image" />
                              <div class="jacket__bottom-box_icons">
                                  <button class="jacket__bottom-box_basket">
                                      <img src={Basket} alt="basket" />
                                      <span>add to cart</span>
                                  </button>
                                  <div class="jacket__bottom-box_info">
                                      <button><img src={Like} alt="like" /></button>
                                      <button><img src={view} alt="view" /></button>
                                  </div>
                              </div>
                          </div>
                          <div class="jacket__bottom-box_bottom">
                              <p class="jacket__bottom-box_name">{item.neme}</p>
                              <p class="jacket__bottom-box_price"><span>{item.oldin}</span> {item.mony}</p>
                          </div>
                        </div>
                      )
                    })}
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </div>
  )
}

export default App