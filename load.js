const page = document.querySelector("main")

const links = document.querySelectorAll(".primaryNavigation__navigationItem")

links.forEach(link => {
    link.addEventListener("click", load )
});

function load(e){
    e.preventDefault()
    const pageToLoad = e.target.dataset.page;
     fetch(pageToLoad)
            .then(response => {
                return response.text(); 
            })
            .then(html => {
                page.innerHTML = html;
            })
}


console.log(links)