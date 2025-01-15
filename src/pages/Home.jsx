import React, { useEffect, useState } from 'react'
import BgDesignImage from '../assets/bgDesignOne.png'
import tagIcon from '../assets/icons/tagIcon.png'
import balpIcon from '../assets/icons/balpIcon.png'
import blueprintIcon from '../assets/icons/blueprintIcon.png'
import codeIcon from '../assets/icons/codeIcon.png'
import monitorIcon from '../assets/icons/monitorIcon.png'
import paintIcon from '../assets/icons/paintIcon.png'
import rocketIcon from '../assets/icons/rocketIcon.png'
import editIcon from '../assets/icons/editIcon.png'
import starIcon from '../assets/icons/starIcon.png'

import educationIcon from '../assets/icons/educationIcon.png'
import paintBlackIcon from '../assets/icons/paintBlackIcon.png'
import cubeBlackIcon from '../assets/icons/cubeBlackIcon.png'
// import starIcon from '../assets/icons/starIcon.png'

import researchIcon from '../assets/icons/researchIcon.png'
import flameIcon from '../assets/icons/flameIcon.png'
import currencyIcon from '../assets/icons/currencyIcon.png'


import squareIcon from '../assets/icons/squareIcon.png'
import CardImage1 from '../assets/ExpertiseImage/CardImage1.png'
import CardImage2 from '../assets/ExpertiseImage/CardImage2.png'
import CardImage3 from '../assets/ExpertiseImage/CardImage3.png'
import CardImage4 from '../assets/ExpertiseImage/CardImage4.png'
import CardImage5 from '../assets/ExpertiseImage/CardImage5.png'
import CardImage6 from '../assets/ExpertiseImage/CardImage6.png'
import CardImage7 from '../assets/ExpertiseImage/CardImage7.png'
import CardImage8 from '../assets/ExpertiseImage/CardImage8.png'
import CardImage9 from '../assets/ExpertiseImage/CardImage9.png'
import CardImage10 from '../assets/ExpertiseImage/CardImage10.png'
import CardImage11 from '../assets/ExpertiseImage/CardImage11.png'

import portfolioCardImage from '../assets/portfolioCardImage.png'

import LoadOne from '../assets/HeroImages/LoadOne.png'
import LoadTwo from '../assets/HeroImages/LoadTwo.png'
import BambooLeft from '../assets/HeroImages/BambooLeft.png'
import BambooRight from '../assets/HeroImages/BambooRight.png'

import { AnimatePresence, motion } from "framer-motion";
const aboutCards = [
  {
    background: '#FBE3EA',
    icon: balpIcon,
    title: 'The Big Idea',
    description: 'We’ll chat, research, brainstorm, and dream big together.',
  },
  {
    background: '#E7E9FF',
    icon: blueprintIcon,
    title: 'Plotting the Blueprint',
    description: 'We’re building the map to your project’s success, step by step.',
  },
  {
    background: '#EFCBFF',
    icon: paintIcon,
    title: 'Making It Look Awesome',
    description: 'Your project starts looking like a real thing, and it’s going to look amazing.',
  },
  {
    background: '#D0BAFE',
    icon: codeIcon,
    title: 'Bringing It to Life',
    description: 'The tech wizards turn designs into a working product that’s smooth & strong.',
  },
  {
    background: '#FFEAD2',
    icon: monitorIcon,
    title: 'Test, Test, and Test Again',
    description: 'We find and squash all the bugs before they can bug you.',
  },
  {
    background: '#BAD5FF',
    icon: rocketIcon,
    title: 'Showtime!',
    description: 'We don’t just launch and leave; we stick with you through thick and thin.',
  },
];

