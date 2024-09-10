import { useRef, useState } from "react"

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
       timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
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
    )
}