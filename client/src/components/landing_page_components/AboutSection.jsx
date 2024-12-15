import img1 from '../../assets/img1.jpg'
import './landingPageStylings/AboutSection.css'

export default function aboutSection() {
  return (
    <div className='aboutUs_section'>
        <div>
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus minus nihil iste ut, officiis nesciunt! Illo amet optio assumenda dolor aperiam,
                ut eos beatae sed, ratione error at cupiditate culpa.
              </p>
        </div>
        <div className='imageContainer'>
            <img src={img1} alt="" />
        </div>
    </div>
  )
}
