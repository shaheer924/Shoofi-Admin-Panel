import React, { useState } from 'react'
import './ResetPassword.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
    let param = useParams()
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')

    const ResetPassword = async (e) => {
        e.preventDefault()
        try {
            let data = await axios.post(`http://creditrepair.retrocubedevs.com:4905/api/v1/reset-password/${param.token}`, {
                password: password,
                confirm_password: confirm_password,
            })

            alert(data?.data?.message)
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    return (
        <div>
            <h1>Shoofi Reset Password</h1>
            <form>
                <label>Password</label>
                <input type="password" id="password" name="password" onChange={e=>setPassword(e.target.value)} required/>
                <label>Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" onChange={e=>setConfirmPassword(e.target.value)} required />
                <button onClick={ResetPassword}>Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword
