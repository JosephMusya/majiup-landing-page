import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function CustomPopup({
  trigger,
  title,
  body,
  onConfirm,
  confirmText = "confirm",
  cancelText = "cancel",
  children,
  confirmStyle,
  width,
  height,
}) {
  return (
    <Popup
      trigger={trigger}
      modal
      nested
      // closeOnDocumentClick={false}
      contentStyle={{
        minWidth: "25dvw",
        minHeight: "10rem",
        width: "fit-content",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      {(close) => (
        <div
          className="modal"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight: "10rem",
          }}
        >
          <div>
            <h3 style={{ fontWeight: "bold" }}>{title}</h3>
            {body && <p>{body}</p>}
            {children}
          </div>
          <div className="flex-row" style={{ gap: "2rem" }}>
            <button
              style={{ backgroundColor: "#f4f4f4", color: "#000" }}
              onClick={() => close()}
            >
              {cancelText.toString().toLocaleUpperCase()}
            </button>
            <button
              style={confirmStyle}
              onClick={() => {
                onConfirm();
                close();
              }}
            >
              {confirmText.toString().toLocaleUpperCase()}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
