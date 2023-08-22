const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
    params: {
    url: 'https://www.tiktok.com/@tiktok/video/7231338487075638570',
    hd: '1'
    },
    headers: {
    'X-RapidAPI-Key': 'c2de517dc3mshc5b3aa32300709ep180a4ejsn9dfdefc00a8a',
    'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
    }
};

export const getVideo = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
