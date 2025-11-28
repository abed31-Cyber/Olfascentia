// src/pages/Home.jsx

import { usePerfumes } from '../hooks/usePerfumes';

const Home = () => {

    // Utilise le hook usePerfumes pour récupérer { perfumes, loading }
    const { perfumes, loading } = usePerfumes();
    // Si loading est true, afficher Chargement...
    if (loading) {
        return <p>Chargement...</p>
    }

    return (
        <main>
            <h1>Olfascentia</h1>
            <p> {perfumes.length} parfums disponibles </p> 
        </main>
    );
};

export default Home;