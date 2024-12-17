import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartLine, faCode, faDraftingCompass, faEnvelope, faLaptopCode, faMobileAlt, faPaintBrush, faSearch, faServer } from '@fortawesome/free-solid-svg-icons';
import './landingPageStylings/categoriesSection.css';

export default function CategorySection() {
  return (
    <section className='categoriesWrap'>
      <h2>Explore Our Categories</h2>
      <p>Find a wide range of courses across various categories tailored to
        help you achieve your goals and enhance your skills.
      </p>
      <div className="categories-cards">
        {categoriesData.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">
              <FontAwesomeIcon icon={category.icon}/>
            </div>
            <div className="category-info">
              <span>{category.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const categoriesData = [
  { icon: faPaintBrush, title: 'Graphics Design' },
  { icon: faBullhorn, title: 'Digital Marketing' },
  { icon: faEnvelope, title: 'Email Marketing' },
  { icon: faSearch, title: 'SEO' },
  { icon: faCode, title: 'Full Stack Development' },
  { icon: faLaptopCode, title: 'Front End Web Development' },
  { icon: faServer, title: 'Back End Development' },
  { icon: faChartLine, title: 'Data Analysis' },
  { icon: faDraftingCompass, title: 'UI/UX Design' },
  { icon: faMobileAlt, title: 'App Development' }
];

// Render the component with the categoriesData
// <CategorySection categories={categoriesData} />
