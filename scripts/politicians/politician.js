const Politician = (politician) => {
    return `
    <section class="politician__card">
    <div>${politician.name.first} ${politician.name.last}</div>
    <div class="district">${politician.district}</div>
    <div class="phone">${politician.phone}</div>
    </section>
    `

}

export default Politician