import React from "react";

function Controllers({ start, stop, reset, resume, status }) {
  return (
    <div>
      {status === 0 ? <button onClick={start}>Start</button> : ""}

      {status === 1 ? (
        <div>
          <button onClick={stop}>Stop</button>

          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <button onClick={resume}>Continue</button>

          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Controllers;
