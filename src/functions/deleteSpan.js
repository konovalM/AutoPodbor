export function deleteSpan(content){
    try{
        localStorage.setItem('tel', content.match(/[+\d]/g).join(''))
    } catch (e){
        localStorage.setItem('tel', '+78122198586')
    }
}