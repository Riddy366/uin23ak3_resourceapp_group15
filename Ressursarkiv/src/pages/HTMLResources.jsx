import { resources } from '../assets/ressurser';

export default function HTMLResources(){

    const ResourcesHTML = resources.filter(resource => resource.category === "HTML");
    console.log("html", ResourcesHTML)

    const ResourcesCSS = resources.filter(resource => resource.category === "CSS");
    console.log("css", ResourcesCSS)
}