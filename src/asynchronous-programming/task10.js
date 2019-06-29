/* eslint-disable no-return-await */
const task10 = () => {
  class Musician {
    constructor(albumUrl) {
      this.albums = albumUrl;
    }

    async getAlbums() {
      const response = await fetch(this.albums);
      return await response.json();
    }
  }
  const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
  musician.getAlbums().then(albums => console.log(albums));
};

export default task10;
