import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo }  from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [ videoSrc , setVideoSrc ] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
 
  // to allow updates when re-render
  const handleVideoSrcSet = () => {
    if ( window.innerWidth < 760 ) {
      setVideoSrc( smallHeroVideo );
    } else {
      setVideoSrc( heroVideo );
    }
  };

  // to automatically call the state change when resized
  useEffect( () => {
    window.addEventListener( "resize", handleVideoSrcSet)

    // to clean up the event listener
    return () => {
      window.removeEventListener( "resize", handleVideoSrcSet )
    }
  });



  useGSAP( () => {
    gsap.to( "#hero-title" , {opacity: 1 , delay: 2} ) ;
    gsap.to( "#cta" , {opacity:1 , y:-50 , delay: 2} ) ;
  }) ;
  
  
  // 
  //
  // hero-title
  return (
    <section className = "w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id = "hero-title" className = "hero-title">Phone 15 Pro</p>
        <div className="md:w-10/12  w-9/12">
          <video autoPlay muted playsInline={true}  key={videoSrc} loop = {true} >
            <source src = {videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>


      <div id="cta" 
      className="flex flex-col items-center opacity-0 translate-y-20" >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl text-gray">From $199/month or $999</p>

      </div>
    </section>
  )
};

export default Hero
