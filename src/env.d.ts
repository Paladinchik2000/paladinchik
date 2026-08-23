declare global {
  interface Window {
    /** Tears down the WebGL background; set by PrismaticShaderBackground. */
    __prismaticShaderCleanup?: () => void;
  }
}

export {};
