"use client";
import RootLayout from '../layout'
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Card from './card';
import { teamMembers } from '@/data/team';

export default function Page() {
  return (
    <RootLayout>
      <div className="relative">
        <Sidebar />
        <Header />
        <div className="flex flex-col h-max py-1 lg:pb-3.5 lg:pt-8 lg:px-20 bg-customYellow">
          <h4 className="text-white mt-6 text-7xl text-center font-['Brush_Script_MT']" >About the Team</h4>
          <div className='flex flex-row flex-wrap justify-between align-middle'>
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                name={member.name}
                imageUrl={member.imageURL}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
