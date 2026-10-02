import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2, Command, Menu, Moon, Sun, Zap } from 'lucide-react'
import './styles.css'

const fade = {initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.25},transition:{duration:.7,ease:[.22,1,.36,1]}}

function Landing() {
  const [dark,setDark] = useState(true), [open,setOpen] = useState(false), [sent,setSent] = useState(false)
  const {scrollYProgress}=useScroll(); const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30})
  return <div className={dark?'orbit-site dark':'orbit-site'}>
    <motion.div className="progress" style={{scaleX}}/>
    <nav className="orbit-nav"><a className="orbit-logo" href="#top"><Command/>ORBIT</a><div className={open?'orbit-links open':'orbit-links'}>{['Platform','Missions','Stories','Contact'].map(x=><a href={`#${x.toLowerCase()}`} onClick={()=>setOpen(false)} key={x}>{x}</a>)}</div><button className="theme-btn" onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button><button className="menu-orbit" onClick={()=>setOpen(!open)}><Menu/></button></nav>
    <header className="orbit-hero" id="top"><div className="planet"/><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><motion.div className="hero-copy" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}}><p className="eyebrow">A NEW CLASS OF LAUNCH PLATFORM</p><h1>Make space<br/>for <em>ambition.</em></h1><p>Mission intelligence, launch orchestration, and resilient communications in one calm command layer.</p><div><a className="launch-btn" href="#platform">Explore platform <ArrowRight/></a><span>99.99% mission uptime</span></div></motion.div><div className="scroll-cue"><span>Scroll to orbit</span><i/></div></header>
    <section className="orbit-stats" id="platform">{[['320+','missions supported'],['18','active constellations'],['42ms','global signal latency'],['7.8M','telemetry events / day']].map(([n,l])=><motion.div {...fade} key={l}><strong>{n}</strong><span>{l}</span></motion.div>)}</section>
    <section className="manifesto"><motion.p {...fade} className="eyebrow">DESIGNED FOR THE MOMENTS THAT MATTER</motion.p><motion.h2 {...fade}>From launch window to last-mile signal, Orbit turns complex operations into clear decisions.</motion.h2></section>
    <section className="feature-stack" id="missions">{[
      ['01','Mission control','A unified, real-time view of vehicles, payloads, weather, and ground stations.'],
      ['02','Signal intelligence','Detect anomalies before they become incidents with adaptive telemetry models.'],
      ['03','Autonomous response','Build trusted playbooks that react at machine speed while operators stay in control.']
    ].map(([n,t,d],i)=><motion.article {...fade} className="orbit-feature" key={t}><div><span>{n}</span><Zap/></div><h3>{t}</h3><p>{d}</p><div className={`feature-visual visual-${i+1}`}><i/><i/><i/></div></motion.article>)}</section>
    <section className="timeline-section" id="stories"><p className="eyebrow">A FLIGHT-PROVEN WORKFLOW</p><h2>One line from idea to orbit.</h2><div className="mission-line">{['Define','Simulate','Launch','Observe'].map((x,i)=><motion.div {...fade} key={x}><span>{i+1}</span><h3>{x}</h3><p>{['Model constraints and outcomes','Stress-test every mission path','Coordinate people and systems','Learn from every signal'][i]}</p></motion.div>)}</div></section>
    <section className="testimonial"><motion.blockquote {...fade}>“Orbit gives the team the one thing space operations rarely offer: room to think ahead.”</motion.blockquote><p>Leena Varma · VP Mission Systems</p></section>
    <section className="contact" id="contact"><div><p className="eyebrow">START A CONVERSATION</p><h2>Your next mission<br/>starts here.</h2></div>{sent?<div className="sent"><CheckCircle2/><h3>Signal received.</h3><p>We’ll be in touch within one orbit.</p></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@company.com"/></label><label>Mission<select><option>Launch operations</option><option>Telemetry</option><option>Constellation management</option></select></label><button>Request briefing <ArrowRight/></button></form>}</section>
    <footer className="orbit-footer"><a className="orbit-logo" href="#top"><Command/>ORBIT</a><span>Make space for ambition.</span><span>© 2026 Orbit Systems</span></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><Landing/></React.StrictMode>)
