import Image from "next/image";
import BannerWebsite2 from "@/public/assets/BannerWebsite2.png";

const About = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={BannerWebsite2}
        alt="Banner"
        priority
        className="w-full h-auto"
        style={{ height: "auto" }}
      />
    </section>
  );
};

export default About;
