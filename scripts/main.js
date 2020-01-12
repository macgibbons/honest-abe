import { getPoliticians } from "./politicians/politicianProvider.js";
import PoliticianList from "./politicians/politicianList.js";
import { getCorporations, useCorporations } from "./corporations/corporationProvider.js";
import CorporationList from "./corporations/corporationList.js";

getPoliticians()
    .then(PoliticianList)
getCorporations()
    .then(CorporationList)
    
    