import { companies, gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./aceternityUi/BentoGrid";
import React from "react";

const Grid = () => {
  return (
    <section id="about" >
      <div className="absolute pointer-events-none inset-0 flex items-start justify-start bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;