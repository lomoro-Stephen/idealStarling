import img1 from '../../assets/img1.jpg';
import './landingPageStylings/AboutSection.css';

export default function AboutSection() {
  return (
    <div className='about-section'>
      <p className='subtitle'>Discover Our Story</p>
      <h2 className='title'>Innovating Today, Transforming Tomorrow</h2>
      <div className='aboutUs_wrapper'>
          <div className='imageContainer'>
              <img src={img1} alt="About Us" />
          </div>
          <div className='about-info'>
            <div className="about-text">
                <h3>About Us</h3>
                <p>
                    We are dedicated to pushing the boundaries of technology and providing top-notch solutions for our clients. Our team of experts brings a wealth of experience and a passion for excellence, ensuring that we deliver outstanding results every time.
                </p>
                <p>
                    Our mission is to empower businesses to achieve their full potential through cutting-edge technology and personalized service. We believe in building long-lasting relationships with our clients, grounded in trust, transparency, and mutual success. Whether you're looking to enhance your digital presence, streamline operations, or explore new technologies, we are here to support you every step of the way.
                </p>
            </div>
            <div className="about-callToAction">
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
  );
}
