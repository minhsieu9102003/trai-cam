const fs = require('fs');
const axios = require('axios');

async function updateData() {
    try {
        const rawData = fs.readFileSync('C:/Users/ADMIN/Downloads/Nodejs/TraiCam/seeds/vietnam_admin_divisions.json');
        const data = JSON.parse(rawData);

        for (let i = 0; i < data.length; i++) {
            const location = `${data[i].city}, ${data[i].admin_name}`;
            console.log(`Processing: ${location}`);
            const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoibWluaHNpZXU5MTAyMDAzIiwiYSI6ImNsdmNlZ2tzejBobm4ya3BmYWM4YXZwNDEifQ.R5AhdNQCqft1gzh1dAVBmA`);

            if (response.data && response.data.features && response.data.features.length > 0) {
                data[i].lat = response.data.features[0].center[1].toString(); // Convert latitude to string
                data[i].lng = response.data.features[0].center[0].toString(); // Convert longitude to string
            } else {
                console.log(`No coordinates found for ${location}`);
            }
        }

        fs.writeFileSync('data_updatedd.json', JSON.stringify(data, null, 2));
        console.log('Data updated successfully!');
    } catch (error) {
        console.error('Failed to update data:', error);
    }
}

updateData();








