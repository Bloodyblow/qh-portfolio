import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

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

      <main className={styles.main}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={0.4} speed={0.6} style={{ backgroundColor: '#01202a' }} />
  
          {/* Presentation */}
          <ParallaxLayer offset={0} speed={1} factor={1}
            style={{
              background: '#022A36',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '4rem',
              paddingRight: '4rem',
            }}
          />

          <ParallaxLayer offset={0} speed={2} factor={3} style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={0.1} speed={-0.15} factor={6} style={{paddingTop: '8rem',}}>
            <div className={styles.presentationTextContainer}>
              <h1>Quentin HOOG</h1>
              <p>Developer</p>
              <p>QA Tester / Automation</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.2} speed={0} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>
          
          {/* About */}
          <ParallaxLayer offset={1} speed={1} style={{
              background: '#0A5871',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              paddingLeft: '4rem',
              paddingRight: '4rem',
          }}>
            <article className={styles.articleAbout}>
              <h2>About</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel magna 
                vel nisl imperdiet dapibus. Vestibulum feugiat bibendum vulputate. 
                Pellentesque tincidunt turpis ac justo laoreet tempor.
              </p>
            </article>
            <article className={styles.articleSkills}>
              <h2>Skills</h2>
            </article>
          </ParallaxLayer>
          
          {/* Contact */}
          <ParallaxLayer offset={2} speed={1} style={{
            background: '#50B7D8',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '4rem 2rem',
          }}>
            <h2 className={styles.contactH2}>Contact me</h2>
          </ParallaxLayer> 

        </Parallax>
      </main>
    </div>
  )
}

export default Home
