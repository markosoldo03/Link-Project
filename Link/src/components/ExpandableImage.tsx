import { useState, useEffect, useRef, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ExpandableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ExpandableImage({ src, alt = "", className = "" }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [translateStart, setTranslateStart] = useState({ x: 0, y: 0 });

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // disable background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) {
      setZoom(1);
      setTranslate({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

  // ✅ working wheel zoom with non-passive listener
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (!imgRef.current || !containerRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;

    setZoom((prevZoom) => {
      const newZoom = Math.min(Math.max(prevZoom * zoomFactor, 1), 1.65);
      const scaleChange = newZoom / prevZoom;
      if (newZoom === prevZoom) return prevZoom;

      setTranslate((prev) => {
        if (zoomFactor > 1) {
          return {
            x: prev.x - (offsetX - rect.width / 2) * (scaleChange - 1),
            y: prev.y - (offsetY - rect.height / 2) * (scaleChange - 1),
          };
        } else {
          const nx = prev.x * scaleChange * 0.8;
          const ny = prev.y * scaleChange * 0.8;
          if (newZoom <= 1.02) return { x: 0, y: 0 };
          return { x: nx, y: ny };
        }
      });

      return newZoom;
    });
  }, []);

  // 🧠 attach listener *after element exists* (use timeout to ensure mount)
  useEffect(() => {
    if (!isOpen) return;
    const el = containerRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }, 0);

    return () => {
      clearTimeout(timer);
      el?.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen, handleWheel]);

  // dragging (panning)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setTranslateStart({ ...translate });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !imgRef.current || !containerRef.current) return;
    e.preventDefault();

    const container = containerRef.current.getBoundingClientRect();
    const img = imgRef.current.getBoundingClientRect();

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    const maxX = (img.width * zoom - container.width) / 2;
    const maxY = (img.height * zoom - container.height) / 2;

    setTranslate({
      x: clamp(translateStart.x + dx, -maxX, maxX),
      y: clamp(translateStart.y + dy, -maxY, maxY),
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) setIsOpen(false);
  };

  return (
    <>
      {/* Thumbnail */}
      <img
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
        className={`cursor-zoom-in transition-transform duration-300 hover:scale-101 ${className}`}
      />

      {isOpen && (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center backdrop-blur-sm overflow-hidden select-none"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-[10000] text-white hover:text-gray-300 cursor-pointer transition drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <img
            ref={imgRef}
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            style={{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
              transition: isDragging ? "none" : "transform 0.1s ease-out",
              cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-out",
            }}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl select-none"
          />
        </div>
      )}
    </>
  );
}
