const {html} = require('common-tags');
function Card({img, name, post, raised}){
    return html`
        <div class="${`card_container ${raised ? `card_container--raised` : ``}`}">
                <a ><img class = "seds_executives" src="${img}" alt="img"></a>
                <h5>${name}</h5>
                <a> ${post}</a>
         </div> 

    `;
}

module.exports =Card;




      
            // <h2 class="card_title">${title}</h2>
            // <a class="card_link" href="${link}">${linkText}</a>