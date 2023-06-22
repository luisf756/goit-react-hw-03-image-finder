import axios from 'axios';

// export  class GalleryApi {
//   constructor() {
//     this.API_KEY = '?key=36067881-7a26dd4a3bd50794fcd12a598';
//     this.BASE_URL = 'https://pixabay.com/api/';
//     this.image_type = "image_type=photo";
//     this.orientation = "orientation=horizontal"
//     this.safesearch = "safesearch=true";
//     this.per_page = 40;
//     this.page = 1;
//     this.searchQuery = '';
//   }

//   async fetchGallery(searchQuery) {
//     const searchParams = `${this.image_type}&${this.orientation}&${this.safesearch}&page=${this.page}&per_page=${this.per_page}`;
//     const dataResponse = await axios.get(`${this.BASE_URL}${this.API_KEY}&q=${this.searchQuery}&${searchParams}`);

//     this.page += 1;
    
//     return dataResponse;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37169579-34487ccee730dfcb18e7032eb';

export const GalleryApi = async (query, page) => {
    const searchParams = new URLSearchParams({
        q: query,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 6,
    });

    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
};