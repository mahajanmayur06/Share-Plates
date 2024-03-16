import { TypeAnimation } from 'react-type-animation';
import './Example.css'
const Example= () => {
  return (
    <TypeAnimation
      sequence={[
        "surplus into sustenance",
        1000,
        "waste into welfare",
        1000,
        "hunger into hope",
        1000
      ]}
      className="large size"
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Example;