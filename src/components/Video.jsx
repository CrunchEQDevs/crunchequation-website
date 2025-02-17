import { Video } from 'cloudinary-react';

const VideoComponent = () => {
  return (
    <section className="relative w-full flex justify-center bg-[#383838]">
      <Video
        cloudName="dfhywii5z"      
        publicId="videocrunch2_faaksl" 
        autoPlay
        loop
        muted
        controls={false} 
        playsInline
        className="pointer-events-none"
      />
    </section>
  );
};

export default VideoComponent;
