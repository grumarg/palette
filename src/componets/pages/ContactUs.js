import { useState, useEffect } from 'react'
import axios from 'axios'

import checkEmail from '../../utils/form'
import Title from '../particles/Title'

import '../../assets/styles/css/pages/contact-us.css'
import Feedback from '../particles/Feedback'

function ContactUs() {
  const [formActive, setFormActive] = useState(true)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [pending, setPending] = useState(false)

  function validate(email, message) {
    // Form validation
    const emailValidated = checkEmail(email.trim())
    const messageValidated = message.trim()

    return Boolean(emailValidated && messageValidated)
  }

  function sendMessage(event) {
    event.preventDefault()

    if (validate(email, message) && !pending) {
      sendFeedback()
    }
  }

  function clearForm() {
    setEmail('')
    setMessage('')
  }

  function sendFeedback() {
    setPending(true)

    const url = `${process.env.REACT_APP_SERVER_DATA}/feedback/create`

    const data = { email, message }
    
    axios.post(url, data)
      .catch(err => console.error(err))
      .finally(() => {
        setFormActive(false)
        clearForm()
        setPending(false)
      })
  }

  useEffect(() => {
    const result = validate(email, message)
    setIsActive(result)
  }, [email, message])

  return (
    <>
      {
        formActive ? (
          <main className='contact-us-page'>
            <Title text='Contact us' />
            
            <span className='preview'>
              Feel free to ask some questions or the possibility of cooperation
            </span>

            <form className='contact-us-form'>
              <input
                onChange={event => setEmail(event.target.value)} 
                value={email} 
                name='email' 
                type="email" 
                placeholder='Email' />

              <textarea 
                onChange={event => setMessage(event.target.value)} 
                value={message} 
                name='email'  
                placeholder='Your awesome message'></textarea>
              
              <button 
                onClick={sendMessage}
                className={isActive && !pending ? 'active' : ''}>
                  Send your message
                </button>
            </form>
          </main>
        ) : (
          <Feedback 
            callback={() => setFormActive(true)}
            message='Fell free to stay one more question and we will answer you as soon as possible'/>
        )
      }
    </>
  )
}

export default ContactUs
