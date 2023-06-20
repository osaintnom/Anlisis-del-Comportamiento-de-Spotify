const observer=new InteractionObserver((entries) =>{
    entries.foreach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            EventSource.target,classList.remove('show');
        }
    } );
});
const hiddenElements = document.querySelectorAll('hidden');
hiddenElements.forEach((el) => observer.addEventListener(el));
