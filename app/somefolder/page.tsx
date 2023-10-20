import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Full Page Divs Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="flex-1 h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
          
        </div>

        <div className="flex-1 h-screen bg-customGreen">
          {/* Content for second div */}
          Test2
        </div>

        <div className="flex-1 h-screen bg-customBlue">
          {/* Content for third div */}
          Test3
        </div>
      </div>
    </>
  )
}
