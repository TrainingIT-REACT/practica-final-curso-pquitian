export const getSongs = () => ({
    type: "SONGS",
    async payload() {
        const res = await fetch('/songs');
        return await res.json();
    } 
});