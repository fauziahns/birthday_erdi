import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function Main() {
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      y: -200,
      opacity: 0
    }).then(() => {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
      }).then(() => {
        controls.start({
          y: [0, -10, 0],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }
        });
      });
    });
  }, [controls]);

  const handleClick = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      navigate("/letter");
    }, 1000);
  };

  return (
    <div
      className="mx-auto max-w-[430px] w-full min-h-screen bg-cover bg-center bg-no-repeat shadow-lg flex flex-col items-center justify-start"
        style={{
          backgroundImage: "url('/bg-one.png')",
        }}
    >
      <div className="pt-6 text-center text-white">
        <div className="border border-yellow-400 text-xs rounded-full px-3 py-1 inline-block mb-2">
          10 Agustus 2025
        </div>

        <div className="flex flex-col text-yellow-300 text-6xl leading-tight">
          <h1>Happy</h1>
          <h1 className="font-vibes">Birthday</h1>
        </div>
      </div>

      <motion.img
        src="/mini.png"
        alt="Mini"
        className="w-[230px] z-10 cursor-pointer"
        animate={controls}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleClick}
      />
    </div>
  );
}
