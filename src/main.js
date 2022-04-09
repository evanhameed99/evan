import React from 'react'
import { SocialIcon } from 'react-social-icons';
const Main = () => {
  return (
    <div className='text'>

      <h3 className='name'>Evan Hameed Saeed</h3>  

      <p className='description'>
      Software engineer with hands-on experience in the software development lifecycle. I have worked with a variety of software technologies and principles. Highly experienced with building interactive user interfaces using the latest web frameworks such as React and Redux as state management tool. <br/> <br/>

Utilized and worked on the implementation and optimization process of RESTful APIs using Node.js and Express.js. Hands-on experience working and structuring relational and non-relational databases such as MySQL and MongoDB. Experience with caching services such as Redis.

<br/> <br/>Background on Server hosting, deployments, EC2s, CI/CDs, Lambda, Jenkins, and Docker. Worked with AWS services such as SQS, SNS, S3, and many more.
Worked with queueing systems such as RabbitMQ, Redis, and many more.
Highly knowledged working on SaaS products. <br/> <br/>Interested in everything related to Technology and product vision.
      </p>

       <div style={{paddingTop: '2rem'}}>
       <SocialIcon url="https://github.com/evanhameed99" network='github' bgColor='white' style={{marginRight:'20px'}}/>   
       <SocialIcon url="https://www.linkedin.com/in/evan-hameed-2508a01b0/"  network='linkedin' bgColor='white' style={{marginRight:'20px'}}/>   
       <SocialIcon url="mailto:evanhameed0@gmail.com"  network='email' bgColor='white'/>   
       </div>
        

    </div>
  )
}

export default Main