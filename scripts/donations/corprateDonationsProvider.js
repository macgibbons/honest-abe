let corpratedonations = []

export const useCorprateDonations = () => corpratedonations.slice ()

export const getCorprateDonations = () => fetch("http://localhost:3000/corporatedonations")
    .then(res => res.json())
    .then(parsedCorprateDonations => corpratedonations = parsedCorprateDonations)
