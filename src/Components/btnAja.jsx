function BtnAja({text, onClick}){
    return(
        <>
            <button type='submit' onClick={onClick} className='btn btn-primary'>{text}</button>
        </>
    )
}

export default BtnAja