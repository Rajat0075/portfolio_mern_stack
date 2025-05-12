import React, { useState } from 'react'

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type='text'  placeholder='Username' /><br /><br />
                <input type='text' placeholder='Password' /><br /><br />
            </div>
            <div>
                <button type='button'>Submit</button>
            </div>
        </div>
    )
}