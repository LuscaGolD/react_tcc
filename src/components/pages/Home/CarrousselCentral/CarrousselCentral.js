import tlfu2 from './Carrousselimg/tlou2.jpg'
import valorant from './Carrousselimg/valoros.jpg'
import irelia from './Carrousselimg/ireliaa.webp'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carrcentral() {



  return(
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Carousel showIndicators={false} showThumbs showStatus={false} width={1200} thumbWidth={90} showArrows={false} autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
                <div>
                    <img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/pt_BR/games/switch/o/overwatch-2-switch/hero" />
                    <p className="legend">overwatch 2</p>
                </div>
                <div>
                    <img src="https://cdn2.unrealengine.com/Fortnite%2Fchapter2%2FPT-BR_11BR_KeyArt_Social-1920x1080-246e2543f48442b02b3d49af14cce17f8432e920.jpg" />
                    <p className="legend">fortnite Capitulo 2</p>
                </div>
                <div>
                    <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f" />
                    <p className="legend">League Of Legends</p>
                </div>

                <div>
                    <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg" />
                    <p className="legend">COD MW2</p>
                </div>

                <div>
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg" />
                    <p className="legend">God Of War Ragnarok</p>
                </div>

                <div>
                    <img src="https://cdn2.unrealengine.com/ea-sports-fifa-23-is-coming-to-the-epic-games-store-1920x1080-398e19351a82.jpg" />
                    <p className="legend">FIFA 2023</p>
                </div>


                <div>
                    <img src="https://cdn1.epicgames.com/offer/9acb0d22292b48acaeb0eb38b391df93/EGS_NeedforSpeedUnbound_CriterionGames_S1_2560x1440-d74bb63a1f07cbb6376d28409ed8cca4" />
                    <p className="legend">NFS UNBOUND</p>
                </div>


                <div>
                    <img src="https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg" />
                    <p className="legend">THE LAST OF US PART 2</p>
                </div>

                
                <div>
                    <img src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/p/pokemon-sword-and-pokemon-shield-double-pack-digital-version-switch/hero" />
                    <p className="legend">POKÉMON SWORD AND SHIELD</p>
                </div>

                <div>
                    <img src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e" />
                    <p className="legend">HOGWARDS LEGACY</p>
                </div>


                <div>
                    <img src="https://i.ytimg.com/vi/FSkks9MMLZg/maxresdefault.jpg" />
                    <p className="legend">SUPER MARIO ODSSEY</p>
                </div>

                <div>
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0311/cp7G7TILGKzAzLGb1MMn9hyt.jpg" />
                    <p className="legend">RESIDENT EVIL 7</p>
                </div>
            </Carousel>

    </div>
  );
}

export default Carrcentral;