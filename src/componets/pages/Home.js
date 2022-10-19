import { useEffect, useState } from "react"
import images from "../../assets/images/imgs"
import tagsColors from '../../data/palette'

import Search from '../particles/Search'
import Preloader from '../particles/Preloader'
import NoResult from '../particles/NoResult'

import '../../assets/styles/css/pages/home.css'
import axios from "axios"

function Home() { 
  const [searchQuery, setSearchQuery] = useState('')
  const [palletes, setPalletes] = useState([])
  const [preloader, setPreloader] = useState(true)
  const [likes, setLikes] = useState([])

  useEffect(() => {
    setPreloader(true)

    const timeOutId = setTimeout(() => {
      const getTeam = () => {
        const url = `${process.env.REACT_APP_SERVER_DATA}/palette/finder`
        
        axios.post(url, { query: searchQuery })
          .then(content => setPalletes( content.data.palettes ))
          .catch(err => console.error(err))
          .finally(() => setPreloader(false))
      }
  
      getTeam()
    }, 500)

    return () => clearTimeout(timeOutId)
  }, [searchQuery])

  function likePalette(id) {
    if (likes.includes(id) === false) {
      const url = `${process.env.REACT_APP_SERVER_DATA}/palette/add/like`
      
      axios.post(url, { id })
        .then(content => {
          setLikes([...likes, id])
          setSearchQuery(`${searchQuery} `)
        })
        .catch(err => console.error(err))
        .finally(() => setPreloader(false))
    }
  }

 
  function addTag(tag) {
    const query = `${searchQuery} ${tag}`
    setSearchQuery(query)
  }

  function setPalleteMode(e, mode) {
    const domItem = e.target

      if (mode) {
        domItem.classList.add('active')
      } else {
        domItem.classList.remove('active')
      }
  }

  function setPalleteChildMode(e, mode) {
    const item = e.target
    const parent = item.parentElement

    if (parent) {
      if (mode) {
        parent.classList.add('active')
      } else {
        parent.classList.remove('active')
      }
    }
  }

  function copyColor(e, color) {
    navigator.clipboard.writeText(color)

    const text = e.target.innerHTML

    if (text === 'Copied') return false
    
    e.target.innerHTML = 'Copied'
    
    setTimeout(() => {
      e.target.innerHTML = text
    }, 1000)
    
  }


  
  return (
    <main className="home-page">
      <nav className="home-navigation">
        <Search 
          query={searchQuery}
          onChangeHandler={setSearchQuery}
          onClickHandler={setSearchQuery}
          placeholder="Find your pallete" />

        <ul className='tags-selecter'>
          { 
            tagsColors.map((color, i) => {
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
      </nav>

      <section className="colors">
        {
          preloader ? (
            <>
              <Preloader width="30%" height="300px" />
              <Preloader width="30%" height="300px" />
              <Preloader width="30%" height="300px" />
            </>
          ) : (
            palletes.length > 0 ? (
              palletes.map((pallete, i) => {
                return <div key={i} className="color">
                  <div className="palletes">
                    {
                      pallete.colors.map((color, i) => {
                        return <div
                          onMouseOver={e => setPalleteMode(e, true)}
                          onMouseOut={e => setPalleteMode(e, false)}
                          key={i}
                          style={{ backgroundColor: color }} 
                          className="pallete">
                            <span 
                              onClick={e => copyColor(e, color)}
                              onMouseOver={e => setPalleteChildMode(e, true)}
                              onMouseOut={e => setPalleteChildMode(e, false)}
                              className='hex-color'>
                              { color }
                            </span>
                          </div>
                      })
                    }
                  </div>
                  <div className="additional">
                    <span 
                      className={!likes.includes(pallete._id) ? 'active likes' : 'likes'} 
                      onClick={() => likePalette(pallete._id)}>
                      <img src={likes.includes(pallete._id) ? images.blueLike : images.like} alt="like" />
                      
                      { pallete.likes }
                    </span>
                    <span className="date">
                      { new Date(pallete.dateCreate).toLocaleDateString() }
                    </span>
                  </div>
                </div> 
              }) ) : (
                <NoResult text="No result"  />
              )
          )
        }
      </section>

      <section className="information">
        <h3 className="title">Our awesome system to find, share and create new colors!</h3>
        <span className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque aperiam illo pariatur veniam modi quaerat excepturi mollitia illum adipisci eius libero incidunt iusto, quia, quo, optio porro accusantium ex!
        </span>
      </section>
    </main>
  )
}

export default Home
