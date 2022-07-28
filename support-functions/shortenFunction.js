
module.exports = (id) => {
    
    const hashCode = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    id = id.toString();
    for(var i=0;i<(7-id.length);i++){
        id = '0'+id;
    }
    
    id = parseInt(id);
    var shortURL = '';
    var i = 0;
    while(i<7){
        shortURL = hashCode[id%62]+shortURL;
        id = Math.floor(id/62);
        i++;
    }

    return(shortURL);
}