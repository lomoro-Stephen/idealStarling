import './landingPageStylings/joinUs.css'
import image from '../../assets/img3.jpg'
export default function JoinUsSection() {
  return (
    <section className='joinUsSection'>
          <div className="joinUs-wrap">
              <div className='joinUsContent'>
                  <img src={image} alt="" />
              </div>
         </div>
    </section>
  )
}
