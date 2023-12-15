import { Outlet } from "react-router-dom"

function SoalHeader(props){
    return (
        <>
        <div className='card'>
                                <div className="card-header">
                                    <div className="text-center">
                                        <h1>{props.title}</h1>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <p><span><strong>Rules and Regulations</strong></span></p>
                                        <ul>
                                            <li>Make sure that you write your name and student ID correctly. Otherwise, the system can't record your grades.</li>
                                            <li>The given time for this quiz is 45 minutes. After that, the form will be closed for you.</li>
                                            <li>Students who will not submit their answers in time will receive 0.</li>
                                            <li>You can only submit your answers once. If you wish to pause the the quiz, please use the Save and Continue Later button.</li>
                                            <li>Each question has its own grading points. After you submit your answers, we will evaluate your answers and let you know your grades later.</li>
                                            <li>If you have any technical problem during the quiz, please take a screenshot or screen recording and send us.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
            <Outlet/>
        </>
    )
}

export default SoalHeader