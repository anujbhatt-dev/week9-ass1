import Hero from "../components/Hero";
import Slider from "../components/Slider";
import data from "../data";

export default function Home() {
  return (
    <div>
        <Hero/>
      <Slider heading={"Hollywood"} data={data.slice(0,10)}/>
      <Slider heading={"Bollywood"} data={data.slice(10)}/>
    </div>
  )
}
