import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Main = () => {
  return (
    <div className='text'>

      <h3 className='name'>Evan Hameed Saeed</h3>  

      <p className='description'>Software engineer with hands-on expereince in the software development lifecycle. I have worked
       with a variety of software technologies and principles.
        Higlhy expereinced with building interactve user interfaces using the latest web frameworks
        such as React and Redux as a state management tool.<br/><br/> Utilized and worked on the implementaiton and optimization process of RESTful APIs using Node.js and Express.js. Hands-on expereicne working and structuring relational and non-relational databases such as MySQL and MongoDB. Expereince with caching services such as Redis. <br/> <br/> Background on Servers hosting, deployments, EC2s, CI/CDs, Lambda, jenkins, and Docker. Worked with AWS services such as SQS, SNS, S3 and many more. <br/> <br/> hands-on experience working on SaaS products. Interested in everything related to Technology and product vision.</p>

       <div style={{paddingTop: '2rem'}}>
       <SocialIcon url="https://github.com/evanhameed99" network='github' bgColor='white' style={{marginRight:'20px'}}/>   
       <SocialIcon url="https://www.linkedin.com/in/evan-hameed-2508a01b0/"  network='linkedin' bgColor='white'/>   
       </div>
        

    </div>
  )
}

export default Main