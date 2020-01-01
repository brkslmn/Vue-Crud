import axios from 'axios';

const url = 'api/iletiler/';

class iletiService{
    static getIletiler() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(ileti => ({
                        ...ileti,
                        createdAt: new Date(ileti.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }
    
    //ileti Ekle (POST)
    static insertIleti(text) {
        return axios.post(url,{
            text: text
        });
    }

    //ileti Sil (DELETE)
    static deleteIleti(id) {
        return axios.delete(`${url}${id}`);
    
    }
}

export default iletiService;