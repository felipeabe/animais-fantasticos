export default function initanimacaoscroll(){
    const sections=document.querySelectorAll('[data-anime="scroll"]')
    sections[0].classList.add('ativo')
    function animascroll(){
        sections.forEach((section)=>{
            const sectiontop=section.getBoundingClientRect().top
            if (sectiontop<window.innerHeight*0.6){
                section.classList.add('ativo')
            }
        })
    }
    
    window.addEventListener('scroll', animascroll)
}

