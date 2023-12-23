export interface sizeInterface {
  width: number
  height: number
}

export interface sideBarInterface {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export type navListType = {
  title: string
  href: string
}
