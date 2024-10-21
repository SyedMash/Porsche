import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <div className="container mx-auto text-neutral-950">
      <h1 className="text-center my-24 text-5xl sub-heading">HIGHLIGHTS</h1>
      <Swiper
        className="cursor-grab active:cursor-grabbing sub-heading"
        spaceBetween={25}
        slidesPerView={1}
        width={1000}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="h-[500px] one relative">
            <div className="p-2 flex flex-col gap-2 absolute bottom-5 text-white/70">
              <h1 className="font-bold text-2xl">High speed suction motor</h1>
              <p>
                The powerful 6-cylinder boxer suction motor emphasizes its
                origin from <br /> motor sport -- at up to 9,000 rpm for driving
                experience beyond the norm
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] two">
            <div className="p-2 flex flex-col gap-2 absolute bottom-5 text-white/70">
              <h1 className="font-bold text-2xl">Briefly translated gear</h1>
              <p>
                The 6-speed GT sports manual transmission and the 7-speed
                Porsche double clutch transmission transform tunneling into
                adrenaline rushes: with fast switching processes and short sport
                translations
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] three">
            <div className="p-2 flex flex-col gap-2 absolute bottom-5 text-white/70">
              <h1 className="font-bold text-2xl">High speed suction motor</h1>
              <p>
                The powerful 6-cylinder boxer suction motor emphasizes its
                origin from <br /> motor sport -- at up to 9,000 rpm for driving
                experience beyond the norm
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] four">
            <div className="p-2 flex flex-col gap-2 absolute bottom-5 text-white/70">
              <h1 className="font-bold text-2xl">High speed suction motor</h1>
              <p>
                The powerful 6-cylinder boxer suction motor emphasizes its
                origin from <br /> motor sport -- at up to 9,000 rpm for driving
                experience beyond the norm
              </p>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
