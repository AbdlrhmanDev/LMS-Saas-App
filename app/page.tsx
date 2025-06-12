import CompanionCard from '@/components/companionCard'
import Cta from '@/components/Cta'
import CompanionsList from '@/components/companionsList'
import React from 'react'
import { recentSessions } from '@/constants/index'


const Page = () => {
  return (
    <main>
      <h1>Popular companions</h1>
        <section className='home-section'>
          <CompanionCard 
            id="1"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="Science"
            duration={45}
            color="bg-purple-100 border-purple-200"
          />
          <CompanionCard 
           id="2"
           name="Countsy the Number "
           topic="Derivatives & Integrals"
           subject="Maths"
           duration={30}
           color="bg-green-100 border-green-200"
          />
          <CompanionCard 
           id="4"
           name="The Growth Expert"
           topic="Scaling Your Business Successfully"
           subject="Business"
           duration={20}
           color="bg-blue-100 border-blue-200"
          />
        </section>
        <section className='home-section'>
          <CompanionsList  title="Recently completed sessions" 
           classNames="w-2/3 max-lg:w-full "
           companions={recentSessions}
          />
          <Cta />
        </section>
        


    </main>
  )
}

export default Page