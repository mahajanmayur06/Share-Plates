import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';
import gsap from 'gsap';
import './Homepage.css';

const Homepage = () => {
  useEffect(() => {
    gsap.from('.Head', { duration: 1.5, opacity: 0, y: -50, ease: "power3.out" });
    gsap.from('.animate > div', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="container">
      <div className="description">
        <div>
          <h1 className='Head'>Welcome Enthusiasts</h1>
          <div className='animate'>
            <div className='initialText'>Let's Turn</div>
            <div>
              <TypeAnimation
                sequence={[
                  "surplus into sustainance",
                  1000,
                  "waste into welfare",
                  1000,
                  "hunger into hope",
                  1000
                ]}
                className="large size"
                wrapper="span"
                speed={50}
                style={{ fontSize: '3rem', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
