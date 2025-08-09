"use client";

import satu from "@/assets/1.png";
import dua from "@/assets/2.png";
import tiga from "@/assets/3.png";
import { motion } from "framer-motion";

export default function DressCode() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center cursor-love">
      {/* Container Mobile */}
      <div className="w-[405px] h-[667px] bg-amber-50 overflow-hidden flex flex-col items-center justify-center">
        <div
          style={{
            backgroundImage: "url('/card-dua.png')",
          }}
          className="w-[405px] h-[667px] bg-amber-50 bg-center bg-no-repeat rounded-xl overflow-hidden flex flex-col items-center justify-center"
        >
          <div className="mt-16">
            {[
              {
                img: satu,
                text: (
                  <>
                    Photobooth <br /> @porta.place
                  </>
                ),
                reverse: false,
              },
              {
                img: dua,
                text: (
                  <>
                    Birthday cake <br /> @delibakes
                  </>
                ),
                reverse: true,
              },
              {
                img: tiga,
                text: (
                  <>
                    Birthday gift <br /> @sugu
                  </>
                ),
                reverse: false,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className={`flex items-center ${
                  item.reverse ? "flex-row-reverse text-right" : ""
                }`}
              >
                <img src={item.img} alt="icon" className="w-28 hover:rotate-2" />
                <p className="font-gar text-[#8292e7] text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="">
          
        </div>
      </div>
    </div>
  );
}
