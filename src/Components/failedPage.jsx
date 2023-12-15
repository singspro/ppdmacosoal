function FailedPage(){
    return (
        <>
        <div className='card'>
                                <div className="card-header">
                                    <div className="text-center">
                                        <h1>Failed...!</h1>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="col-lg-12">
                                        <p><span><strong>Error saat memuat soal</strong></span></p>
                                        <ul>
                                            <li>Link soal yang anda pakai sudah expired</li>
                                            <li>Server mengalami gangguan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default FailedPage