import { motion } from "framer-motion";


export default function Letter() {
  return (
    <div className="">
            <div
            className="mx-auto max-w-[430px] w-full min-h-screen bg-[#a1221f] shadow-lg flex items-center justify-center"
            >
                <div className="">
                    <motion.img
                        src="/surat.png"
                        alt="Surat"
                        className=" cursor-pointer"
                        animate={{ y: [0, -10, 0] }}
                    />
                </div>
            </div>

            <div
            className="mx-auto max-w-[430px] w-full min-h-screen bg-cover bg-center bg-no-repeat shadow-lg flex flex-col items-center justify-start"
                style={{
                backgroundImage: "url('/bg-two.png')",
                }}
            >
                
            </div>
            <div
            className="mx-auto max-w-[430px] w-full min-h-screen bg-cover bg-center bg-no-repeat shadow-lg flex flex-col items-center justify-start"
                style={{
                backgroundImage: "url('/bg-three.png')",
                }}
            >
                
            </div>
    </div>
)
}
