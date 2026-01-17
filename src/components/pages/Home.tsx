import React from 'react'
import ScrollVelocity from '../baseComponents/ScrollVelocity';
import RotatingText from '../baseComponents/RotatingText'
    import Magnet from '../baseComponents/Magnet'
import RButton from '../baseComponents/RButton';
import Menu from '../baseComponents/Menu';
import TiltedCard from '../baseComponents/springValues';
import Stepper, { Step } from '../baseComponents/Stepper';




const Home = () => {
  const [name, setName] = React.useState('');
  return (<>
    <div className=' h-8 w-32 rounded-lg p-2 m-2 flex justify-center items-center bg-linear-to-r from-purple-400 via-pink-500 to-indigo-600'>Home</div>
  
<ScrollVelocity
  texts={['React Bits', 'Scroll Down']} 
  velocity={100} 
  className="custom-scroll-text"
/>
  <div className='h-6 w-72 bg-linear-to-br from-blue-600 to-indigo-600'>

  </div>
<RotatingText
  texts={['React', 'Bits', 'Is', 'Cool!']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-linear-to-br from-blue-600 via-cyan-400 to-indigo-600 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>

    <Magnet padding={100} disabled={false} magnetStrength={5}>
      <RButton>Menu</RButton>
    </Magnet>

    <div><Menu /></div>



<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>


  
<Stepper
  initialStep={1}
  onStepChange={(step) => {
    console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <h2>Welcome to the React Bits stepper!</h2>
    <p>Check out the next step!</p>
  </Step>
  <Step>
    <h2>Step 2</h2>
    <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
    <p>Custom step content!</p>
  </Step>
  <Step>
    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
    <input value={4} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
  </Step>
  <Step>
    <h2>Final Step</h2>
    <p>You made it!</p>
  </Step>
</Stepper>
    </>
  )
}

export default Home