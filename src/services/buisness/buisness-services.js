export const getBuisness = async (data) => {
    const promise = new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => {
                resolve([{ "date": "2021-09-16T03:35:06.586Z", "buisnessName": "sugarcane transportation", "ownerName": "swapnil natu", "contactNumber": "9834170652", "vehicalNumber": "mh42s9817", "factoryAdvance": "200000", "vehicalperTonnePrice": "123", "koyataPerTonnePrice": "123" }])
            })
            .catch(error => {
                reject(error)
            });
    });
    return promise;
}

export const getFactory = async (data) => {
    const promise = new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => {
                resolve([
                    {
                        "name": "Anuraj Sugars Ltd., Yavat, Maharashtra",
                        "value": "Anuraj Sugars Ltd., Yavat, Maharashtra",
                        "id": 1
                    },
                    {
                        "name": "Baramati Agro Ltd. (Unit - 1), Indapur, Maharashtra",
                        "value": "Baramati Agro Ltd. (Unit - 1), Indapur, Maharashtra",
                        "id": 2
                    },
                    {
                        "name": "Bhima Sahakari Sakhar Karkhana Ltd., Patas, Daund, Maharashtra",
                        "value": "Bhima Sahakari Sakhar Karkhana Ltd., Patas, Daund, Maharashtra",
                        "id": 3
                    },
                    {
                        "name": "Bhimashankar Sahakari Sakhar Karkhana Ltd., Ambegaon, Maharashtra",
                        "value": "Bhimashankar Sahakari Sakhar Karkhana Ltd., Ambegaon, Maharashtra",
                        "id": 4
                    },
                    {
                        "name": "Shri Chhatrapati Sahakari Sakhar Karkhana Ltd., Indapur, Maharashtra",
                        "value": "Shri Chhatrapati Sahakari Sakhar Karkhana Ltd., Indapur, Maharashtra",
                        "id": 5
                    },
                    {
                        "name": "Daund Sugar Pvt. Ltd., Daund, Maharashtra",
                        "value": "Daund Sugar Pvt. Ltd., Daund, Maharashtra",
                        "id": 6
                    },
                    {
                        "name": "Karmyogi Shankarraoji Patil S.S.K. Ltd., Indapur, Maharashtra",
                        "value": "Karmyogi Shankarraoji Patil S.S.K. Ltd., Indapur, Maharashtra",
                        "id": 7
                    },
                    {
                        "name": "The Malegaon Sahakari Sakhar Karkhana Ltd., Baramati, Maharashtra",
                        "value": "The Malegaon Sahakari Sakhar Karkhana Ltd., Baramati, Maharashtra",
                        "id": 8
                    },
                    {
                        "name": "Nira Bhima Sahakari Sakhar Karkhana Ltd. Shahajinagar, Tal -Indapur, Dist- Pune, Indapur, Maharashtra",
                        "value": "Nira Bhima Sahakari Sakhar Karkhana Ltd. Shahajinagar, Tal -Indapur, Dist- Pune, Indapur, Maharashtra",
                        "id": 9
                    },
                    {
                        "name": "Rajgad Sahakari Sakhar Karkhana Ltd., Bhor, Maharashtra",
                        "value": "Rajgad Sahakari Sakhar Karkhana Ltd., Bhor, Maharashtra",
                        "id": 10
                    },
                    {
                        "name": "Raosahebdada Pawar Ghodganga Sahakari Sakhar Karkhana Ltd., Shirur, Maharashtra",
                        "value": "Raosahebdada Pawar Ghodganga Sahakari Sakhar Karkhana Ltd., Shirur, Maharashtra",
                        "id": 11
                    },
                    {
                        "name": "Shri Sant Tukaram Sahakari Sakhar Karkhana Ltd., Pune, Maharashtra",
                        "value": "Shri Sant Tukaram Sahakari Sakhar Karkhana Ltd., Pune, Maharashtra",
                        "id": 12
                    },
                    {
                        "name": "Shreenath Mhaskoba Sakhar Karkhana Ltd., Patethan, Maharashtra",
                        "value": "Shreenath Mhaskoba Sakhar Karkhana Ltd., Patethan, Maharashtra",
                        "id": 13
                    },
                    {
                        "name": "Shri Someshwar Sahakari Sakhar Karkhana Ltd., Baramati, Maharashtra",
                        "value": "Shri Someshwar Sahakari Sakhar Karkhana Ltd., Baramati, Maharashtra",
                        "id": 14
                    },
                    {
                        "name": "Shri Vighnahar Sahakari Sakhar Karkhana Ltd., Junnar, Maharashtra",
                        "value": "Shri Vighnahar Sahakari Sakhar Karkhana Ltd., Junnar, Maharashtra",
                        "id": 15
                    },
                    {
                        "name": "Venkateshkrupa Sugar Mills Ltd., Shirur, Maharashtra",
                        "value": "Venkateshkrupa Sugar Mills Ltd., Shirur, Maharashtra",
                        "id": 16
                    },
                    {
                        "name": "Yashwant Sahakari Sakhar Karkhana Ltd., Haveli, Maharashtra",
                        "value": "Yashwant Sahakari Sakhar Karkhana Ltd., Haveli, Maharashtra",
                        "id": 17
                    },
                    {
                        "name": "Bhuleshwar Sugars Works Ltd, Rajuri (Rise), Maharashtra",
                        "value": "Bhuleshwar Sugars Works Ltd, Rajuri (Rise), Maharashtra",
                        "id": 18
                    },
                    {
                        "name": "Parag Agro Foods And Allied Products Pvt. Ltd., Shirur, Maharashtra",
                        "value": "Parag Agro Foods And Allied Products Pvt. Ltd., Shirur, Maharashtra",
                        "id": 19
                    },
                    {
                        "name": "Haripriya Sugar and Agro Product Pvt.Ltd.,, Pune, Maharashtra",
                        "value": "Haripriya Sugar and Agro Product Pvt.Ltd.,, Pune, Maharashtra",
                        "id": 20
                    },
                    {
                        "name": "Rajghad Agro Pvt Ltd., (Khandsari and Jaggery), Pune, Maharashtra",
                        "value": "Rajghad Agro Pvt Ltd., (Khandsari and Jaggery), Pune, Maharashtra",
                        "id": 21
                    },
                    {
                        "name": "Sugarcane Master Jaggery and Allied Product Pvt.Ltd., (Khandsari and Jaggery), Pune, Maharashtra",
                        "value": "Sugarcane Master Jaggery and Allied Product Pvt.Ltd., (Khandsari and Jaggery), Pune, Maharashtra",
                        "id": 22
                    }
                ])
            })
            .catch(error => {
                reject(error)
            });
    });
    return promise;
}


