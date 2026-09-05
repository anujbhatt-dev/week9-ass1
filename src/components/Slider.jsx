import { Link } from "react-router-dom";

const isRecentlyAdded = (addedDate) => {
  if (!addedDate) return false;
  const diffMs = Date.now() - new Date(addedDate).getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 10;
};

export default function Slider({ heading, data }) {
  return (
      <div className="px-16 my-10">
      <h2 className="mb-4 text-2xl font-semibold ">{heading}</h2>
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none ">
        {data.map((item) => (
            <div
            key={item.id}
            className="w-70 h-34 shrink-0 rounded-xl overflow-hidden relative"
            >
            <Link to={`/${item.id}`}>
            <img src={item.image} alt="" />
            {isRecentlyAdded(item.addedDate) && (
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 text-[12px] py-1 px-2 font-semibold rounded-t-lg">
                Recently added
              </p>
            )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}