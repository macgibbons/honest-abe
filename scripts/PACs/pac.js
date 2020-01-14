const Pac = (pac) => {
    return`
    <article class="pacs">
    <section class="pac">
        <header class="pac__name">
            <h1>${pac.registeredName}</h1>
        </header>
        <div class="pac__info">
            <div>${pac.address}</div>
        </div>
        <div class="pac__donors">
            <h2>Donors</h2>
            <ul>
                <li>XLEEN ($2,103)</li>
                <li>TALAE ($50,192)</li>
            </ul>
        </div>
    </section>
    </article>`

}

export default Pac