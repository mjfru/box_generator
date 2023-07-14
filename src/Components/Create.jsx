/* eslint-disable react/prop-types */
import { useState } from "react";

const CreateBox = (props) => {
    const { boxColor, setBoxColor } = props
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setBoxColor( [...boxColor, color] )
        setColor('')
    };

    return (
        <form onSubmit= { handleSubmit }>
            <h2>Choose Box Color: </h2> 
            <input
                type="text"
                placeholder="Enter a color here"
                name="colorChoice"
                value={color}
                onChange={ (e) => setColor(e.target.value) }
                />
            <input type="submit" value="Create Box" />
        </form>
    )

};

export default CreateBox;
