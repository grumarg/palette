import '../../assets/styles/css/particles/google-map.css'

function GoogleMap() {
  const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.0191173734512!2d23.690239927115144!3d52.083224858819165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210b8ca87e8383%3A0x76e7ae17001b7a06!2z0YPQuy4g0JjQvdGC0LXRgNC90LDRhtC40L7QvdCw0LvRjNC90LDRjyAxNywg0JHRgNC10YHRgiAyMjQwMzA!5e1!3m2!1sru!2sby!4v1665556288989!5m2!1sru!2sby'
  
  return (
    <iframe 
      className="google-map"
      src={src} 
      allowFullScreen="" 
      loading="lazy" 
      title="google-map"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  );
}

export default GoogleMap