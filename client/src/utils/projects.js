export function getProjects(){
    return fetch('/getProjects')
    .then(data=>data.json)
}