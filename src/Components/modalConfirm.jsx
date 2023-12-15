import Modal from 'react-bootstrap/Modal';
import BtnAja from './btnAja';
import BtnLoading from './buttonLoading';
import { useEffect, useState } from 'react';
function ModalWarning({handleClose,handleSubmit,show,message,btnText}){
    const [submit,setSubmit]=useState(false)
    
    const handelClick=()=>{
        setSubmit(true)
        handleSubmit()
    }

    const hide=()=>{
        setSubmit(false)
        handleClose()
    }



    return (
        <>
        <Modal show={show} onExited={hide} backdrop="static" keyboard={false}>
            <Modal.Header>
                <Modal.Title>
                    Warning....!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <button type='button' className='btn btn-danger' onClick={hide}>Cancle</button>
                {(submit)?<BtnLoading/>:<BtnAja text={btnText} onClick={handelClick}/>}
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalWarning