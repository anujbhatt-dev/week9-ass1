import { VolumeX } from "lucide-react"
import { Volume2 } from "lucide-react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Hero() {
  let [isMuted,setIsMuted] = useState(true)
  let imgRef = useRef(null)

    useEffect(() => {
    const timer = setTimeout(() => {
        if (imgRef.current) {
        imgRef.current.style.opacity = 0;
        }
    }, 2000);

    return () => clearTimeout(timer);
    }, []);

  return (
    <div className="m-16 mt-24 overflow-hidden rounded-2xl h-[80vh] bg-neutral-700 relative">
        <video className="w-full h-full object-cover absolute inset-0" muted={isMuted} loop autoPlay src="alpha-video.mp4"/>
        <img ref={imgRef} className="w-full h-full object-cover absolute inset-0 transition duration-300" src={"alpha-thumbnail.webp"} alt="" />
        <div className="absolute inset-0 bg-black/40"/>
        <div className="absolute bottom-15 left-10 text-white">
            <img className=" h-[20vh] w-auto object-cover " src={"alpha-logo.webp"} alt="" />
            <div className="flex items-center gap-4 mt-8 font-medium text-lg text-white/80">
                <div>Film</div>
                <div className="h-2 w-2 bg-neutral-700 rounded-full"/>
                <div>Action</div>
                <div className="h-2 w-2 bg-neutral-700 rounded-full"/>
                <div>2026</div>
                <div className="h-2 w-2 bg-neutral-700 rounded-full"/>
                <div>2h 20m</div>
                <div className="h-2 w-2 bg-neutral-700 rounded-full"/>
                <div>U/A 16+</div>
            </div>
            <p className="w-xl text-xl mt-8 transition"> Kaul and Durga work to stop Fate's rogue operations and reunite with Sita, leading to a showdown featuring a cameo connection to the wider spy franchise. </p>
            <div className="flex gap-4 mt-8">
                <button className="text-black font-semibold bg-white rounded-full text-xl px-8 py-3">
                    Play
                </button>
                <button className="text-white font-semibold bg-black/10 rounded-full text-xl px-8 py-3 backdrop-blur-xs ">
                    More Details
                </button>
            </div>
        </div>
        <div className="absolute top-10 right-10 text-white/80 hover:text-white text-sm font-semibold rounded-full p-1  bg-black/10 hover:scale-105 transition" onClick={()=>setIsMuted(!isMuted)}>
            {isMuted ? <Volume2/> : <VolumeX/>}
        </div>
    </div>
  )
}
