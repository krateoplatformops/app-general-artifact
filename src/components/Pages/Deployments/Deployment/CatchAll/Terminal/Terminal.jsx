import React, { useEffect, useRef, useState } from 'react'

import CommandsOutput from './CommandsOutput/CommandsOutput'
import css from './Terminal.module.scss'
import socketIOClient from 'socket.io-client'
// import jwt from 'jsonwebtoken';

// const commands = null

const Terminal = ({ plugin, deploy, content }) => {
  const [socket, setSocket] = useState(null)
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [showDefaults, setShowDefaults] = useState(false)
  const [ready, setReady] = useState(false)
  const [historyIndex, setHistoryIndex] = useState(0)
  const [waiting, setWaiting] = useState(false)
  const refInput = useRef(null)
  const remoteRef = useRef(plugin.value)
  const nodeRef = useRef(deploy.metadata.uid)
  const commands = useRef(plugin.commands)

  console.log("Content of commands 1);

  useEffect(() => {

    console.log("Content of commands 2);

    const newSocket = socketIOClient(remoteRef.current)
    // const newSocket = socketIOClient(remoteRef.current, {
    //   auth: {
    //     token: generateJwtToken(deploy.metadata.uid, remoteRef.current)
    //   }
    // });

    setSocket(newSocket)
    return () => newSocket.close()
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        socket.emit('check_node', { nodeId: nodeRef.current })
        setWaiting(true)
      })
      socket.on('disconnect', () => {
        setReady(false)
        setWaiting(false)
      })
      socket.on('node_is_offline', (data) => {
        setReady(false)
        setWaiting(false)
      })
      socket.on('node_is_online', (data) => {
        setReady(true)
        setWaiting(false)
      })
    }
  }, [socket])

  useEffect(() => {
    if (socket) {
      socket.on('task_result', (data) => {
        setWaiting(false)
        setHistory([data, ...history])
      })
    }
  }, [history, socket])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e) => {
    let clearHistoryIndex = true
    if (e.key === 'ArrowUp') {
      clearHistoryIndex = false
      if (history.length > 0) {
        if (historyIndex < history.length - 1) {
          setHistoryIndex(historyIndex + 1)
        }
        setInput(history[historyIndex].command)
      }
    }
    if (e.key === 'ArrowDown') {
      clearHistoryIndex = false
      if (history.length > 0) {
        if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1)
        }
        setInput(history[historyIndex].command)
      }
    }
    if (e.key === 'Enter') {
      const regex = new RegExp('^(?!\\s*$).+', 'gm')

      if (!regex.test(input)) {
        setHistory([
          {
            command: '',
            output: '',
            time: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            }),
            cwd: history[historyIndex]?.cwd || '/'
          },
          ...history
        ])
        return
      }
      socket.emit('task', { command: e.target.value, nodeId: nodeRef.current })
      setInput('')
      setWaiting(true)
    }
    if (clearHistoryIndex) {
      setHistoryIndex(0)
    }
  }

  const defaultCommandHandler = (cmd) => {
    if (cmd.editable) {
      setInput(cmd.command)
    } else {
      socket.emit('task', { command: cmd.command, nodeId: nodeRef.current })
      setInput('')
      setWaiting(true)
    }
    setShowDefaults(false)
  }

  useEffect(() => {
    if (!refInput.current) {
      return
    }
    if (refInput.current !== document.activeElement && !waiting) {
      refInput.current.focus()
    }
  }, [waiting])

  // Function to generate a JWT token
  // function generateJwtToken(username, password) {
  //   const payload = { username, password };
  //   const secretKey = process.env.JWT_SECRET_KEY;
  //   const options = { expiresIn: '1h' };
  //   return jwt.sign(payload, secretKey, options);
  // }


  return (
    <React.Fragment>
      <div className={css.Info}>
        Node ID: <b>{nodeRef.current}</b> - Remote: <b>{remoteRef.current}</b>
      </div>
      <div className={css.Terminal}>
        <CommandsOutput history={history} ready={ready} />
        <div className={css.Bash}>
          {history[0]?.cwd ? history[0].cwd : '/'}:
          <input
            ref={refInput}
            type="text"
            autoFocus
            autoComplete="false"
            value={input}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            disabled={!ready || waiting}
            onFocus={() => setShowDefaults(false)}
          />
          {commands && (
            <React.Fragment>
              <button
                className={css.DefaultCommandsButton}
                onClick={() => setShowDefaults(!showDefaults)}
                disabled={!ready}
              >
                <i className="fa-solid fa-terminal"></i>
              </button>
              {showDefaults && (
                <div className={css.DefaultsContainer}>
                  {commands.map((cmd, index) => (
                    <button
                      key={index}
                      className={css.Command}
                      onClick={() => defaultCommandHandler(cmd)}
                    >
                      {cmd.label}
                      <span>{cmd.command}</span>
                    </button>
                  ))}
                </div>
              )}
            </React.Fragment>
          )}
          {waiting && (
            <div className={css.Loader}>
              <span className={css.Spinner}></span>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Terminal
