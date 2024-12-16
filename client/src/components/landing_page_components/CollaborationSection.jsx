import './landingPageStylings/collaborationSection.css';
import Coursera from '../../assets/partners/Coursera.png';
import IBM from '../../assets/partners/IBM.png'; 
import Meta from '../../assets/partners/Meta.png';
import Figma from '../../assets/partners/Figma.png';
import GoogleWebDev from '../../assets/partners/GoogleWebDev.png'

const images = {
  'Coursera.png': Coursera,
  'IBM.png': IBM, 
  'Meta.png': Meta,
  'Figma.png': Figma,
  'GoogleWebDev.png': GoogleWebDev
  // Add more images as needed
};

export default function CollaborationSection() {
  return (
    <div className='collaboration-Container'>
      <div className='collaboration-wrapper'>
        <h4 className="desc">We Collaborate with 200+ Leading Companies</h4>
        <div className="collaboration-partners">
          {Object.keys(images).map((key) => (
            <img key={key} src={images[key]} alt={key.replace(/\.[^/.]+$/, "")} />
          ))}
        </div>
      </div>
    </div>
  );
}
