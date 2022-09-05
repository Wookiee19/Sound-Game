import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import appConfig from "../config";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const ModalInstruction = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modalss">
              <div className="modal-headerss">
                <button
                  type="button"
                  className="modal-close-buttonss"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true" style={{ fontSize: 30 }}>
                    &times;
                  </span>
                </button>
              </div>
              <p>
                <iframe
                  title="instruction"
                  width={appConfig.opts.width}
                  height={appConfig.opts.height}
                  src={appConfig.videoUrl + appConfig.mute}
                ></iframe>
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ModalInstruction;
