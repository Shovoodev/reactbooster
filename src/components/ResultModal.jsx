import { forwardRef , useImperativeHandle , useRef} from "react"

const ResultModal = forwardRef( function ResultModal({ targetTime ,onReset ,remainingTime}, ref){
    const dialog =  useRef()
    const userLost = remainingTime*1000 <= 0 ;
    const furthertime = (remainingTime/1000).toFixed(2)
    const score = Math.round(( 1 - remainingTime / (targetTime * 1000)) *100)
    useImperativeHandle(ref , ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return(
        <>
        <dialog ref={dialog} className="result-modal" onClose={onReset} >
           {userLost && <h2>your Lost</h2>}
           {!userLost && <h2>your score {score}</h2>}
            <p> the target was <strong>{targetTime} seconds . </strong> </p>
            <p> you Stooped the timer with <strong>{furthertime} seconds left  </strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
        </>
    )
}
)
export default ResultModal 