export function deleteSpan(content){
    try {
        let phone = content
        const start = content.indexOf('+')
        phone = phone.substring(start)
        const end = phone.indexOf('<')
        phone = phone.substring(0, end)
        phone = phone.split(' ').join('').split('-').join('').split('(').join('').split(')').join('')
        localStorage.setItem('tel', phone)
    } catch (e){
        console.log(e)
        localStorage.setItem('tel', '+78122198586')
    }

}