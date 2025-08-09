import React, { useRef, useEffect, useState } from "react";
import confetti from "canvas-confetti";

interface Basket {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Balloon {
  x: number;
  y: number;
  width: number;
  height: number;
  img: HTMLImageElement;
  speed: number;
}

const BalloonGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const basketRef = useRef<Basket>({
    x: 120,
    y: 460,
    width: 60,
    height: 20,
  });
  const balloonsRef = useRef<Balloon[]>([]);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  const imagePaths = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
  ];

  const spawnBalloon = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    balloonsRef.current.push({
      x: Math.random() * (canvas.width - 40),
      y: -40,
      width: 40,
      height: 40,
      img: img,
      speed: 1.5 + Math.random() * 1.5,
    });
  };

  const drawBasket = (ctx: CanvasRenderingContext2D) => {
    const basket = basketRef.current;
    ctx.fillStyle = "brown";
    ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
  };

  const drawBalloons = (ctx: CanvasRenderingContext2D) => {
    balloonsRef.current.forEach((b) => {
      ctx.drawImage(b.img, b.x, b.y, b.width, b.height);
    });
  };

  const updateBalloons = () => {
    const basket = basketRef.current;
    balloonsRef.current.forEach((b, i) => {
      b.y += b.speed;
      if (
        b.y + b.height >= basket.y &&
        b.x + b.width >= basket.x &&
        b.x <= basket.x + basket.width
      ) {
        balloonsRef.current.splice(i, 1);
        setScore((prev) => {
          const newScore = prev + 1;
          if (newScore === 23) {
            setWin(true);
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
          } else {
            confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
          }
          return newScore;
        });
      }
      if (b.y > 500) balloonsRef.current.splice(i, 1);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBasket(ctx);
      drawBalloons(ctx);
      updateBalloons();
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    setInterval(spawnBalloon, 1000);
    gameLoop();

    // Keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") basketRef.current.x -= 20;
      if (e.key === "ArrowRight") basketRef.current.x += 20;
      basketRef.current.x = Math.max(
        0,
        Math.min(canvas.width - basketRef.current.width, basketRef.current.x)
      );
    };

    // Touch controls
    let isTouching = false;
    const handleTouchStart = () => (isTouching = true);
    const handleTouchMove = (e: TouchEvent) => {
      if (isTouching) {
        const touchX =
          e.touches[0].clientX - canvas.getBoundingClientRect().left;
        basketRef.current.x = touchX - basketRef.current.width / 2;
        basketRef.current.x = Math.max(
          0,
          Math.min(canvas.width - basketRef.current.width, basketRef.current.x)
        );
      }
    };
    const handleTouchEnd = () => (isTouching = false);

    document.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  if (showVideo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <video
          src="/video.mp4"
          controls
          className="max-w-full max-h-screen"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-200 to-yellow-100">
      <h1 className="text-2xl font-bold text-pink-600 mb-2">
        🎉 Happy Birthday! 🎂
      </h1>
      <p className="mb-2 text-sm text-gray-700">
        Tangkap semua gambar sebanyak mungkin!
      </p>

      <canvas
        ref={canvasRef}
        width={300}
        height={500}
        className="border-4 border-pink-400 rounded-lg bg-white shadow-lg"
        onClick={() => musicRef.current?.play()}
      />

      <p className="mt-2 text-lg font-semibold text-purple-700">
        Score: {score}
      </p>

      {win && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              🎊 Kamu Menang! 🎊
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Selamat, semua tertangkap!
            </p>
            <button
              onClick={() => setShowVideo(true)}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Lanjut ➡
            </button>
          </div>
        </div>
      )}

      <audio ref={musicRef} loop>
        <source
          src="https://www.bensound.com/bensound-music/bensound-happyrock.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default BalloonGame;
