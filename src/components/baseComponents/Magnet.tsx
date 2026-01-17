import { useRef, useEffect, ReactNode, HTMLAttributes } from "react";
import gsap from "gsap";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 120,       // magnetic zone around element
  strength = 6,        // how strongly it moves
  className = "",
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const insideX = Math.abs(dx) < rect.width / 2 + padding;
      const insideY = Math.abs(dy) < rect.height / 2 + padding;

      if (insideX && insideY) {
        // attract smoothly toward cursor
        gsap.to(el, {
          x: dx / strength,
          y: dy / strength,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        // return to normal
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={`inline-block will-change-transform ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Magnet;
