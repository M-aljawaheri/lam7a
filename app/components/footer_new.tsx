import React from "react";

function Footer() {
  return (
    <div
      id="contactus"
      className="w-full flex flex-row items-center"
      style={{ height: "150px", backgroundColor: "#EAB58B" }}
    >
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="text-white uppercase font-bold tracking-tight  p-2 text-2xl md:text-5xl lg:text-7xl">
          Questions?
        </h1>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="text-white text-xl mb-2">Reach out to us</p>
        <div className="flex w-[150px] justify-around align-middle">
          <a
            href="https://www.instagram.com/lam7a_mag/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="45px"
              height="45px"
              viewBox="0,0,256,256"
              stroke="#fff"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z"></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="mailto:lam7a-mag@andrew.cmu.edu"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="#fff"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="45px"
              height="45px"
              viewBox="0,0,256,256"
              stroke="#fff"
            >
              <g
                fillOpacity="0"
                fill="#dddddd"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
              </g>
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
