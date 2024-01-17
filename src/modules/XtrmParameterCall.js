export default (key) =>{
    if(window.xtrmParameters){
        return key? window.xtrmParameters[key] : window.xtrmParameters;
    }else{
        return undefined;
    }
}