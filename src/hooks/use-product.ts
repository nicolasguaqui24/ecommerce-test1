import { useState, useEffect } from 'react'

//estructura de datos, para producto que viene de la API.
export type Product = {
  id: number
  title: string
  price: number
  category: string
  image: string
}
//valor de productos que se muestran por paginacion
const ITEMS_PER_PAGE = 6

export function useProducts(searchQuery: string) {
  const [allProducts, setAllProducts] = useState<Product[]>([])
// Página arranca en 0
  const [currentPage, setCurrentPage] = useState(0)

  // Se monta el componente en "true", si la API responde bien loading: false (se muestran productos)
  //

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // Se ejecuta una sola vez, [] = no repetir
// Si no hay articulo en el carrito guardado, empieza vacio (0)
  //Si falla la carga de api, entra en el catch y envia menasje de error

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data: Product[]) => {
        setAllProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  // Filtra la lista completa según lo que escribe el usuario

  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  const pageProducts = filtered.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  )
  // Avanza una página sin pasarse del máximo
  const goNext = () => setCurrentPage(p => Math.min(p + 1, totalPages - 1))
    
  // Retrocede una página sin bajar de 0
  const goPrev = () => setCurrentPage(p => Math.max(p - 1, 0))
  
  //Resetea a pagina 1, cuando el usuario escribe en el buscador, es decir evita el filtrado
    useEffect(() => {
    setCurrentPage(0)
  }, [searchQuery])

  return {
    pageProducts,
    currentPage,
    totalPages,
    loading,
    error,
    goNext,
    goPrev,
  }
}