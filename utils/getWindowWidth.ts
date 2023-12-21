export const getWindowWidth = () => {
  const { innerWidth } =
    typeof window !== 'undefined' ? window : { innerWidth: 0 }
  return { innerWidth }
}
