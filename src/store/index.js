// src/store/index.js
import { create } from "zustand"

const useMercedesStore = create((set) => ({
  // Cor do carro
  color: "#00D2BE",
  setColor: (color) => set({ color }),

  // Piloto selecionado
  driver: "hamilton",
  setDriver: (driver) => set({ driver }),

  // Vídeo da feature atual
  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () => set({
    color: "#00D2BE",
    driver: "hamilton",
    texture: "/videos/feature-1.mp4"
  }),
}))

export default useMercedesStore