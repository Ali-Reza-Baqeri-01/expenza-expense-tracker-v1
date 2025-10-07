import { useState } from 'react'

export default function DropDown({ label }) {

    const [value, setValue] = useState("");

    return (
        <div className="form__group">

            <label className="form__label" htmlFor={label}>{label}</label>

            <select className="dropdown" id={label} value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
            </select>
        </div>
    )
}
