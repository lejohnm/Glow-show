import React from 'react';
import Navbar from '../Components/navbar';
import pic from '../../src/IMG_5227.png'
import pic2 from '../../src/IMG_5228.jpg'
import pic3 from '../../src/IMG_5229.jpg'
import pic4 from '../../src/IMG_5230.jpg'
import pic5 from '../../src/IMG_5232.jpg'
import pic6 from '../../src/IMG_5233.jpg'
import pic7 from '../../src/IMG_5234.jpg'
import pic8 from '../../src/IMG_5235.jpg'
import pic9 from '../../src/IMG_5236.jpg'
import pic10 from '../../src/IMG_5237.jpg'
import pic11 from '../../src/IMG_5238.jpg'
import pic12 from '../../src/IMG_5239.jpg'
import pic13 from '../../src/IMG_5240.JPG'
import pic15 from '../../src/IMG_5682.JPG'
import pic16 from '../../src/IMG_5683.JPG'
import pic17 from '../../src/IMG_5684.JPG'
import pic18 from '../../src/IMG_5685.JPG'
import pic19 from '../../src/IMG_5687.JPG'
import pic20 from '../../src/IMG_5688.JPG'
import pic21 from '../../src/IMG_5689.JPG'
import pic22 from '../../src/IMG_5690.JPG'
import pic23 from '../../src/IMG_5691.JPG'
import pic24 from '../../src/IMG_5692.JPG'
import pic25 from '../../src/IMG_5693.JPG'
import pic26 from '../../src/IMG_5694.JPG'
import pic27 from '../../src/IMG_5695.JPG'
import pic28 from '../../src/IMG_5696.JPG'
import pic29 from '../../src/IMG_5697.JPG'
import pic30 from '../../src/IMG_5698.JPG'
import pic31 from '../../src/IMG_5699.PNG'
import pic32 from '../../src/IMG_5700.JPG'


class Home extends React.Component {
    render () {
        return (
            <>
            <div>
                <Navbar />
                <section className="title-page">
                <div>
                <h1 className= "glow-title">GLOW SHOW!</h1>
               {/* <img src="https://i1.sndcdn.com/avatars-000605976675-1krugx-t500x500.jpg" /> */}
                </div>
                <div className="arrow-move">
                <img className="arrow" src="https://icon-library.net/images/down-arrow-icon-png/down-arrow-icon-png-0.jpg" />
                </div>
                </section>
                <br />
                <section className="pic-page">
                <div className="pic-container">
                    <div className="pic-row"> 
                    {/* <img className="pictures" src="https://i1.sndcdn.com/avatars-000605976675-1krugx-t500x500.jpg" /> */}
                    <img className="pictures" src="https://scontent-lax3-2.cdninstagram.com/vp/318bc4873ef69e6c3f079e20f4112ad5/5E281BEB/t51.2885-15/e35/s1080x1080/68741214_235524670721469_4792145303206396648_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=109&ig_cache_key=MjEzNDM1NzU0NzU3NzI0NzQ0OA%3D%3D.2" />
                    <img className="pictures" src="https://pbs.twimg.com/profile_images/1090865492888301569/bVxKph1p_400x400.jpg" />
                   <img className="pictures" src="https://scontent-lax3-2.cdninstagram.com/vp/64dc12ce7103066eb1fcdce77c7609bf/5E1EEA17/t51.2885-15/e35/68944562_165087237964715_8890456497982073366_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=111&ig_cache_key=MjEyMzM5NTYxOTU1MjEyOTY5MQ%3D%3D.2"/>
                   <img className="pictures" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLanmau1xyqbXb-FzDzb1_RPTlvrbdXAjE_ZOfCiPGBaIPlMW6&s"/>
                   <img className="pictures" src={pic}/>
                   <img className="pictures" src={pic2}/>
                   <img className="pictures" src={pic3}/>
                   <img className="pictures" src={pic4}/>
                   <img className="pictures" src={pic5}/>
                   <img className="pictures" src={pic6}/>
                   <img className="pictures" src={pic7}/>
                   <img className="pictures" src={pic8}/>
                   <img className="pictures" src={pic9}/>
                   <img className="pictures" src={pic10}/>
                   <img className="pictures" src={pic11}/>
                   <img className="pictures" src={pic12}/>
                   <img className="pictures" src={pic13}/>
                   <img className="pictures" src={pic15}/>
                   <img className="pictures" src={pic16}/>
                   <img className="pictures" src={pic17}/>
                   <img className="pictures" src={pic18}/>
                   <img className="pictures" src={pic19}/>
                   <img className="pictures" src={pic20}/>
                   <img className="pictures" src={pic21}/>
                   <img className="pictures" src={pic22}/>
                   <img className="pictures" src={pic23}/>
                   <img className="pictures" src={pic24}/>
                   <img className="pictures" src={pic25}/>
                   <img className="pictures" src={pic26}/>
                   <img className="pictures" src={pic27}/>
                   <img className="pictures" src={pic28}/>
                   <img className="pictures" src={pic29}/>
                   <img className="pictures" src={pic30}/>     
                   <img className="pictures" src={pic31}/> 
                   <img className="pictures" src={pic32}/>                
                    </div>
                </div>
                </section>
            </div>
            </>
        )
    }
}

export default Home;