
export default function accordion(){
    const dts=document.querySelectorAll('[data-anime="accordion"] dt')

    dts[0].classList.add('ativo')
    dts[0].nextElementSibling.classList.add('ativo')
    function adicionar(){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')        
    }
    dts.forEach((dt)=>{
        dt.addEventListener('click', adicionar)
    })
}

