import axios from 'axios';

const API_URL = 'http://localhost:7000/api/events';

export default {
    getEvents() {
        return axios.get(API_URL);
    },
    createEvent(event) {
        return axios.post(API_URL, event, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
    },
    getTleInfo(satelliteName) {
        return axios.get(`https://celestrak.org/NORAD/elements/gp.php?NAME=${satelliteName}`);
    }
};
