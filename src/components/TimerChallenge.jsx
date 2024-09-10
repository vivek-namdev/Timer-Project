import { useRef, useState } from "react"
import ResultModel from "./ResultModel.jsx";

export default function TimerChallenge({title, targetTime}) {
    const dialog = useRef();
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
       timer.current = setTimeout(() => {
        dialog.current.open();
        setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
        <ResultModel ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challengge-time">
                {targetTime} second{targetTime > 1 ? 'S' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'Active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}