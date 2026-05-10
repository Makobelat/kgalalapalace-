import React, { useEffect, useRef } from 'react';

interface ConfettiProps {
  active: boolean;
  onComplete?: () => void;
}

export default function Confetti({ active, onComplete }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const pieces: Array<any> = [];
    const colors = ['#F87171', '#F97316', '#F59E0B', '#10B981', '#60A5FA', '#A78BFA'];

    const createPiece = () => ({
      x: Math.random() * width,
      y: Math.random() * -height * 0.2,
      size: 6 + Math.random() * 8,
      gravity: 0.3 + Math.random() * 0.6,
      rotation: Math.random() * 360,
      speedX: -4 + Math.random() * 8,
      speedY: 2 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    for (let i = 0; i < 120; i++) pieces.push(createPiece());

    let elapsed = 0;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize);

    const render = (t: number) => {
      elapsed += 16;
      ctx.clearRect(0, 0, width, height);

      for (const p of pieces) {
        p.x += p.speedX;
        p.y += p.speedY + p.gravity * 0.5;
        p.rotation += p.speedX * 2;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }

      if (elapsed < 3000) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        // finish
        cancelAnimationFrame(rafRef.current || 0);
        window.removeEventListener('resize', onResize);
        if (onComplete) onComplete();
      }
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden
    />
  );
}
