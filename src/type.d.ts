export interface Data {
  data: {
    concepts: Array<{
      app_id: string
      id: string
      name: string
      value: number
    }>
  }
  id: string
  region_info: {
    bounding_box: {
      bottom_row: number
      left_col: number
      right_col: number
      top_row: number
    }
  }
  value: number
}
