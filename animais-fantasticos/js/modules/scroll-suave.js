export default function initscroll(){
    const links=document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

    function scrollsuave(event){
        event.preventDefault()
        const href=event.currentTarget.getAttribute('href')
        console.log(href)
        const section=document.querySelector(href)
        console.log(section)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    links.forEach((item)=>{
        item.addEventListener('click', scrollsuave)
    })


}

