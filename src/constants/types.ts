export interface CategoryItem {
  id: number
  title: string
  description: string
  image_url: string
}
export interface Category {
  title: string
  items: CategoryItem[]
}
export interface Categories {
  categories: Category[]
}
