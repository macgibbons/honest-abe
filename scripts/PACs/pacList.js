import { usePacs } from "./pacProvider.js";
import Pac from "./pac.js";
import { useCorporations } from "../corporations/corporationProvider.js";
import { useCorprateDonations } from "../donations/corprateDonationsProvider.js";


const contentTarget = document.querySelector(".pac__container")

const PacList = () => {
    const pacs = usePacs()
    const donors = useCorporations() 
    const corpDon = useCorprateDonations()
    

    const render = () => {
        contentTarget.innerHTML = `
        
        <h1>PACs</h1>
        <div class="pacs">
        ${
            pacs.map(
                pac => {
                    const corprateDonationRelationship = corpDon.filter(cr => cr.pacId === pac.id)

                    const donations = corprateDonationRelationship
                    
                  
                    const foundCorporationArray = corprateDonationRelationship.map(
                        cr => {
                            const foundCorporation = donors.find(donor => donor.id === cr.corporationId)
                            
                            let foundCorporationObject = {
                                name: foundCorporation.company,
                                amount: cr.amount
                            }

                            return foundCorporationObject

                        }
                    )

                     

                    const html = Pac(pac, foundCorporationArray,)
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
