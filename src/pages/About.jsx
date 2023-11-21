import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Justin</span></h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>A Leader with over 15 years of experience in call center environments and a strong background in business administration, 
          management, and operations as well a Full Stack Engineer. I have completed multiple certifications in project management foundations and microservices architecture,
           demonstrating my commitment to continuous learning and professional growth. As a Full Stack Engineer, I direct and manage the development and maintenance of full-stack web applications 
           using HTML, JavaScript, CSS, and Java, ensuring high-quality code delivery and user satisfaction. 
           I collaborate with cross-functional teams in designing and implementing efficient, scalable software solutions, fostering a collaborative work environment 
           that drives innovation and excellence. Additionally, I leverage data analytics to optimize call center performance, reduce response time, increase productivity, 
           and enhance customer experience. I also design and implement comprehensive sales training and coaching programs that boost cross-sell and retention rates, revenue, and profitability. 
           I am passionate about creating value for my clients, partners, and colleagues, and I am always open to new challenges and opportunities.</p>
      </div>

      <div className='py-10 flex flex-col'> 
      <h3 className='subhead-text'>My Skills</h3>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl' />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img 
              src={skill.imageUrl}
              alt={skill.name}
              className='w-1/2 h-1/2 object-contain'/>
               </div>
          </div>
        ))}

      </div>
      </div>
      </section>
  )
}

export default About