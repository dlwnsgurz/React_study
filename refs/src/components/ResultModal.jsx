import {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function({targetTime, remainingTime, onReset}, ref){

    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemaningTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className = "result-modal">
            {userLost ? <h2>You LOST</h2> : <h2>YOUR SCORE : {score}</h2>}
            <p>
                The Target Time Was <strong>{targetTime} seconds.</strong> 
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemaningTime} seconds left.</strong>
            </p>
            <form method ="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal;