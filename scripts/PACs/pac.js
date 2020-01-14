const Pac = (pac, corporations) => {

    return`
    
    <section class="pac__card">
        <header class="pac__name">
            <h1>${pac.registeredName}</h1>
        </header>
        <div class="pac__info">
            <div>${pac.address}</div>
        </div>
        <div class="pac__donors">
            <h2>Donors</h2>
            <ul>
                ${
                    corporations.map(
                        corporation => {
                            return `<li>${corporation.name}($${(corporation.amount).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                            })</li>`
                        }
                    ).join("")
                }
            </ul>
        </div>
    </section>
    `

}

export default Pac