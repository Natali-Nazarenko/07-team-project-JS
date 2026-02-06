import { getArtists } from "./api-artists";
import { renderArtistsGallery } from "./render-artists";

try {
    const data = await getArtists();
    renderArtistsGallery(data.artists);
} catch(error) {
    console.log(error);
}