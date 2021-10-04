import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import About from '../components/section-about'
import Contact from '../components/section-contact'

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!)

  return (
    <div className={styles.container}>
      <Head>
        <title>Quentin Hoog</title>
        <meta name="description" content="Development, QA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={0.4} speed={0.6} style={{ backgroundColor: '#01202a' }} />
  
          {/* Presentation */}
          <ParallaxLayer offset={0} speed={1} factor={0.8} style={{ background: '#022A36' }} />

          <ParallaxLayer offset={0} speed={2} factor={3} style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={0} speed={-0.4} factor={1} style={{paddingTop: '8rem',}}>
            <div className={styles.presentationTextContainer}>
              <h1>Quentin HOOG</h1>
              <p>Developer</p>
              <p>QA Tester / Automation</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.2} speed={0.3} style={{ pointerEvents: 'none' }}>
            <div className={styles.imgSateliteContainer}>
              <Image src="/images/satelite.png" alt="Satelite" width={140} height={140} />
            </div>
          </ParallaxLayer> 
          
          {/* About */}
          <ParallaxLayer offset={1} speed={1} style={{background: '#0A5871'}}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={3} style={{ pointerEvents: 'none'}}>
            <Image src="/images/spaceship.svg" alt="Spaceship" width={120} height={140} />
          </ParallaxLayer>
                    
          <ParallaxLayer offset={1.6} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.9} speed={0.8} style={{ 
            backgroundColor: '#1d80a1a6', 
            height: '80vh', 
          }} />

          {/* Contact */}
          <ParallaxLayer offset={2} speed={1} style={{ background: '#50B7D8' }} />

          <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.7} speed={0.4}style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
            <img src={url('earth')} style={{ width: '60%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.85} speed={0.2} style={{ pointerEvents: 'none' }} >
            <div className={styles.imgCthulhuContainer}>
              <Image src="/images/cthulhu.png" alt="Satelite" width={140} height={120} />
            </div>
          </ParallaxLayer> 

          <ParallaxLayer offset={2} speed={1} >
            <Contact />
          </ParallaxLayer> 

        </Parallax>
      </main>
    </div>
  )
}

export default Home