const expertiseCards = [
  {
    title: 'User Interface Design',
    image: CardImage1,
    description: 'Crafting intuitive, visually stunning adaptive interfaces that captivate users and simplify digital interactions.',
  },
  {
    title: 'User Experience Research',
    image: CardImage2,
    description: 'Data-driven insights to ensure your product meets user needs and delivers a seamless experience.',
  },
  {
    title: 'Product Design',
    image: CardImage3,
    description: 'Conceptualizing and designing products that are both functional and visually engaging, ensuring success from prototype to final delivery.',
  },
  {
    title: 'Branding & Identity',
    image: CardImage4,
    description: 'Building a unique and cohesive brand presence that resonates with your target audience, from logo design to full brand systems.',
  },
  {
    title: 'Software Architecture',
    image: CardImage5,
    description: 'Laying the groundwork for scalable, secure, and robust digital solutions that evolve with your business.',
  },
  {
    title: 'Video Animation',
    image: CardImage6,
    description: 'Bringing your ideas to life through dynamic video animations, from explainer videos to motion graphics, enhancing storytelling & engagement.',
  },
];

const expertiseCardsTwo = [
  {
    image: CardImage1,
    icon: educationIcon,
    title: 'End-to-End Expertise',
    description:
      'From initial concept to final delivery, we handle every step of the process. Our team of designers, developers, and strategists work together to craft cohesive digital solutions that not only look great but perform seamlessly.',
  },
  {
    image: CardImage2,
    icon: cubeBlackIcon,
    title: 'Agile and Scalable Development',
    description:
      'We focus on building solutions that are flexible and scalable, adapting to your business needs as they grow. Whether you need custom software, no-code development, or eCommerce platforms, we create products built for the future.',
  },
  {
    image: CardImage3,
    icon: paintBlackIcon,
    title: 'Client-Centric Collaboration',
    description:
      'Your input is at the heart of everything we do. We work closely with you at every stage of the project to ensure the final product is not just something we’re proud of, but something that exceeds your expectations.',
  },
  {
    image: CardImage4,
    icon: tagIcon,
    title: 'Full Flexibility',
    description:
      'You decide exactly what services you need, whether it’s a comprehensive branding overhaul, UI/UX design, software development, or a blend of multiple services. Our team will work with you to build the right combination.',
  },
];


const expertiseCardsThree = [
  {
    title: 'Custom Website Design',
    image: CardImage7,
    description: `Custom Website Design Tailored to Your Brand's Unique Needs for a Stunning, User-Friendly Online Presence.`,
  },
  {
    title: 'Code and No Code Development',
    image: CardImage8,
    description: `Expert Code and No-Code Development Solutions to Build Powerful, Scalable Websites and Applications with Flexibility and Efficiency.`,
  },
  {
    title: 'SEO Services',
    image: CardImage9,
    description: `Boost Your Online Visibility with Proven SEO Services, Driving Traffic, Enhancing Rankings, and Growing Your Business.`,
  },
  {
    title: 'Customised CRM Software',
    image: CardImage10,
    description: `Transform Your Business with Customised CRM Software Applications, Designed to Streamline Operations, Improve Customer Relationships, and Drive Growth.`,
  },
  {
    title: 'ERP Applications',
    image: CardImage11,
    description: `Empower Your Business with Tailored ERP Applications, Streamlining Processes, Enhancing Efficiency, and Driving Smarter Decision-Making.`,
  },{
    title: 'Pitchdeck Corporate Profile',
    image: CardImage1,
    description: `Present Your Business with Impact through a Professional Pitchdeck Corporate Profile, Showcasing Your Vision, Achievements, and Growth Potential.`,
  }
];

