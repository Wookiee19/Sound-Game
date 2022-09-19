import React from "react";
import ReactDOM from "react-dom";
import appConfig from "../config";

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
              <iframe
                title="instruction"
                width={appConfig.opts.width}
                height={appConfig.opts.height}
                src={appConfig.videoUrl + appConfig.mute}
              ></iframe>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ModalInstruction;
