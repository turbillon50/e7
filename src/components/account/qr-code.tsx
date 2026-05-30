"use client";

import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export function QrCode({ value, size = 120 }: { value: string; size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 1,
      color: { dark: "#131313", light: "#e5e2e1" },
    }).catch(() => {});
  }, [value, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="rounded"
      aria-label="Código QR de verificación del certificado"
    />
  );
}
