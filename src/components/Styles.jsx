import { useState } from 'react';
export default function Styles({setActiveFont, setGridStyle, color, setColor}) {

    return (
            <>
            <h2>Layout:  </h2>
            <div className="flex-rowLeft flex-center">
                <button className="buttonStyle3" style={{background: `linear-gradient(${color} 50%, white 50%)`}} onClick={()=> setGridStyle('flex-column')}></button>
                <button className="buttonStyle3" style={{background: `linear-gradient(to right, ${color} 50%, white 50%)`}} onClick={()=> setGridStyle('flex-rowLeft')}></button>
                <button className="buttonStyle3" style={{background: `linear-gradient(to left, ${color} 50%, white 50%)`}} onClick={()=> setGridStyle('flex-rowRight')}></button>
            </div>
            <div>
              <hr/>
              <h2>Color</h2>
              <div>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{ width: '50px', height: '50px', border: 'none', background: 'none' }}
                />
                <hr/>
              </div>
            </div>
            <h2>Fonts:  </h2>
            <div className="flex-rowLeft flex-center">
                <button className="buttonStyle3 font1" onClick={()=> setActiveFont('font1')}>Aa serif</button>
                <button className="buttonStyle3 font2" onClick={()=> setActiveFont('font2')}>Aa mono</button>
                <button className="buttonStyle3 font3" onClick={()=> setActiveFont('font3')}>Aa sans</button>
            </div></>
        
    )
}