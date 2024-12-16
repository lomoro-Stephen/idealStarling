import './landingPageStylings/courses.css';
import img1 from '../../assets/img3.jpg';
import img6 from '../../assets/img6.jpg';
import img4 from '../../assets/img4.jpg';

const images = [
    {
        src: img6,
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: '$190'
    },
    {
        src: img4,
        title: 'Data Science',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: '$90'
    },
    {
        src: img1,
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', price: '$250'
    }
];

export default function CoursesSection() {
  return (
    <div className='coursesSection'>
      <h2>Courses and Pricing</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias ea pariatur</p>
      <div className="cards">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <div className='card-img'>
              <img src={image.src} alt={image.title} />
            </div>
            <div className="card-body">
              <h4 className="course-title">{image.title}</h4>
              <h3>{image.description}</h3>
              <div className="rating">
                {/* Add rating component here */}
              </div>
              <div className='enrol-container'>
                <button>Enroll Now</button>
                <h4 className="price">{image.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
