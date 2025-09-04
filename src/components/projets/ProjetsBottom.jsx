const ProjetsBottom = ({image1, image2}) => {
  return (
    <>
      <div className="w-1/2 h-full relative group overflow-hidden hover:rounded-4xl transition-all duration-300">
        <img
          className="w-full h-full object-cover group-hover:scale-[1.08] transition-all duration-300 "
          src={image1}
        />
        <div className="h-full w-full bg-black/30 absolute top-0 left-0 place-items-center grid opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 ">
          <h2 className="text-[4vw] font-[font2] text-white uppercase border-2 rounded-full leading-[2.8vw] w-fit pt-4 px-5">
            voir le projet
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full relative group overflow-hidden hover:rounded-4xl transition-all duration-300">
        <img
          className="w-full h-full object-cover group-hover:scale-[1.08] transition-all duration-300 "
          src={image2}
        />
        <div className="h-full w-full bg-black/30 absolute top-0 left-0 place-items-center grid opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 ">
          <h2 className="text-[4vw] font-[font2] text-white uppercase border-2 rounded-full leading-[2.8vw] w-fit pt-4 px-5">
            voir le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjetsBottom;
