export default function tabnav(){
    const tabmenu=document.querySelectorAll('[data-tab="menu"] li')
    const tabcontent=document.querySelectorAll('[data-tab="content"] section')

    tabcontent[0].classList.add('ativo')
    tabmenu.forEach((item,index)=>{
        item.addEventListener('click', ()=>{
            callback(index)
        })
    })
    
    function callback(index){
        tabcontent.forEach((item)=>{
            item.classList.remove('ativo')
            
        })
        const direcao=tabcontent[index].dataset.anime
        tabcontent[index].classList.add('ativo', direcao)
    }

}