export const getVillage = async (data) => {
    const promise = new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => {
                resolve([{"id":1,"name":"Alegaon","value":"Alegaon"},{"id":2,"name":"Amoni Mal","value":"Amoni Mal"},{"id":3,"name":"Betwadi","value":"Betwadi"},{"id":4,"name":"Bhandgaon","value":"Bhandgaon"},{"id":5,"name":"Bharatgoan","value":"Bharatgoan"},{"id":6,"name":"Boratewadi","value":"Boratewadi"},{"id":7,"name":"Boriaindi","value":"Boriaindi"},{"id":8,"name":"Boribel","value":"Boribel"},{"id":9,"name":"Boribhadak","value":"Boribhadak"},{"id":10,"name":"Boripardhi","value":"Boripardhi"},{"id":11,"name":"Chincholi","value":"Chincholi"},{"id":12,"name":"Dahitane","value":"Dahitane"},{"id":13,"name":"Dalimb","value":"Dalimb"},{"id":14,"name":"Dapodi","value":"Dapodi"},{"id":15,"name":"Daund","value":"Daund"},{"id":16,"name":"Delvadi","value":"Delvadi"},{"id":17,"name":"Deshmukh Mala","value":"Deshmukh Mala"},{"id":18,"name":"Deulgaon Gada","value":"Deulgaon Gada"},{"id":19,"name":"Deulgaon Raje","value":"Deulgaon Raje"},{"id":20,"name":"Devkarwadi","value":"Devkarwadi"},{"id":21,"name":"Dhumalicha Mala","value":"Dhumalicha Mala"},{"id":22,"name":"Ekeriwadi","value":"Ekeriwadi"},{"id":23,"name":"Gadewadi","value":"Gadewadi"},{"id":24,"name":"Galandwadi","value":"Galandwadi"},{"id":25,"name":"Ganesh Road","value":"Ganesh Road"},{"id":26,"name":"Gar","value":"Gar"},{"id":27,"name":"Gawadebagade Wasti","value":"Gawadebagade Wasti"},{"id":28,"name":"Girim","value":"Girim"},{"id":29,"name":"Gopalwadi","value":"Gopalwadi"},{"id":30,"name":"Handalwadi","value":"Handalwadi"},{"id":31,"name":"Hatwalan","value":"Hatwalan"},{"id":32,"name":"Hingani Berdi","value":"Hingani Berdi"},{"id":33,"name":"Hinganigada","value":"Hinganigada"},{"id":34,"name":"Jawje Buwachiwadi","value":"Jawje Buwachiwadi"},{"id":35,"name":"Jiregaon","value":"Jiregaon"},{"id":36,"name":"Kadamwasti","value":"Kadamwasti"},{"id":37,"name":"Kadethanwadi","value":"Kadethanwadi"},{"id":38,"name":"Kalewadi (nv)","value":"Kalewadi (nv)"},{"id":39,"name":"Kamatwadi","value":"Kamatwadi"},{"id":40,"name":"Kangaon","value":"Kangaon"},{"id":41,"name":"Kasurdi","value":"Kasurdi"},{"id":42,"name":"Kauthadi","value":"Kauthadi"},{"id":43,"name":"Kedgaon","value":"Kedgaon"},{"id":44,"name":"Kedgaon Station","value":"Kedgaon Station"},{"id":45,"name":"Khadaki","value":"Khadaki"},{"id":46,"name":"Khamgaon","value":"Khamgaon"},{"id":47,"name":"Khanote","value":"Khanote"},{"id":48,"name":"Khopodi","value":"Khopodi"},{"id":49,"name":"Khor","value":"Khor"},{"id":50,"name":"Khorodi","value":"Khorodi"},{"id":51,"name":"Khutbav","value":"Khutbav"},{"id":52,"name":"Koregaon Bhiwar","value":"Koregaon Bhiwar"},{"id":53,"name":"Kurkumbh","value":"Kurkumbh"},{"id":54,"name":"Kusegaon","value":"Kusegaon"},{"id":55,"name":"Ladkatwadi","value":"Ladkatwadi"},{"id":56,"name":"Lingali","value":"Lingali"},{"id":57,"name":"Lonarwadi","value":"Lonarwadi"},{"id":58,"name":"Maladpatas","value":"Maladpatas"},{"id":59,"name":"Malthan","value":"Malthan"},{"id":60,"name":"Malwadi","value":"Malwadi"},{"id":61,"name":"Masanarwadi","value":"Masanarwadi"},{"id":62,"name":"Mergalwadi","value":"Mergalwadi"},{"id":63,"name":"Mirwadi","value":"Mirwadi"},{"id":64,"name":"Nandadevi","value":"Nandadevi"},{"id":65,"name":"Nandur","value":"Nandur"},{"id":66,"name":"Nangaon","value":"Nangaon"},{"id":67,"name":"Nanwij","value":"Nanwij"},{"id":68,"name":"Nathachiwadi","value":"Nathachiwadi"},{"id":69,"name":"Navingar","value":"Navingar"},{"id":70,"name":"Naygaon","value":"Naygaon"},{"id":71,"name":"Nimbalkar Vasti","value":"Nimbalkar Vasti"},{"id":72,"name":"Padvi","value":"Padvi"},{"id":73,"name":"Pandharewadi","value":"Pandharewadi"},{"id":74,"name":"Panwali","value":"Panwali"},{"id":75,"name":"Pargaon","value":"Pargaon"},{"id":76,"name":"Patas","value":"Patas"},{"id":77,"name":"Patethan","value":"Patethan"},{"id":78,"name":"Pedgaon","value":"Pedgaon"},{"id":79,"name":"Pilanwadi","value":"Pilanwadi"},{"id":80,"name":"Pimpalachiwadi","value":"Pimpalachiwadi"},{"id":81,"name":"Pimpalgaon","value":"Pimpalgaon"},{"id":82,"name":"Rahu","value":"Rahu"},{"id":83,"name":"Rajegaon","value":"Rajegaon"},{"id":84,"name":"Ravangaon","value":"Ravangaon"},{"id":85,"name":"Roti","value":"Roti"},{"id":86,"name":"Sahajpurwadi","value":"Sahajpurwadi"},{"id":87,"name":"Shirapur","value":"Shirapur"},{"id":88,"name":"Sonwadi","value":"Sonwadi"},{"id":89,"name":"Takali","value":"Takali"},{"id":90,"name":"Tambewadi","value":"Tambewadi"},{"id":91,"name":"Tamhanwadi","value":"Tamhanwadi"},{"id":92,"name":"Telewadi","value":"Telewadi"},{"id":93,"name":"Undawadi","value":"Undawadi"},{"id":94,"name":"Vadgaon Bande","value":"Vadgaon Bande"},{"id":95,"name":"Valki","value":"Valki"},{"id":96,"name":"Virobawadi","value":"Virobawadi"},{"id":97,"name":"Wadgaon Darekar","value":"Wadgaon Darekar"},{"id":98,"name":"Wakhari","value":"Wakhari"},{"id":99,"name":"Warwand","value":"Warwand"},{"id":100,"name":"Wasunde","value":"Wasunde"},{"id":101,"name":"Watluj","value":"Watluj"},{"id":102,"name":"Yawat","value":"Yawat"},{"id":103,"name":"Yawat Station","value":"Yawat Station"}])
            })
            .catch(error => {
                reject(error)
            });
    });
    return promise;
}


export const getBuisnessPageData = (data, successHandler, errorHandler) => {
    const buisnessListPromise = getBuisness(data);
    const factoryListPromise = getFactory(data);
    const villageListPromise = getVillage(data);
    return Promise.all([
        buisnessListPromise.catch(error => {
            console.log(error);
            return []
        }),
        factoryListPromise.catch(error => {
            console.log(error);
            return []
        }),
        villageListPromise.catch(error => {
            console.log(error);
            return []
        }),
    ]).then(values => {
        return {
            buisnessList: values[0],
            factoryList: values[1],
            villageList: values[2]
        }
    })
}