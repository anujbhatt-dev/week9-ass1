import { useParams, Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import Slider from "../components/Slider";
import data from "../data";

export default function Dedicated() {
  const { id } = useParams();
  const item = data.find((m) => String(m.id) === id);
  const [inList, setInList] = useState(false);

  if (!item) {
    return (
      <div className="m-16 mt-24 h-[80vh] rounded-2xl bg-neutral-900 flex flex-col items-center justify-center gap-4 text-white">
        <p className="text-xl text-white/80">This title isn't available.</p>
        <Link to="/" className="text-sm text-white/50 hover:text-white">
          Back to home
        </Link>
      </div>
    );
  }

  const related = data.filter((m) => m.id !== item.id && m.genre === item.genre);

  return (
    <div>
      <div className="m-16 mt-24 overflow-hidden rounded-2xl h-[80vh] bg-neutral-700 relative">
        <img
          className="w-full h-full object-cover absolute inset-0"
          src={item.image}
          alt=""
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-15 left-10 text-white">
          <h1 className="text-5xl font-bold max-w-xl">{item.title}</h1>

          <div className="flex items-center gap-4 mt-8 font-medium text-lg text-white/80">
            <div>{item.isShow ? "Series" : "Film"}</div>
            <div className="h-2 w-2 bg-neutral-700 rounded-full" />
            <div>{item.genre}</div>
            <div className="h-2 w-2 bg-neutral-700 rounded-full" />
            <div>{item.year}</div>
            <div className="h-2 w-2 bg-neutral-700 rounded-full" />
            <div>{item.duration}</div>
            <div className="h-2 w-2 bg-neutral-700 rounded-full" />
            <div>{item.rated}</div>
          </div>

          <p className="w-xl text-xl mt-8">{item.description}</p>

          <div className="flex gap-4 mt-8">
            <button className="text-black font-semibold bg-white rounded-full text-xl px-8 py-3">
              Play
            </button>
            <button
              onClick={() => setInList((v) => !v)}
              className="flex items-center gap-2 text-white font-semibold bg-black/10 rounded-full text-xl px-8 py-3 backdrop-blur-xs"
            >
              {inList ? <Check size={22} /> : <Plus size={22} />}
              My List
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && <Slider heading="More Like This" data={related} />}
    </div>
  );
}