export const getAlbums = () => ({
    type: "ALBUMS",
    async payload() {
        const res = await fetch('/albums');
        return await res.json();
    } 
});