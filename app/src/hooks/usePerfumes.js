import { useState, useEffect } from 'react';
import { mockPerfumes } from '../data/mockPerfumes';

export const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);
    // indique si les données sont en cours de chargement.
    // Commence à true, et passe à false quand les parfums sont prêts.
    const [loading, setLoading] = useState(true);
// l'effet pour recupeer les données une seule fois
    useEffect(() => {
        // Fonction async pour simuler un appel API
        const fetchPerfumes = async () => {
            // attend pourr Simule un délai réseau de 500ms
            await new Promise(resolve => setTimeout(resolve, 500));
            setPerfumes(mockPerfumes);// met les données dans l'etat
            setLoading(false); // indique que le chargement est terminée
        };

        fetchPerfumes();
    }, []);

    return { perfumes, loading };
};




