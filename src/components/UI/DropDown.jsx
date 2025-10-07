import { useState } from 'react';

import { categories } from '../../data';

export default function DropDown({ label }) {

    const [value, setValue] = useState("");

    return (
        <div className="form__group">

            <label className="form__label" htmlFor={label}>{label}</label>

            <select name={label} className="dropdown" id={label} value={value} onChange={(e) => setValue(e.target.value)}>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    )
}
