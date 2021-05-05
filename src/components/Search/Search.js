import React, { useState, useEffect } from 'react'
import './Search.css'
import { useHistory } from 'react-router-dom';


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'vi-VI'

function Search() {
  const [isListening, setIsListening] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setValue(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }
  let history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault();
        setIsListening(false)
        const promise = new Promise(function (resolve, reject) {
            if (value!="") {
                resolve(history.push('/MainInfo/?city=' + value));
            }
            else {
                reject(
                    alert('bạn cần nhập thông tin tìm kiếm'),
                )
            }
        })
        promise.then(
            function(){
                setValue(" ")
            }
        )
    e.preventDefault();
    history.push('/MainInfo/?city=' + value)
    setIsListening(false)
  }
  return (
    <form onSubmit={submitHandler} className="form-inline" style={{ padding: 8 }}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            {isListening ?
              <span onClick={() => setIsListening(prevState => !prevState)}>🛑</span>
              : <span onClick={() => setIsListening(prevState => !prevState)}>🎙️</span>}
          </span>
        </div>
        <input type="text" className="form-control" type="text" placeholder="Search..." required value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </form>
  )
}

export default Search
