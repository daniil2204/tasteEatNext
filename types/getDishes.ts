export interface getDishes {
  offset?: number
  likes?: boolean
  discount?: boolean
  type?: dishTYPE
}

export type dishTYPE = 'DINNER' | 'BREAKFAST' | 'DRINK' | 'DESSERT'
