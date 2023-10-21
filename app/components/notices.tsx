export default function Notices() {
    return (
<div className="flex flex-col py-[5%] justify-around items-center text-white text-wrap text-center">
                <div className="bg-customOrange w-[60%] rounded-lg px-4 py-8 mb-8">
                  <h3 className="font-bold text-xl">
                    Issue 8 Submission deadline is on xx/xx/xx!
                  </h3>
                  <div className="text-">
                    <p className='whitespace-pre-wrap'>
                      Submit your articles or photos
                    </p>
                    <p>to lam7a-mag@andrew.cmu.edu</p>
                  </div>
                </div>
                <div className="bg-customOrange w-[60%] rounded-lg px-4 py-8 mb-8">
                  <h3 className="font-bold text-xl">
                    <p>Issue 7 launch event will be on</p>
                    <p>04/10/23 in the West Walkway!</p>
                  </h3>
                </div>
                <div className="bg-customOrange w-[60%] rounded-lg px-4 py-8 mb-8">
                  <a className="font-bold text-xl">
                    View previous notices
                  </a>
                </div>
              </div>
    )
}
