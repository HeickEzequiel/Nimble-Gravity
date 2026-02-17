const axios = require('axios');
const BASE_URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

const getPositions = async ( req, res ) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/jobs/get-list`);
        res.json(data);
        return data;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getPositions;