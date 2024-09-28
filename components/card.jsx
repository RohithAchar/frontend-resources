import Image from "next/image";

const Card = ({ data }) => {
  return (
    <a className="card group" href={data.href} target="_blank" rel="noreferrer">
      <div className="flex flex-col border rounded-lg shadow-lg p-4 transition pb-8 md:hover:-translate-y-1 md:hover:shadow-xl bg-white/30 backdrop-blur-lg backdrop-saturate-150">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <div className="absolute image-gradient w-full h-full"></div>
          <Image
            fill
            src={data.src}
            alt={data.name}
            className="w-full h-full object-cover rounded-lg group:hover:scale-110"
          />
        </div>
        <h3 className="mt-4 font-semibold text-xl text-slate-800">
          {data.name}
        </h3>
        <p className="mt-2 text-slate-600 text-sm">{data.description}</p>
      </div>
    </a>
  );
};

export default Card;
