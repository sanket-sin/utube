import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCWi-ykDyXxqTRwR2T0t_b9iOz-Qf-K2MY'
    }
});