import React, { useState } from 'react'

  function VisibilityToggle  () {
    const [visibility,setVisilibility] =useState(false)

    const toggleVisibility=()=>{
        setVisilibility(!visibility);

    }
    return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility?"Hide details":"Show details"}</button>
            {visibility&&
                <h3>Welcome User</h3>
            }
        </div>
    )
}
export default VisibilityToggle;