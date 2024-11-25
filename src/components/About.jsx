import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   useGSAP(() => {
      // Original animation for #clip
      const clipAnimation = gsap.timeline({
         scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
         },
      });
      clipAnimation.to(".mask-clip-path", {
         width: "100vw",
         height: "100vh",
         borderRadius: 0,
      });

      const stoneImageAnimation = gsap.timeline({
         scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=1800 center",
            scrub: 0.5,
         },
      });

      // Sticky and transition animation for the stone image
      stoneImageAnimation
         .fromTo(
            "#stone-webp",
            { y: 0 },
            { y: "-5%", duration: 1 } // Keeps the image in place
         )
         .to("#stone-webp", { y: "-100%", duration: 1 }); // Moves it out of the screen
   });

   return (
      <div id="about" className="min-h-screen w-screen">
         <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-sm uppercase md:text-[10px]">
               Welcome to Zentry
            </h2>
            <AnimatedTitle
               title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
               containerClass="mt-5 !text-black text-center"
            />
            <div className="about-subtext">
               <p>The Game of games begins-your life, now an epic MMORPG</p>
               <p className="text-gray-500">
                  Zentry unites every player from countless games and platforms
               </p>
            </div>
         </div>
         <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
               <img
                  src="img/about.webp"
                  alt="Background"
                  className="absolute left-0 top-0 size-full object-cover z-10"
               />
            </div>

            <img
               id="stone-webp"
               src="img/stones.webp"
               alt="Stones"
               className="absolute left-0 top-0 w-full h-full object-scale-down z-20"
               style={{
                  transform: "scale(0.8)",
                  transformOrigin: "center",
                  width: "100%",
                  height: "100%",
               }}
            />
         </div>
      </div>
   );
};

export default About;
