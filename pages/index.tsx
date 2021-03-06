import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import About from '../src/components/section-about'
import SectionSkills from '../src/components/section-skills'
import Contact from '../src/components/section-contact'
import Presentation from '../src/components/section-presentation'
import Header from '../src/components/header'
import initFirebase from '../src/firebase/initFirebase'
import { ImageLoaderProps } from 'next/image'

initFirebase()

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export const staticImageLoader = ({ src, width, quality } : ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const writeAsciiMessage = () => {
  console.log(`_|    _|            _|  _|          `)
  console.log(`_|    _|    _|_|    _|  _|    _|_|  `)
  console.log(`_|_|_|_|  _|_|_|_|  _|  _|  _|    _|`)
  console.log(`_|    _|  _|        _|  _|  _|    _|`)
  console.log(`_|    _|    _|_|_|  _|  _|    _|_|  `)
  console.log(``)
  console.log(`  _|      _|                                    `)
  console.log(`_|_|_|_|  _|_|_|      _|_|    _|  _|_|    _|_|  `)
  console.log(`  _|      _|    _|  _|_|_|_|  _|_|      _|_|_|_|`)
  console.log(`  _|      _|    _|  _|        _|        _|      `)
  console.log(`    _|_|  _|    _|    _|_|_|  _|          _|_|_|`)
}

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!)
  writeAsciiMessage()

  return (
    <div className={styles.container}>
      <Head>
        <title>Quentin Hoog</title>
        <meta name="description" content="Quentin Hoog, freelance developer and QA tester" />
        <meta name="keywords" content="React, Selenium, tests, development, HTML, CSS, JavaScript, QA, freelance" />
        <meta name="author" content="Quentin Hoog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Parallax ref={parallax} pages={3.2}>
          <ParallaxLayer offset={0.4} speed={0.6} style={{ backgroundColor: '#01202a' }} />
  
          {/* *** Presentation *** */}
          <ParallaxLayer offset={0} speed={1} factor={0.8} style={{ background: '#022A36' }} />

          <ParallaxLayer offset={0} speed={2} factor={3} style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <Header />

          <ParallaxLayer 
            offset={0} speed={-0.4} factor={1} 
            onClick={() => parallax.current.scrollTo(1)}
          >
            <Presentation />
          </ParallaxLayer>

          <ParallaxLayer offset={0.19} speed={0.2} style={{ pointerEvents: 'none' }}>
            <div className={styles.imgCometContainer}>
              <Image loader={staticImageLoader} src="/images/comet.png" alt="Comet" width={140} height={140} />
            </div>
          </ParallaxLayer> 
          
          <ParallaxLayer offset={0.15} speed={0.8} style={{ pointerEvents: 'none' }}>
            <div className={styles.imgMarsContainer}>
              <Image loader={staticImageLoader} src="/images/mars.svg" alt="Mars" width={45} height={45} />
            </div>
          </ParallaxLayer> 

          {/* *** About *** */}
          <ParallaxLayer 
            offset={1} speed={1} 
            style={{background: 'linear-gradient(#022a36, #0a5871)'}}
            onClick={() => parallax.current.scrollTo(2)}
          >
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'none' }}>
            <div className={styles.imgSateliteContainer}>
              <Image loader={staticImageLoader} src="/images/satelite.png" alt="Satelite" width={130} height={130} />
            </div>
          </ParallaxLayer> 

          <ParallaxLayer offset={1.5} speed={3} style={{ pointerEvents: 'none'}}>
            <div className={styles.imgSpaceshipContainer}>
              <Image loader={staticImageLoader} src="/images/spaceship.svg" alt="Spaceship" width={140} height={160} />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.9} speed={0.8} style={{ backgroundColor: '#1d80a1a6', height: '80vh' }} />
       
          {/* *** Skills *** */}
          <ParallaxLayer 
            offset={1.8} speed={1.8} 
            style={{background: '#0A5871'}}
            onClick={() => parallax.current.scrollTo(2)}
          >
            <SectionSkills />
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={0.8} style={{ opacity: 0.1 }}>
            <div style={{ display: 'block', marginLeft: '85%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={140} width={200}  />
            </div>
            <div style={{ display: 'block', marginLeft: '40%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={190} width={260}  />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.8} speed={0.5} style={{ opacity: 0.2 }}>
            <div style={{ display: 'block', marginLeft: '70%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={200} width={300}  />
            </div>
            <div style={{ display: 'block', marginLeft: '2%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={120} width={180}  />
            </div>
            <div style={{ display: 'block', marginLeft: '10%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={100} width={150}  />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.95} speed={0.3} style={{ opacity: 0.4 }}>
            <div style={{ display: 'block', marginLeft: '12%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={140} width={200}  />
            </div>
            <div style={{ display: 'block', marginLeft: '30%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={190} width={260}  />
            </div>
          </ParallaxLayer>

          {/* *** Contact *** */}
          <ParallaxLayer offset={2} speed={1} style={{ background: '#50B7D8' }} />

          <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.6 }}>
            <div style={{ display: 'block', marginLeft: '55%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={190} width={280}  />
            </div>
            <div style={{ display: 'block', marginLeft: '8%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={120} width={180}  />
            </div>
            <div style={{ display: 'block', marginLeft: '15%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={140} width={220}  />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.8} speed={0.9} style={{ pointerEvents: 'none' }} >
            <div className={styles.imgMoonContainer}>
              <Image loader={staticImageLoader} src="/images/moon.png" alt="Mars" width={70} height={70} />
            </div> 
          </ParallaxLayer> 

          <ParallaxLayer offset={2.7} speed={1} style={{ background: '#50B7D8' }} /> 

          <ParallaxLayer offset={2.5} speed={0.5} style={{ opacity: 0.3 }}>
            <div style={{ display: 'block', marginLeft: '70%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={200} width={300}  />
            </div>
            <div style={{ display: 'block', marginLeft: '2%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={120} width={180}  />
            </div>
            <div style={{ display: 'block', marginLeft: '10%' }}>
              <Image loader={staticImageLoader} src="/images/cloud.png" alt="Cloud" height={100} width={150}  />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.75} speed={0.4} style={{ pointerEvents: 'none' }} >
            <div className={styles.imgEarthContainer}>
              <Image loader={staticImageLoader} src="/images/earth.svg" alt="Earth" layout="fill" />
            </div>
          </ParallaxLayer> 

          <ParallaxLayer offset={2.98} speed={0.2} style={{ pointerEvents: 'none' }} >
            <div className={styles.imgCthulhuContainer}>
              <Image loader={staticImageLoader} src="/images/cthulhu.png" alt="Satelite" width={140} height={120} />
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
