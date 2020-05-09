import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    componentWidth: "",
    componentHeight: "",
    deviceWidhtView: "",
    deviceHeightView: "",
    fontSizePx: "",
  });

  const [calucaltedValues, setCalculatedValues] = useState({
    componentWidth: "",
    componentHeight: "",
    fontSizeVw: "",
  });

  const calculateValues = (stateValues) => {
    //convert state values to flaot
    const cW = parseFloat(stateValues.componentWidth);
    const cH = parseFloat(stateValues.componentHeight);
    const dWV = parseFloat(stateValues.deviceWidhtView);
    const dHV = parseFloat(stateValues.deviceHeightView);
    let fSP = 0;
    if (stateValues.fontSizePx !== "") {
      fSP = parseFloat(stateValues.fontSizePx);
    }

    //calucate web responsive values
    const widht = (cW / dWV) * 100;
    const heigh = (cH / dHV) * 100;
    const font = (fSP / dWV) * 100;

    const calValues = {
      componentWidth: widht,
      componentHeight: heigh,
      fontSizeVw: font,
    };
    setCalculatedValues(calValues);
    console.log(calValues);
  };

  return (
    <>
      <header>
        <h1>Web responsive Calculator</h1>
      </header>

      <div className="grid-2">
        <button
          onClick={() => {
            calculateValues(values);
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
        <div className="grid-2-item">
          <form>
            <label>
              <i>Component Width in px</i>
              <input
                type="text"
                placeholder="Comp width in px"
                onChange={(event) => {
                  const value = {
                    componentWidth: event.target.value,
                    componentHeight: values.componentHeight,
                    deviceWidhtView: values.deviceWidhtView,
                    deviceHeightView: values.deviceHeightView,
                    fontSizePx: values.fontSizePx,
                  };
                  setValues(value);
                }}
              />
            </label>
            <label>
              <i>Component Height in px</i>
              <input
                type="text"
                placeholder="Comp heigh in px"
                onChange={(event) => {
                  const value = {
                    componentWidth: values.componentWidth,
                    componentHeight: event.target.value,
                    deviceWidhtView: values.deviceWidhtView,
                    deviceHeightView: values.deviceHeightView,
                    fontSizePx: values.fontSizePx,
                  };
                  setValues(value);
                }}
              />
            </label>
            <label>
              <i>Device width view</i>
              <input
                type="text"
                placeholder="Device width in px"
                onChange={(event) => {
                  const value = {
                    componentWidth: values.componentWidth,
                    componentHeight: values.componentHeight,
                    deviceWidhtView: event.target.value,
                    deviceHeightView: values.deviceHeightView,
                    fontSizePx: values.fontSizePx,
                  };
                  setValues(value);
                }}
              />
            </label>
            <label>
              <i>Device Height view</i>
              <input
                type="text"
                placeholder="Device width in px"
                onChange={(event) => {
                  const value = {
                    componentWidth: values.componentWidth,
                    componentHeight: values.componentHeight,
                    deviceWidhtView: values.deviceWidhtView,
                    deviceHeightView: event.target.value,
                    fontSizePx: values.fontSizePx,
                  };
                  setValues(value);
                }}
              />
            </label>
            <label>
              <i>Font-size in px</i>
              <input
                type="text"
                placeholder="Font-size in px"
                onChange={(event) => {
                  const value = {
                    componentWidth: values.componentWidth,
                    componentHeight: values.componentHeight,
                    deviceWidhtView: values.deviceWidhtView,
                    deviceHeightView: values.deviceHeightView,
                    fontSizePx: event.target.value,
                  };
                  setValues(value);
                }}
              />
            </label>
          </form>
        </div>
        <div className="grid-2-item">
          <form className="result-form">
            <label>
              <i>Component Width in vw</i>
              <input
                type="text"
                placeholder="Comp width in vw"
                defaultValue={calucaltedValues.componentWidth}
              />
            </label>
            <label>
              <i>Component Width in vh</i>
              <input
                type="text"
                placeholder="Comp heigh in vh"
                defaultValue={calucaltedValues.componentHeight}
              />
            </label>
            <label>
              <i>Component Width in vw</i>
              <input
                type="text"
                placeholder="Device width in vw"
                defaultValue={calucaltedValues.fontSizeVw}
              />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
