const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="../../public/k72-hero-video.mp4"
      ></video>
    </div>
  );
};

export default Video;
