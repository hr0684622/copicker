import React,{useState } from 'react'
import { SketchPicker } from 'react-color';
const ColorPicker = () => {
    
    const [color, setColor] = useState('#000000');
    const handleChange = (newColor) => {
        setColor(newColor.hex);
      };

  return (
    <div>
         <h2>Color Picker</h2>
      <SketchPicker color={color} onChange={handleChange} />
      <p>Selected Color: {color}</p>
    </div>
  )
}

export default ColorPicker