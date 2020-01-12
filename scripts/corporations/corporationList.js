import { useCorporations } from "./corporationProvider.js";
import Corporation from "./corporation.js";

const contentTarget = document.querySelector(".corporation__container")

const CorporationList = () => {
    const corporations = useCorporations()

    const render = () => {
        contentTarget.innerHTML = `
        
        <h1>Corporations</h1>
        <div class="corporations">
        ${
            corporations.map(
                corporation => {
                    const html = Corporation(corporation)
                    return html
                }
            ).join("")

        } 
        </div>
        `
    }
    render()
}

export default CorporationList