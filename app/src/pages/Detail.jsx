import { useParams } from "react-router-dom";
import { getPerfumeById } from "../data/mockPerfumes";

const Detail = () => {

    const { id } = useParams()


    return (

        <main>
            <h1>Detail du parfum</h1>
            <p>ID: {id}</p>
        </main>

    );
}

export default Detail;