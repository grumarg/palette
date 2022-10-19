import Title from '../../particles/Title'
import tagsColors from '../../../data/palette'

import '../../../assets/styles/css/pages/pallets/create-page.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const defaultPallete = {
  colors: ['#C3D8F7', '#92BBF7', '#3E87F4', '#0060F7', '#0448D3'],
  tags: []
}

function PalleteCreate() {
  const navigate = useNavigate()
  const [pallete, setPallete] = useState(defaultPallete)
  const [tagString, setTagString] = useState('')
  const [defaultColors, setDefaultColors] = useState(tagsColors)
  
  function changeColor(event, i) {
    const color = event.target.value

    const { colors } = pallete

    colors[i] = color
    
    setPallete({ ...pallete, colors })
  }

  function matchTag(text) {
    const tags = text.match(/(\w|[\u0400-\u04FF])+/gi) || []

    setPallete({ ...pallete, tags })
  }

  function changeTags(event) {
    const text = event.target.value
    setTagString(text)

    matchTag(text)
  }

  function addTag(tag) {
    const str = `${tagString} ${tag} `
    setTagString(str)

    const colors = defaultColors.filter(color => tag !== color)
    setDefaultColors(colors)

    matchTag(str)
  }

  function createPalette() {
    const url = `${process.env.REACT_APP_SERVER_DATA}/palette/create`
        
    axios.post(url, pallete)
      .then(() => navigate('/'))
      .catch(err => console.error(err))
  }

  return (
    <main className="create-pallet">
      <Title text="Create palette" />

      <div className="pallets">
        { pallete.colors.map((color, i) => {
          return <div 
            key={i}
            style={{ backgroundColor: color }} 
            className='pallete'>
            <span className='color'>{ color }</span>
            
            <input 
              onChange={(event) => changeColor(event, i)}
              type="color" 
              value={color} />
          </div>
        }) }
      </div>

      <div className='tags-area'>
        <input 
          value={tagString}
          onChange={e => changeTags(e)}
          type="text" 
          placeholder='Set some tags to describe the palette' />

        <ul className='tags'>
          <span className='selected'>Selected tags: { pallete.tags.length === 0 ? 'none' : '' }</span>
          { 
            pallete.tags.map((tag, i) => {
              return <li className='tag' key={i}>{tag}</li>
            })
          }
        </ul>

        <ul className='tags-selecter'>
          { 
            defaultColors.map((color, i) => {
              return <li 
                onClick={() => addTag(color)}
                className='tag' 
                key={i}>
                  <div 
                    style={{ backgroundColor: color }} 
                    className='circle'></div>
                  {color}
                </li>
            })
          }
        </ul>
      </div>

      <button onClick={createPalette} className='create'>Create palette</button>

    </main>    
  )
}

export default PalleteCreate
