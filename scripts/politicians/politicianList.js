import { usePoliticians } from "./politicianProvider.js";
import Politician from "./politician.js";

const contentTarget = document.querySelector(".politician__container")

const PoliticianList = () => {
    const politicians = usePoliticians()

    const render = () => {
        contentTarget.innerHTML = `
        <h1>Politicians</h1>
        ${
            politicians.map(
                politician => {
                    const html = Politician(politician)
                    return html
                }
            ).join("")

        } 
        `
    }
    render()
}

export default PoliticianList
