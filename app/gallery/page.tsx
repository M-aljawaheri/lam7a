"use client";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "@/data/images";
import Sidebar from "../components/sidebar";

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
}));

export default function App() {
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    return (
        <div>
            <Sidebar />
            <Gallery
                images={images}
                onClick={handleClick}
                rowHeight={400}
                enableImageSelection={false}
            />
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
        </div>
    );
}