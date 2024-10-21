import { useQuery } from '@tanstack/react-query'
import { req } from './req'

interface DogData {
  image: Image
  status_code: number
  title: string
  url: string
}
interface Image {
  avif: string
  jpg: string
  jxl: string
  webp: string
}

const getDog = (code: string) => {
  return req.get<never, DogData>(`/api/${code}.json`)
}

export const useDog = (code: string) => {
  return useQuery({ queryKey: ['dog'], queryFn: () => getDog(code) })
}
