import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import HeaderVideo from '../components/Video/header-animated.mp4';
import RockSVG from '../components/Image/jumbo-rock.svg';
import Malenia from '../components/Image/malenia.png'

const Start = () => {

  return (
    <main className='Start'>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}>
          <video 
          autoPlay
          loop 
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}>
            <source src={HeaderVideo} type='video/mp4' />
          </video>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.06}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            alt='mountain for jumbotron'
            src={RockSVG}
            style={{
              position: "absolute",
              width: "120%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%)"
          }}/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={1}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <h1 className='epic-title'>ELDEN BUILDER</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <img src={Malenia} alt='Blade of Miquella' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" size='large' color="default" href="/login">Enter Now</Button>
        </ParallaxLayer>

      </Parallax>
    </main>
  );
};

export default Start;
