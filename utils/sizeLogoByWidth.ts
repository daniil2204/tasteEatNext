export const sizeLogoByWidth = (width: number) => {
  const size =
    width > 1200
      ? { width: 378, height: 188 }
      : width > 900
        ? { width: 280, height: 118 }
        : width > 520
          ? { width: 240, height: 98 }
          : { width: 160, height: 68 }
  return size
}
