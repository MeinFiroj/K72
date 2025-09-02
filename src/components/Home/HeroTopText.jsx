import Video from "./Video";
// import video from '../../assets/k72-hero-video.mp4'

const HeroTopText = () => {
  return (
    <div className=" font-[font1] pt-2 text-center">
      <div className="text-[9.5vw] text-white leading-[9vw] uppercase ">L'étincelle</div>
      <div className="text-[9.5vw] text-white leading-[9vw] uppercase flex items-start justify-center">
        qui
        <div className="w-[16vw] h-[7vw] mt-1 rounded-full overflow-hidden ">
          <video className='h-full w-full object-cover rounded-full' autoPlay loop muted disablePictureInPicture src="../../public/k72-hero-video.mp4"></video>
          {/* <Video/> */}
        </div>
        génère
      </div>
      <div className="text-[9.5vw] text-white leading-[9vw] uppercase ">la créativité</div>
    </div>
  );
};

export default HeroTopText;
