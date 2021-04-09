import React from 'react'
import logo from '../logo.svg';


export default function Intro() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="code">
                Oh, Hi! I didn't think i'd see you here quite yet.
                Please check back soon to see what im up to!
        </p>
            <p className="code">
                {'In the meanwhile, if you\'re really curious, feel free to check out '}
                <a
                    className="App-link"
                    href="https://github.com/SQUlD13"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My Github
          </a>, or <a
                    className="App-link"
                    href="https://github.com/SQUlD13/pp-react-ex/tree/main"
                    target="_blank"
                    rel="noopener noreferrer">This Project's Repository</a>
            </p>
        </div>
    )
}
