import React, {useState} from 'react'

export default function New(){
    const [company, setCompany] = useState('')

    function handleSubmit(){
    }

    return (
        <form onSubmit= {handleSubmit}>

        <label htmlFor="company">EMPRESA *</label>
        <input type="text"
            id="company"
            placeholder="Sua Empresa!"
            value= {company}
            onChange={event => setCompany(event.target.value)}
        />


        <label htmlFor="techs">CATEGORIA *<span>S(Separadas por vírgula)</span></label>
        <input type="text"
            id="techs"
            placeholder="Quais categorias de tiro usam"
            value= {techs}
            onChange={event => setTechs(event.target.value)}
        />

        <label htmlFor="price">VALOR *</label>
        <input type="text"
            id="price"
            placeholder="Valor diário!"
            value= {price}
            onChange={event => setPrice(event.target.value)}
        />
        </form>
    )
}