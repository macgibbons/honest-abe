import { getPoliticians } from "./politicians/politicianProvider.js";
import PoliticianList from "./politicians/politicianList.js";
import { getCorporations, useCorporations } from "./corporations/corporationProvider.js";
import CorporationList from "./corporations/corporationList.js";
import { getPacs } from "./PACs/pacProvider.js";
import PacList from "./PACs/pacList.js";
import { getCorprateDonations } from "./donations/corprateDonationsProvider.js";

getPoliticians()
    .then(PoliticianList)
getCorporations()
    .then(CorporationList)
getPacs()
    .then(getCorprateDonations)
    .then(PacList)
    
    