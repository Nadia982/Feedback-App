import { useState } from "react";

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(10);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value);
    };
  return (
    <ul className="rating">
        <li>
            <input type="radio" id="num1" value="1" checked={selected===1} name="rating" onChange={handleChange}/>
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" id="num2" value="2" checked={selected===2} name="rating" onChange={handleChange}/>
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" id="num3" value="3" checked={selected===3} name="rating" onChange={handleChange}/>
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" id="num4" value="4" checked={selected===4} name="rating" onChange={handleChange}/>
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" id="num5" value="5" checked={selected===5} name="rating" onChange={handleChange}/>
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" id="num6" value="6" checked={selected===6} name="rating" onChange={handleChange}/>
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" id="num7" value="7" checked={selected===7} name="rating" onChange={handleChange}/>
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" id="num8" value="8" checked={selected===8} name="rating" onChange={handleChange}/>
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" id="num9" value="9" checked={selected===9} name="rating" onChange={handleChange}/>
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" id="num10" value="10" checked={selected===10} name="rating" onChange={handleChange}/>
            <label htmlFor="num10">10</label>
        </li>
    </ul>
  )
}

export default RatingSelect