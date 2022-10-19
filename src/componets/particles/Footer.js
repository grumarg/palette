import '../../assets/styles/css/particles/footer.css';
import images from '../../assets/images/imgs'
import GoogleMap from './GoogleMap';

function Footer() {
  const address = 'Belarus, Brest, International street 17'
  const location = 'https://www.google.com/maps?z=16&q=370+jay+street,+12th+floor,+brooklyn,+ny,+11201'
  const number = '+375-33-377-89-97'
  const email = 'alesik.ivan.job@gmail.com'

  const developerIvan = 'https://www.linkedin.com/in/ivan-alesik-b118121b6'
  const developerMaria = 'https://www.linkedin.com/in/masha-grushevskaya-76778023a'

  let year = new Date().getFullYear()
  year = year === 2022 ? year : `2022 - ${year}`

  return (
    <footer className='main-footer'>
      <section className='cover'>
        <article className='info'>
          <h3>web pallete</h3>
          <span className='description'>
            Built using React by 
            <a href={developerIvan} target="_blank" rel="noreferrer">Ivan</a> 
            and 
            <a href={developerMaria} target="_blank" rel="noreferrer">Maria</a> 
            &copy;{year}
          </span>
          <ul>
            <li>
              <a href={`mailto:${email}`}>
                <img src={images.email} alt='contact'/>
                <span>{email}</span>
              </a>
            </li>          
            <li>
              <a href={`tel:${number}`}>
                <img src={images.phone} alt='contact'/>
                <span>{number}</span>
              </a>
            </li>          
            <li>
              <a target='_blank' rel="noreferrer" href={location}>
                <img src={images.location} alt='contact'/>
                <span>{address}</span>
              </a>
            </li>
          </ul>
        </article> 

        <article className='map'>
          <GoogleMap />
        </article> 
      </section>
    </footer>
  );
}

export default Footer;
