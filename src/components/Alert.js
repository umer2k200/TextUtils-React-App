import React from 'react'
function Alert(props){
    const alertStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
    return(
        props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissable fade show`} role="alert" style={alertStyle}>
            <strong>{props.alertText.msg}</strong>
        </div>
    )
}
export default Alert;