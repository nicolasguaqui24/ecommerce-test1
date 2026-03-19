import { useState } from 'react'

//Import componentes

import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import Grid from './components/grid/grid'
import Modal from './components/modal/modal'
import Footer from './components/footer/footer'
import { ToastContainer } from './components/toast/toast'
import OfferBanner  from './components/offer-banner/offer-banner'

// Import hooks 
import { useProducts } from './hooks/use-product' // fetch API , Paginación
import { useCart } from './hooks/use-cart'        //carrito en localStorage
import { useToast } from './hooks/use-toast'      //toast carrito

import type { Product } from './hooks/use-product'

/**Componente principal, conecta los hooks con los componentes,
 * Como tambien layout general de la pagina 
*/
function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const { pageProducts, currentPage, totalPages, loading, error, goNext, goPrev } = useProducts(searchQuery)

  const { totalItems, addToCart } = useCart()
  const { toasts, showToast, removeToast } = useToast()

  function handleQuickView(product: Product) {
    setSelectedProduct(product)
  }

  function handleAddToCart(product: Product) {
    addToCart(product) // agrega al carrito
    showToast(product) // agrega un toast al array en useToast
  }

  return (
    <div>
      <Header totalItems={totalItems} onSearch={setSearchQuery} />
      <Navbar />
      <Banner />
      <main>
        <Grid
          products={pageProducts}
          currentPage={currentPage}
          totalPages={totalPages}
          loading={loading}
          error={error}
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
          onNext={goNext}
          onPrev={goPrev}
        />
         <OfferBanner/>
      </main>
     
      
      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <Footer />

    </div>
  )
}

export default App