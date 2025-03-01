import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);


const AboutMe = () => {

    useGSAP(()=>{

        gsap.to("#scroll-ball-about",{
            y:-150,
            x:-30
        })

        const timeline = gsap.timeline({
            scrollTrigger:{
              trigger:"#scroll-ball-about",
              start:"-500% 60%",
              end:"top top",
              scrub:1,
              //markers:true,
            },
          });

          
          timeline.to("#scroll-ball-about",{
            x:200,
            rotate:360,
            borderRadius:"100%",
            ease:'power1.inOut',
            duration:6
          })
          timeline.to("#scroll-ball-about",{
            y:200,
            rotate:360,
            borderRadius:"100%",
            ease:'bounce.out',
            duration:6
          })
          timeline.to("#scroll-box-about",{
            overflow:"hidden"
          })
          timeline.to("#scroll-ball-about",{
            scale:150,
            duration:6
          })
          timeline.to("#show-about",{
            display:"block"
          })


    },[])

  return (
    <section className=' min-h-screen flex justify-center items-center'>
        <div id='scroll-box-about' className=' w-[90%] h-[90vh] rounded-3xl bg-[#1A1A1A] '>
           <div id='scroll-ball-about' className=' w-5 h-5 bg-[#FF7F50] '></div>
           <div id='show-about' className='absolute hidden'>
            <div className=' flex flex-col justify-center items-center'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum, porro nam officiis saepe ea autem ut omnis similique voluptatem vel repellat neque exercitationem corrupti nemo labore nihil sapiente sint.</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum, porro nam officiis saepe ea autem ut omnis similique voluptatem vel repellat neque exercitationem corrupti nemo labore nihil sapiente sint.</div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default AboutMe