import { useState, useRef, useEffect } from "react";

export const use3DTilt = (maxTilt = 6) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
        transition: "transform 0.05s linear",
      });
    };

    const handleMouseLeave = () => {
      setStyle({
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)",
        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return { ref, style };
};
