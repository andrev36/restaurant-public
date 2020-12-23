export interface Item {
 id: number
 name: string
 type: string
 imagePath: string
}

export interface Order {
 items: Item[]
 orderedFood: []
}
