import { getPoliticians } from "./politicians/politicianProvider.js";
import PoliticianList from "./politicians/politicianList.js";

getPoliticians()
    .then(PoliticianList)