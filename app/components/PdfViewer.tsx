"use client";
import {
  MinimalButton,
  ScrollMode,
  SpecialZoomLevel,
  Viewer,
  ViewMode,
  Worker,
  ProgressBar,
} from "@react-pdf-viewer/core";
import {
  NextIcon,
  pageNavigationPlugin,
  PreviousIcon,
} from "@react-pdf-viewer/page-navigation";
import {
  ThumbnailDirection,
  thumbnailPlugin,
} from "@react-pdf-viewer/thumbnail";
import * as React from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";

interface MagazineExampleProps {
  fileUrl: string;
}

const MagazineExample: React.FC<MagazineExampleProps> = ({ fileUrl }) => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToNextPage, jumpToPreviousPage } = pageNavigationPluginInstance;

  const thumbnailPluginInstance = thumbnailPlugin();
  const { Thumbnails } = thumbnailPluginInstance;

  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, .3)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, .3)",
          height: "40rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -100%) rotate(-90deg)",
            zIndex: "1",
          }}
        >
          <MinimalButton onClick={jumpToPreviousPage}>
            <PreviousIcon />
          </MinimalButton>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            defaultScale={SpecialZoomLevel.PageFit}
            scrollMode={ScrollMode.Vertical}
            viewMode={ViewMode.DualPageWithCover}
            fileUrl={fileUrl}
            plugins={[pageNavigationPluginInstance, thumbnailPluginInstance]}
            renderLoader={(percentages: number) => (
              // You can use your own progress bar component
              <div style={{ width: "240px" }}>
                <ProgressBar progress={Math.round(percentages)} />
              </div>
            )}
          />
        </Worker>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translate(0, -100%) rotate(-90deg)",
            zIndex: "1",
          }}
        >
          <MinimalButton onClick={jumpToNextPage}>
            <NextIcon />
          </MinimalButton>
        </div>
      </div>
      <div
        style={{
          height: "12rem",
          overflow: "auto",
        }}
      >
        <Thumbnails thumbnailDirection={ThumbnailDirection.Horizontal} />
      </div>
    </div>
  );
};

export default MagazineExample;
