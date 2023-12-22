export function httpsOrNo(url:string | undefined) {
    
    if(!url) return false;
    
    const splitUrl = url.split(':');
    const isHttp = splitUrl[0] === 'https'
    
    return !isHttp;    
}
