import RootLayout from "./layout";
import Slider from "./components/slider";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer_new";
import SplitScreenComponent from "./components/SplitScreenComponent";
import Gallery from "./components/Gallery";
import FullWidthImage from "./components/FullWidthImage";
import { fetchJournals } from "./lib/data";
import { Journal } from "./lib/definitions";

const extractId = (item: Journal): number | null => {
  const extractIdFromImage = (image: string): number | null => {
    const regex = /issue(\d+)\.jpg$/;
    const match = image.match(regex);
    return match ? parseInt(match[1], 10) : null;
  };

  let id = extractIdFromImage(item.image);
  return id;
};

const findMaxId = (items: Journal[]): number => {
  return items.reduce((max, item) => {
    const id = extractId(item);
    if (id !== null && id > max) {
      return id;
    }
    return max;
  }, 0); // Initialize max as 0 or any other starting value
};

export default async function Page() {
  const sliderItems = await fetchJournals();
  const maxId = findMaxId(sliderItems);
  // this is a magic one liner (chatgpt :-) to convert issue number to 1st / 2nd / 35th / etc ordinal
  const ordinal = (n) =>
    `${n}${
      n % 100 >= 11 && n % 100 <= 13
        ? "th"
        : ["th", "st", "nd", "rd"][Math.min(n % 10, 4)] || "th"
    }`;

  return (
    <RootLayout>
      <div className="relative">
        <Sidebar />
        <Header />
        <SplitScreenComponent
          title={`Get a copy of the ${ordinal(maxId)} issue`}
          location="right"
          imageSrc="/assets/bg-wrapped.png"
        >
          <button className="bg-[#ECE5DD] p-4 font-bold">
            <a
              className="text-[#B22F04] text-sm md:text-xl  break-normal"
              href="/magazine/issue12.pdf"
            >
              Check It Online Now
            </a>
          </button>
        </SplitScreenComponent>
        <div className="flex flex-col h-max py-1 px-5 lg:pb-3.5 pt-8 lg:pt-8 lg:px-20 bg-customOrange">
          <h4 className="md:ml-6 text-white text-4xl md:text-7xl font-bold">
            Magazine Archive
          </h4>
          <div className="mt-10">
            <Slider sliderItems={sliderItems} />
          </div>
        </div>
        {/*
        <SplitScreenComponent
          title="join&nbsp;our&nbsp;team -&nbsp;operations, design,&nbsp;editor"
          location="center"
          imageSrc="/assets/bgForm.jpg"
        >
          <button className="bg-[#ECE5DD] p-4 font-bold">
            <a
              className="text-black underline uppercase md:text-2xl text-md"
              href="https://forms.gle/YyHKi7vWeR6jYPmM6"
              target="_blank"
              rel="noreferrer"
            >
              Sign&nbsp;Up&nbsp;Here
            </a>
          </button>
        </SplitScreenComponent>
        */}
        <SplitScreenComponent
          title={`Issue ${maxId + 1} Submissions`}
          location="right"
          imageSrc="/assets/bg2.webp"
        >
          <button className="bg-[#ECE5DD] p-4 font-bold">
            <span className="text-black block">Submit through</span>
            <a
              className="text-[#B22F04] break-normal"
              href="mailto:lam7a-mag@andrew.cmu.edu"
              target="_blank"
              rel="noreferrer"
            >
              lam7a-mag@andrew.cmu.edu
            </a>
          </button>
        </SplitScreenComponent>
        <Gallery pb-5 />
        <FullWidthImage src="/assets/fullcut.jpg" />
        <Footer />
      </div>
    </RootLayout>
  );
}
