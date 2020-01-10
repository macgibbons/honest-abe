let politicians = []

export const usePoliticians = () => politicians.slice ()

export const getPoliticians = () => fetch("http://localhost:3000/politicians")
    .then(res => res.json())
    .then(parsedPoliticians => politicians = parsedPoliticians)
