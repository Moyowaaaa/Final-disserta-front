import axios from "axios";

const url = "http://localhost:3000";

class PopulationService{
    //get citizens

    static getCitizens() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map((citizen) => ({
                        ...citizen,
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
        }
       // Register
       static addCitizen(text) {
           return axios.post(url, {
            text,
           })
       }
}

export default PopulationService;