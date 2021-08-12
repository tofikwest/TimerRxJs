import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Display from "./components/Display";
import Controllers from "./components/Controllers";

function App() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe = new Subject();
    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (watchOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);

  const onStart = () => {
    setWatchOn((prevState) => !prevState);
    setStatus(1);
  };

  const onContinue = () => {
    onStart();
  };

  const onStop = () => {
    if (time !== 0) {
      setWatchOn(false);
    }
    setStatus(2);
  };

  const onReset = () => {
    setTime(0);
    setWatchOn(false);
    setStatus(0);
  };

  return (
    <div>
      <div>
        <div>
          <div>Stopwatch</div>
          <div>
            <Display time={time} />
            <Controllers
              start={onStart}
              stop={onStop}
              reset={onReset}
              resume={onContinue}
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
