import Api from '../../Services/Newtork';
export const getAllDATA = () => {
    return Api.get().then(res=>res);
}

export const urlPersarApi = (url) => {
    console.log("type",url)    
            const params={'type':'API'};
            return Api.get(url,params).then(res=>res);
    
}