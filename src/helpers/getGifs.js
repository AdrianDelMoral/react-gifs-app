export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=OjnfPNnYs6Ps6Mk2GBmmWL6XbR9fi1Fk&limit=5&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({// Gifs que mostraré
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}