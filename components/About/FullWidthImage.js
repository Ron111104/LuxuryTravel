import Image from "next/image";
import React from "react";

const FullWidthImage = () => (
  <section className="relative w-full h-[500px]">
    <Image
      src="/images/be-exp.jpg"
      alt="Exclusive Experiences"
      layout="fill"
      objectFit="cover"
      className="w-full h-full"
    />
  </section>
);

export default FullWidthImage;
