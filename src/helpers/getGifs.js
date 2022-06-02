
export const getGifs = async (valorBusqueda, limit=5) => {

    const url = `https://media3.giphy.com/media/3o7aTnQqygA3TcukFi/giphy.gif?cid=5ba43a601o1j5pe0q8tmi1c59egoypdq3jzkv7x9wlo51ibj&rid=giphy.gif&ct=g=${valorBusqueda}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( ({id, title, images}) => {
        return {
            id: id,
            title: title,
            url: images.downsized.url
        }
    })

    return gifs;
}