import React, { useState, useEffect, useRef } from 'react';
import '../css/InputBox.css'
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const InputBox = ({id, text, status, changeTodoList}) => {

    const [inputText, setInputText] = useState(text || '')

    // const [inputDisabled, setInputDisabled] = useState(false)

    const [iconStatus, setIconStatus] = useState(status)

    const inputFocus = useRef(null)

    // useEffect(() => {
    //     if(iconStatus === 'com'){
    //         setInputDisabled(true)
    //     } else if(iconStatus === 'add'){
    //         setInputDisabled(false)
    //     } else if(iconStatus === 'edit'){
    //         setInputDisabled(false)
    //     }
    //     console.log('1')
    // }, [])

    function disabledChange() {
        if(iconStatus === 'com'){
            setIconStatus('edit')
            inputFocus.current.disabled = false
            inputFocus.current.focus()
        } else if(iconStatus === 'add'){
            setIconStatus('edit')
            inputFocus.current.disabled = false
            inputFocus.current.focus()
        } else if(iconStatus === 'edit'){
            setIconStatus('com')
            inputFocus.current.disabled = true
        }
    }

    function iconChange() {
        if(iconStatus === 'com'){
            return (
                <>
                    <BorderColorIcon style={{fontSize:'40px', position: 'absolute', left: '450px', marginTop: '35px'}} onClick={() => disabledChange()}/>
                    <DeleteIcon style={{fontSize:'40px', position: 'absolute', left: '500px', marginTop: '35px'}}
                    onClick={() => changeTodoList(id, 'delete', '')}/>
                </>
            )
        } else if(iconStatus === 'add') {
            return <AddIcon style={{fontSize:'40px', position: 'absolute', left: '500px', marginTop: '35px'}}
                    onClick={() => changeTodoList(id, 'add', inputText)}/>
        } else if(iconStatus === 'edit') {
            return <CheckIcon style={{fontSize:'40px', position: 'absolute', left: '500px', marginTop: '35px'}} onClick={() => disabledChange()}/>
        }
    }

    return (
        <div>
            <input className='InputBox'
                    ref={inputFocus}
                    type="text"
                    placeholder={text === '' ? 'new todo' : ''}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={status === 'com' ? true : false}
                    />
            { iconChange() }
        </div>
    );
};

export default InputBox;