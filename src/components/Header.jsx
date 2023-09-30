import React from './pagina.css'

const Header = () => {
    return (
        <>
            <header>
                <h1>Foro padres</h1>

                <div id="search-bar">
                    <input type="text" id="search-input" placeholder="Buscar..." />
                    <button id="search-button">Buscar</button>
                </div>
            </header>
        </>
    )
}

export default Header