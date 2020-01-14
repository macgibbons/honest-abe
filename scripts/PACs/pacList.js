import { usePacs } from "./pacProvider.js";
import Pac from "./pac.js";


const contentTarget = document.querySelector(".pac__container")

const PacList = () => {
    const pacs = usePacs()

    const render = () => {
        contentTarget.innerHTML = `
        
        <h1>PACs</h1>
        <div class="pacs">
        ${
            pacs.map(
                pac => {
                    const html = Pac(pac)
                    return html
                }
            ).join("")

        } 
        </div>
        `
    }
    render()
}

export default PacList
