import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import { useImages } from './hooks/useImage';
import Header from './components/Header';
import { ImageGallery } from './components/ImageGallery';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: images, hasNextPage, isFetchingNextPage } = useImages();

  const filteredImages = images?.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const noResults = filteredImages?.length === 0 && searchTerm !== '';

  return (
    <>
      <div className="bg-[var(--white)] font-(family-name:--font-family) w-full">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>

      <ImageGallery
        searchTerm={searchTerm}
        filteredImages={filteredImages ?? []}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />

      {noResults && <p>No se encontraron imágenes para "{searchTerm}"</p>}

      <Footer />
    </>
  );
}

export default App;