const portfolioData = [
  {
    title: "Housing Quest",
    subtitle: "Elevating Real Estate in Dubai",
    description:
      "A sleek, sophisticated platform for Housing Quest, designed to highlight luxury real estate offerings in Dubai. The use of white, gold, and black creates an elegant aesthetic that appeals to discerning clients.",
    items: ["Custom Design", "Software Development", "Branding & Identity"],
    image: portfolioCardImage,
    altText: "Housing Quest Image",
  },
  {
    title: "Honesty Steel Solutions",
    subtitle: "Crafting Structural Excellence",
    description:
      "A modern and minimalistic website showcasing HONESTY’s expertise in delivering top-tier steel solutions for intricate and expansive projects. The design combines a charcoal black and metallic gold palette to reflect strength and reliability.",
    items: ["Custom Design", "Software Development", "Branding & Identity"],
    image: portfolioCardImage,
    altText: "Honesty Steel Solutions Image",
  }, {
    title: "Pop & Palm",
    subtitle: "Transforming Celebrations with Elegance",
    description:
      "A sleek and modern website designed for a company specializing in event decor for weddings and special occasions. The site’s responsive design and gallery showcase their work in a way that captivates and inspires potential customers.",
    items: ["Custom UI Design", "Market Research", "Branding & Identity"],
    image: portfolioCardImage,
    altText: "Pop & Palm Image",
  }, {
    title: "Yogi Yousef",
    subtitle: "Serenity in Motion",
    description:
      "A minimal and modern website for Yogi Yousef, designed to reflect tranquility and wellness. Focusing on retreats and events, the site’s design emphasizes simplicity and clarity, offering an intuitive experience that aligns with the peaceful ethos of the brand.",
    items: ["Custom Design", "Software Development", "Branding & Identity"],
    image: portfolioCardImage,
    altText: "Yogi Yousef Image",
  },
];
const Home = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [fadeOutSecondImage, setFadeOutSecondImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showBamboo, setShowBamboo] = useState(false); // New state to control bamboo visibility

  useEffect(() => {
    const showSecondImageTimer = setTimeout(() => setShowSecondImage(true), 2000); // Show second image after 2 seconds

    if (showSecondImage) {
      const fadeOutTimer = setTimeout(() => {
        setFadeOutSecondImage(true); // Trigger fade-out for the second image
        setTimeout(() => setShowText(true), 2000); // Show text after the second image fades out
        setTimeout(() => setShowBamboo(true), 100); // Show bamboo after second image fades out
      }, 3000); // Fade-out starts 3 seconds after the second image appears

      return () => clearTimeout(fadeOutTimer);
    }

    return () => clearTimeout(showSecondImageTimer);
  }, [showSecondImage]);


  const expandVariants = {
    initial: { opacity: 1, width: "100px", height: "100px", scale: 1 },
    animate: { opacity: 1, width: "110%", height: "110%" },
    exit: { opacity: 0, width: "110%", height: "110%" },
  };

  const fadeInVariants = {
    initial: { opacity: 0, width: "110%", height: "110%" },
    animate: { opacity: 1, width: "110%", height: "110%" },
    exit: { opacity: 0, width: "110%", height: "110%" },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.5 }, // Stagger each text element by 0.5s
    }),
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-container">
          <div className="hero-image-container">
            <AnimatePresence>
              {!showSecondImage && (
                <motion.img
                  src={LoadOne}
                  alt="LoadOne"
                  className="hero-image"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={expandVariants}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSecondImage && !fadeOutSecondImage && (
                <motion.img
                  src={LoadTwo}
                  alt="LoadTwo"
                  className="hero-image"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={fadeInVariants}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showBamboo && (
                <>
                  <motion.img
                    src={BambooLeft}
                    alt="bg-BambooLeft"
                    className="bamboo-left-background"
                    initial={{ opacity: 0, scale: 0.5, x: -200 }} // Start from the left
                    animate={{ opacity: 1, scale: 1, x: 0 }} // Animate to its final position
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <motion.img
                    src={BambooRight}
                    alt="bg-BambooRight"
                    className="bamboo-right-background"
                    initial={{ opacity: 0, scale: 0.5, x: 200 }} // Start from the right
                    animate={{ opacity: 1, scale: 1, x: 0 }} // Animate to its final position
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </>
              )}
            </AnimatePresence>



            <AnimatePresence>
              {showText && (
                <div className="hero-content">
                  <motion.h1
                    className="hero-title"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={0}
                    variants={textVariants}
                  >
                    We Craft Experience
                  </motion.h1>
                  <motion.h2
                    className="hero-title"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={1}
                    variants={textVariants}
                  >
                    That Shapes Ideas Into
                  </motion.h2>
                  <motion.h2
                    className="hero-title-two"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={2}
                    variants={textVariants}
                  >
                    Revolutions
                  </motion.h2>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>


      <section id='aboutus' className='about'>
        <div className='image-container'>
          <img src={BgDesignImage} alt='bg-about' className='about-image' width="100%" height="100%" />

          <div className='image-content' >
            <h2 className='about-title'>Behind the Brand</h2>
            <h6 className='about-description'>Expert Website Design, Development, CRM, ERP, Pitch Decks, and Graphic Design services in Dubai tailored to your needs. We create seamless solutions to elevate your business online and beyond. </h6>
          </div>
        </div>
        <div>
          <h5 className='about-subtitle mb-4'>
            <img src={tagIcon} alt='tag icon' width={28} height={28} /> Mapping the Path</h5>

          <div className='row'>
            {aboutCards.map((card, index) => (
              <div className='col-md-4' key={index}>
                <div className='about-card' style={{ background: card.background }}>
                  <h6 className='about-card-title'>
                    <img src={card.icon} alt={`${card.title} Icon`} width={24} height={24} />
                    {card.title}
                  </h6>
                  <p className='about-card-description'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='services' className='expertise'>
        <div>
        <h5 className='expertise-title mb-5'><img src={editIcon} alt='edit Icon' width={24} height={24} />Our Expertise</h5>

        <div>
          <div className='d-flex justify-content-center mb-3'>
            <h5 className='expertise-title-card'><img src={researchIcon} alt='research Icon' width={24} height={24} />Building Solutions that Drive Results</h5>
          </div>
          <p className='expertise-description-two mb-3'>Our development expertise brings designs to life. We deliver cutting-edge solutions that are as functional as they are beautiful.</p>

          <div className='row d-flex align-items-center justify-content-center'>
            {expertiseCardsThree.map((card, index) => (
              <div className='col-md-4 mb-4' key={index}>
                <div className='expertise-card'>
                  <h6 className='expertise-card-title'>{card.title}</h6>
                  <img src={card.image} alt={`expertise card ${index + 1}`} width="100%" height="auto" />
                  <p className='expertise-card-description'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='  mb-5'>
          <h5 className='expertise-title mb-5'><img src={starIcon} alt='star Icon' width={24} height={24} /> What Makes Us Different</h5>
          <div className='row'>
            {expertiseCardsTwo.map((card, index) => (
              <div className='col-md-6 mb-4' key={index}>
                <div className='expertise-card-two'>
                  <img src={card.image} alt={`card image ${index + 1}`} width="100%" height="100%" />
                  <div className='expertise-content'>
                    <h6 className='expertise-card-title'>
                      <img src={card.icon} alt={`${card.title} Icon`} width={24} height={24} /> {card.title}
                    </h6>
                    <p className='expertise-card-description'>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          
          
          <div className='mb-5'>
            <h2 className='expertise-subtitle'>Crafting Digital Experiences That Inspire</h2>
            <p className='expertise-description'><img src={squareIcon} alt='square Icon' width={24} height={24} /> Full spectrum of design and development services, tailored to bring your vision to life</p>
          </div>
        </div>
        <div className='row '>
            {expertiseCards.map((card, index) => (
              <div className='col-md-4 mb-4' key={index}>
                <div className='expertise-card'>
                  <h6 className='expertise-card-title'>{card.title}</h6>
                  <img src={card.image} alt={`expertise card ${index + 1}`} width="100%" height="auto" />
                  <p className='expertise-card-description'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        
      </section>

      <section id='projects' className='portfolio'>
        <h5 className='portfolio-title mb-3'><img src={flameIcon} alt="Flame icon" />Portfolio</h5>
        <h3 className='portfolio-subtitle mb-3'>Where Creativity Meets Innovation</h3>

        {portfolioData.map((card, index) => (
          <div className="portfolio-card" key={index}>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="d-flex flex-column h-100 justify-content-between">
                  <div>
                    <h5 className="portfolio-card-title mb-5">{card.title}</h5>
                    <h2 className="portfolio-card-subtitle mb-3">{card.subtitle}</h2>
                    <p className="portfolio-card-description">{card.description}</p>
                  </div>
                  <div className="d-flex gap-2 flex-wrap">
                    {card.items.map((item, idx) => (
                      <h4 className="portfolio-card-item" key={idx}>
                        {item}
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <img
                  src={card.image}
                  alt={card.altText}
                  width="100%"
                  height="auto"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='pricing mb-5'>
        <h6 className='pricing-title mb-3'><img src={currencyIcon} alt='currency Icon' width={24} height={24} />Pricing</h6>
        <h2 className='pricing-subtitle mb-3'>Crafted-to-Fit Package</h2>
        <p className='pricing-description mb-5' >We understand that every project is different, and sometimes, predefined packages don’t fit the specific needs of your business. That’s why we offer Custom Packages—completely flexible solutions designed to meet your unique requirements. Whether you need a combination of design, development, or long-term support, our custom package is crafted specifically for you.</p>

        <div className='pricing-image-container'>
          <img src={portfolioCardImage} className='pricing-image' alt='Pricing Image' width="100%" height="auto" />
          <div className='pricing-image-content'>
            <div className='row'>
              <div className='col-md-6' >
                <h5 className='pricing-card-title'>Design</h5>
                <div className='d-flex flex-wrap gap-2'>
                  <h6 className='pricing-card-item'>Product Design </h6>
                  <h6 className='pricing-card-item'>UI/UX Design </h6>
                  <h6 className='pricing-card-item'>Application Design </h6>
                  <h6 className='pricing-card-item'>Branding </h6>
                  <h6 className='pricing-card-item'>Graphic Design </h6>
                  <h6 className='pricing-card-item'>Logo design </h6>
                  <h6 className='pricing-card-item'>Social Media Design </h6>
                  <h6 className='pricing-card-item'>Printable Design </h6>
                </div>
              </div>
              <div className='col-md-6' >
                <h5 className='pricing-card-title'>Development</h5>
                <div className='d-flex flex-wrap gap-2'>
                  <h6 className='pricing-card-item'>Custom Software </h6>
                  <h6 className='pricing-card-item'>Web Development </h6>
                  <h6 className='pricing-card-item'>No-Code </h6>
                  <h6 className='pricing-card-item'>E-commerce Solutions </h6>
                  <h6 className='pricing-card-item'>CMS Development </h6>
                  <h6 className='pricing-card-item'>API Development </h6>
                </div>
              </div>
              <div className='col-md-6' >
                <h5 className='pricing-card-title'>Animation</h5>
                <div className='d-flex flex-wrap gap-2'>
                  <h6 className='pricing-card-item'> 2D Animation </h6>
                  <h6 className='pricing-card-item'> 3D Animation </h6>
                  <h6 className='pricing-card-item'>Motion Graphics</h6>
                  <h6 className='pricing-card-item'>Video Editing </h6>
                  <h6 className='pricing-card-item'>Character Animation </h6>
                  <h6 className='pricing-card-item'>Logo Animation </h6>
                  <h6 className='pricing-card-item'>Intro/Outro Animation </h6>
                  <h6 className='pricing-card-item'>Animation Consulting </h6>
                </div>
              </div>
              <div className='col-md-6' >
                <h5 className='pricing-card-title'>Marketing</h5>
                <div className='d-flex flex-wrap gap-2'>
                  <h6 className='pricing-card-item'>Content Marketing </h6>
                  <h6 className='pricing-card-item'>SEO Strategies </h6>
                  <h6 className='pricing-card-item'>PPC Advertising </h6>
                  <h6 className='pricing-card-item'>Brand Strategy </h6>
                  <h6 className='pricing-card-item'>Market Research </h6>
                  <h6 className='pricing-card-item'>Analytics </h6>
                  <h6 className='pricing-card-item'>Social Media Marketing </h6>
                  <h6 className='pricing-card-item'>Consulting </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home