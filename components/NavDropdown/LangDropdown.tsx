import React, { useState } from 'react'

const LangDropdown =  ({ lang }: any) => {
    const [ currentLang, setCurrentLang] = useState(lang)

    const setValue = (lang: any) => {
        setCurrentLang(lang)
    }
    return (
        <form>
            <select title="lang" onChange = {(e: any) =>{  setValue(e.target.value)}} value={currentLang}>
                <option value ="en">en</option>
                <option value = "ar">ar</option>
            </select>
        </form>
    )
}

export default LangDropdown
