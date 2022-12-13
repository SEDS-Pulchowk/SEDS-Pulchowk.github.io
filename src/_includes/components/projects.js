const {html} = require('common-tags');
function ProjectCard({name,img,discription}){
    return html`
        <div class = "projectcard">
            <div id="project_content">
                <h5>${name}</h5>
                <p>${discription}</p>
            </div>
            <div id="img_card">
                <a><img class = "proj_img" src="${img}" alt="${name}">
            </div>
        </div>
    `;
}
module.exports = ProjectCard;
