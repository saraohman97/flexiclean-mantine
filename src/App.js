import './App.css';
import { Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import HomeView from './views/HomeView';
import Footer from './components/Footer'
import ContactUsView from './views/ContactUsView'
import DocumentationView from './views/DocumentationView'
import InstructionsView from './views/InstructionsView'
import GranulatView from './views/products/GranulatView'
import DagvattenView from './views/products/DagvattenView';
import OtherProductsView from './views/products/OtherProductsView'
import OrderView from './views/OrderView';
import ProductsView from './views/products/ProductsView';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <MantineProvider
        withGlobalStyles withNormalizeCSS
        theme={{
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1275,
            xl: 1800,
          },
          headings: {
            fontWeight: 400,
            fontFamily: 'Zilla Slab, serif;',
          },
          fontFamily: 'Zilla Slab, serif;',
        }}
      >
        <Navbar />
        
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/kontakta-oss' element={<ContactUsView />} />
          <Route path='/dokumentation' element={<DocumentationView />} />
          <Route path='/instruktioner' element={<InstructionsView />} />
          <Route path='/produkter/dagvatten' element={<DagvattenView />} />
          <Route path='/produkter/granulat' element={<GranulatView />} />
          <Route path='/produkter/annat' element={<OtherProductsView />} />
          <Route path='/order' element={<OrderView />} />
          <Route path='/produkter' element={<ProductsView />} />
        </Routes>

        <Footer />
      </MantineProvider>

    </div>
  );
}

export default App;
