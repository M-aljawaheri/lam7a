"use client";

import { useState } from "react";
function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href="mailto:lam7a-mag@andrew.cmu.edu"
        target="_blank"
        rel="noreferrer"
        className="px-20 py-6 text-lg md:text-2xl font-bold home-button rounded-[2rem] hover:drop-shadow-2xl hover:text-black/90"
      >
        Reach out to us!
      </a>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          {/* Overlay with click event to close modal */}
          <div
            className="fixed inset-0 transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white  rounded-xl text-center overflow-hidden shadow-xl transform transition-all w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 p-10 m-6 lg:m-0  flex flex-col relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-3xl top-2 right-5 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Connect with us
            </h3>
            <a
              href="mailto:lam7a-mag@andrew.cmu.edu"
              className="w-full flex justify-center items-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4"
            >
              <svg
                fill="#fff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="-18.66 -18.66 223.93 223.93"
                stroke="#fff"
                strokeWidth="0.0018661000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.11966"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M100.361,2.076C60.07,0.779,14.737,14.373,2.385,57.2c-10.911,37.832,17.303,68.407,50.175,80.442 c-2.941,7.895,2.007,20.838,5.376,26.403c7.08,11.693,19.934,19.057,33.283,20.554c2.238,0.251,4.195-2.084,4.164-4.164 c-0.187-12.606-1.02-25.033,0.155-37.577c0.286-0.009,0.554,0.033,0.859-0.031c37.756-7.833,85.373-16.354,89.817-62.606 C191.313,27.176,146.274,3.556,100.361,2.076z M31.479,77.697c-0.083-5.111,2.641-9.22,5.766-12.91 c0.526,1.092,1.533,1.889,2.952,1.736c5.091-0.55,9.22,0.481,10.319,5.956c0.943,4.697-2.161,9.623-6.135,11.776 C38.854,87.249,31.583,84.117,31.479,77.697z M54.916,134.025c-3.923-2.029-7.746-4.317-11.431-6.802 c1.677,0.757,3.401,1.46,5.181,2.104c2.311,1.379,4.621,2.758,6.932,4.135C55.369,133.65,55.126,133.825,54.916,134.025z M98.078,87.104c-9.792,3.914-18.917-1.277-19.711-11.634c-0.606-7.888,3.189-15.854,9.318-20.725 c0.05-0.002,0.082,0.02,0.133,0.016c9.087-0.748,16.542,3.033,19.289,12.041C109.533,74.761,105.962,83.955,98.078,87.104z M150.9,73.117c-0.854,3.841-3.894,7.554-7.648,8.838c-5.103,1.744-7.951-4.531-8.06-8.669 c-0.151-5.712,4.987-10.093,10.396-11.518C149.375,64.511,152.031,68.026,150.9,73.117z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="">Email</span>
            </a>
            <a
              href="https://www.instagram.com/lam7a_mag/"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex justify-center items-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <svg
                fill="#fff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 184.591 184.591"
                stroke="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M105.809,84.807c-2.568-5.338-10.827-11.555-16.133-7.163c-7.664,0.037-12.159,8.901-11.73,16.308 c0.66,11.389,13.132,15.92,22.775,11.982C109.383,102.396,109.295,92.046,105.809,84.807z M94.088,103.401 c1.231-0.185,2.461-0.551,3.652-1.098c0.134,0.112,0.276,0.206,0.419,0.304C96.851,103.111,95.472,103.369,94.088,103.401z"></path>{" "}
                    <path d="M130.943,60.559c0.061-1.873-0.047-3.75-0.177-5.508c-0.083-1.125-0.876-2.062-2.064-2.065 c-2.293-0.007-9.679-0.901-12.199,1.216c-0.704-0.773-2.216-0.5-2.305,0.85c-0.349,5.266-0.586,10.528-0.624,15.806 c-0.006,0.825,0.596,1.715,1.436,1.887c1.065,0.217,2.173,0.388,3.285,0.478c0.075,0.124,0.166,0.241,0.278,0.346 c2.582,2.454,7.653,0.581,10.665,0.112c0.657-0.103,1.256-0.791,1.407-1.409C131.574,68.513,131.79,64.361,130.943,60.559z"></path>{" "}
                    <path d="M133.404,88.419c-0.141-1.166-1.04-1.816-1.968-1.945c1.185-1.242,0.094-3.87-2.029-3.365 c-2.976,0.707-6.025,0.721-9.024,0.126c-1.104-0.219-1.882,0.501-2.098,1.337c-0.364,0.441-0.545,1.04-0.356,1.763 c4.757,18.198-4.975,32.997-24.219,33.354c-18.07,0.336-29.635-13.456-25.96-30.999c0.128-0.61,0.05-1.425-0.488-1.846 c0,0-0.069-0.064-0.157-0.144c0.384-0.669,0.409-1.548-0.254-2.286c-0.06-0.066-0.131-0.116-0.196-0.175 c0.14-0.331,0.249-0.685,0.286-1.088c0.073-0.793-0.72-1.462-1.461-1.461c-0.789,0.001-1.434,0.238-2.067,0.545 c-0.174-0.074-0.359-0.135-0.568-0.162c-3.916-0.511-7.515,0.616-11.415,0.91c-1.041,0.078-1.931,0.816-1.925,1.925 c0.036,5.854,0.062,11.708,0.112,17.562c-0.01,0.386,0.106,0.686,0.266,0.943c0.174,8.391,2.717,17.209,6.218,22.756 c7.268,11.516,24.553,10.595,36.452,11.268c10.166,0.574,31.934,3.346,38.096-7.559 C136.915,118.791,134.852,100.521,133.404,88.419z M122.223,121.203c-0.031-0.029-0.059-0.066-0.093-0.095 c0.534-1.935,0.994-3.882,1.366-5.853c0.099-0.262,0.2-0.524,0.302-0.786c-0.044,0.358-0.099,0.713-0.148,1.069 C123.149,117.42,122.673,119.309,122.223,121.203z M118.201,132.467c0.941-0.49,1.842-1.088,2.684-1.819l0.262,0.087 c0.211,0.07,0.408,0.094,0.601,0.096c0.126,0.178,0.286,0.328,0.465,0.455c-1.307,0.674-2.75,1.189-4.287,1.576 C118.036,132.74,118.132,132.615,118.201,132.467z M64.089,87.682c-0.279,0.985-0.495,1.955-0.678,2.915 c-0.059-0.621-0.133-1.243-0.225-1.866c0.369-0.42,0.538-1.013,0.455-1.562c0.205,0.053,0.408,0.113,0.598,0.193 C64.187,87.466,64.123,87.561,64.089,87.682z M92.755,133.336c1.378-0.09,2.758-0.176,4.137-0.276 c0.002,0.153,0.009,0.3,0.038,0.452c-0.843-0.049-1.65-0.09-2.405-0.119C93.952,133.369,93.355,133.353,92.755,133.336z"></path>{" "}
                    <path d="M157.638,29.478c-9.937-12.504-23.426-22.083-38.707-26.773C103.265-2.104,85.358,0.113,69.884,4.57 c-30.78,8.868-54.362,33.409-62.647,64.184C4.101,80.4,3.469,91.993,4.959,103.217c0,0.046-0.018,0.082-0.015,0.131 c0.208,2.506,0.667,4.871,1.283,7.15c3.116,14.228,9.681,27.725,19.104,39.785c16.278,20.834,44.301,38.432,71.439,32.057 c-0.016,1.328,1.031,2.666,2.65,2.129c32.426-10.743,62.269-29.264,75.294-62.242C187.152,90.747,178.171,55.313,157.638,29.478z M8.635,101.764c-0.276-2.367-0.449-4.74-0.508-7.114c0.033,0.237,0.068,0.474,0.104,0.711c0.135,2.218,0.372,4.411,0.655,6.587 C8.805,101.883,8.717,101.826,8.635,101.764z M17.849,90.641c-0.101,0.355-0.204,0.708-0.309,1.061 c-0.029-0.696-0.06-1.392-0.066-2.09c0.132-0.461,0.261-0.922,0.39-1.384C17.849,89.032,17.841,89.836,17.849,90.641z M89.09,168.435c-1.34-0.267-2.68-0.532-4.02-0.793c1.349,0.116,2.697,0.263,4.046,0.397 C89.089,168.172,89.092,168.304,89.09,168.435z M142.321,157.342c0.76-0.303,1.516-0.631,2.266-0.982 c-0.623,0.504-1.235,1.021-1.871,1.512C142.612,157.676,142.476,157.498,142.321,157.342z M96.473,34.292 c0.786,0.034,1.568,0.087,2.35,0.147c-0.002,0.006-0.005,0.011-0.007,0.016c-1.716,0.085-3.429,0.206-5.137,0.372 C94.612,34.658,95.542,34.475,96.473,34.292z M29.943,132.147c-0.399-1.356-0.793-2.715-1.203-4.067 c0.684,1.614,1.403,3.215,2.142,4.808C30.573,132.64,30.257,132.394,29.943,132.147z M34.212,52.188 c-0.3,0.216-0.609,0.42-0.917,0.626c-0.13-0.103-0.262-0.202-0.414-0.271c0.69-0.62,1.357-1.259,2.028-1.897 C34.661,51.15,34.433,51.667,34.212,52.188z M38.295,119.533c0.015-0.686,0.016-1.371,0.034-2.058 c0.057,0.099,0.098,0.204,0.156,0.301c0.026,0.043,0.06,0.065,0.09,0.101c0.164,1.129,0.37,2.248,0.608,3.357 C38.883,120.67,38.592,120.1,38.295,119.533z M49.163,133.438c-9.105-9.495-7.438-26.287-6.677-38.243 c0.765-12.004,2.674-24.494,0.779-36.49c0.219-0.587,0.504-1.117,0.779-1.656c1.356-1.535,2.618-3.139,3.744-4.836 c8.225-7.244,23.53-7.485,33.31-7.814c13.935-0.468,28.896-1.83,42.606,1.001c16.634,3.435,19.778,18.415,19.587,33.359 c-0.197,15.465,0.556,31.64-3.674,46.654c-5.394,19.139-25.542,18.547-42.091,18.321c-8.651-0.118-17.292-0.829-25.898-1.668 C63.225,141.248,55.23,139.767,49.163,133.438z M74.998,177.992c3.753,0.534,7.518,0.984,11.293,1.379 C82.457,179.242,78.685,178.781,74.998,177.992z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="ml-2">Insta</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
