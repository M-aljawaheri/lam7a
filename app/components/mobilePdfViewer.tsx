import * as React from "react";
import {
  Icon,
  MinimalButton,
  ViewMode,
  ScrollMode,
  Worker,
  Position,
  SpecialZoomLevel,
  Tooltip,
  Viewer,
  ProgressBar,
} from "@react-pdf-viewer/core";
import {
  pageNavigationPlugin,
  RenderGoToPageProps,
} from "@react-pdf-viewer/page-navigation";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";

interface SlidePresentationExampleProps {
  fileUrl: string;
}

const SlidePresentationExample: React.FC<SlidePresentationExampleProps> = ({
  fileUrl,
}) => {
  const pageNavigationPluginInstance = pageNavigationPlugin();

  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance;

  return (
    <div
      className="rpv-core__viewer"
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          left: 0,
          position: "absolute",
          top: "50%",
          transform: "translate(24px, -50%)",
          zIndex: 1,
        }}
      >
        <GoToPreviousPage>
          {(props: RenderGoToPageProps) => (
            <Tooltip
              position={Position.BottomCenter}
              target={
                <MinimalButton onClick={props.onClick}>
                  <Icon size={16}>
                    <path d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5" />
                  </Icon>
                </MinimalButton>
              }
              content={() => "Previous page"}
              offset={{ left: 0, top: 8 }}
            />
          )}
        </GoToPreviousPage>
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translate(-24px, -50%)",
          zIndex: 1,
        }}
      >
        <GoToNextPage>
          {(props: RenderGoToPageProps) => (
            <Tooltip
              position={Position.BottomCenter}
              target={
                <MinimalButton onClick={props.onClick}>
                  <Icon size={16}>
                    <path d="M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5" />
                  </Icon>
                </MinimalButton>
              }
              content={() => "Next page"}
              offset={{ left: 0, top: 8 }}
            />
          )}
        </GoToNextPage>
      </div>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          defaultScale={SpecialZoomLevel.PageFit}
          scrollMode={ScrollMode.Vertical}
          viewMode={ViewMode.SinglePage}
          fileUrl={fileUrl}
          plugins={[pageNavigationPluginInstance]}
          renderLoader={(percentages: number) => (
            // You can use your own progress bar component
            <div style={{ width: "240px" }}>
              <ProgressBar progress={Math.round(percentages)} />
            </div>
          )}
        />
      </Worker>
    </div>
  );
};

export default SlidePresentationExample;
