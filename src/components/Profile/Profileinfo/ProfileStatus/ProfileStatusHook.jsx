import React, {useEffect, useState} from "react";


const ProfileStatusHook  = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }



    return (
            <>
                {!editMode &&
                <span onClick={activateMode}>{props.status || 'Nain!'}</span>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                </div>
                }
            </>
        )
}

export default ProfileStatusHook;