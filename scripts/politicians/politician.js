const Politician = (politician) => {
    return `
    <article class="politician__card">
        <section class="politician">
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>

            <section class="politician__info">
                <div>Age: ${politician.age}</div>
                <div class="district">${politician.district}</div>
                <div class="phone">${politician.phone}</div>
            </section>
        </section>
    </article>
    `

}

export default Politician


