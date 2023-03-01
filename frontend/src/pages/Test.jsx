import React, { useEffect, useState } from 'react'
const q = [
    {
        id: "wb1",
        quetion: "waht is redux?",
        option: ["fun", "foo", "bar", "nahh"],
        answer: "fun"
    },
    {
        id: "wb2",
        quetion: "waht is html?",
        option: ["hypertext transfer protocol", "hypertext markup lang", "javascript", "none of above"],
        answer: "hypertext markup lang"
    },
    {
        id: "w3",
        quetion: "waht is css?",
        option: ["sass", "less", "cascade style sheets", , "none of above"],
        answer: "cascade style sheets"
    },

]
export default function Test() {
    const [percent, setpercent] = useState(0)
    const [selectedquetion, setselectedquetion] = useState(0)
    // let local = JSON.parse(localStorage.getItem("countdown"))==0
    // ? 10
    // : JSON.parse(localStorage.getItem("countdown"))
    let local = (localStorage.getItem("countdown"))
        ? JSON.parse(localStorage.getItem("countdown"))
        : 15

    const [countdown, setcountdown] = useState(local)
    useEffect(() => {
        setpercent(((selectedquetion + 1) / 3) * 100)
    }, [selectedquetion])
    useEffect(() => {
        const interval = setInterval(() => {
            setcountdown(pre => {
                if (pre <= 0) {
                    localStorage.removeItem("countdown")
                    clearInterval(interval)

                    return 0
                } else {
                    localStorage.setItem("countdown", pre - 1)
                    return pre - 1
                }
            })
            // setcountdown(countdown-1)
        }, 1000)
    }, [])

    return <>
        {

            countdown <= 0  ? "exam end" : <> <h2>{Math.floor(countdown / 60)}:{countdown % 60} </h2>
                <div class="card">
                    <h1>
                        you are at {selectedquetion + 1}/3
                    </h1>{<div class="progress">
                        <div class={`progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"  ${((selectedquetion + 1) / (q.length / 100)) < 50 ? "bg-danger" : "bg-success"}`}
                            style={{ width: `${percent}%` }} >
                            {((selectedquetion + 1) / 3) * 100}
                        </div>
                        {/* style={{ width: `${((selectedquetion + 1) / (q.length / 100))}%` }} */}
                    </div>
                    }
                    {/* <div class="card-header">{q[0].quetion}</div> */}
                    <div class="card-header">{q[selectedquetion].quetion}</div>
                    <div class="card-body">
                        <div className="row">
                            {
                                q[selectedquetion].option.map((item, index) => <div className="col-6">

                                    <input type="radio"
                                        value={item}
                                        checked={item}
                                        name={q[selectedquetion].id}
                                        id={q[selectedquetion].id + index}
                                        className='form-check-input' />
                                    <label className='from-check-label ms-2' htmlFor={q[selectedquetion].id + index}>{item}</label>
                                </div>
                                )
                            }
                        </div>


                    </div>
                    <div class="card-footer">
                        {
                            selectedquetion !== 0 &&
                            <button onClick={e => setselectedquetion(selectedquetion - 1)}>Previous</button>
                            // <button onClick={e => setselectedquetion(selectedquetion === 0 ? 0 : selectedquetion - 1)}>Previous</button>
                        }
                        {
                            selectedquetion !== q.length - 1 &&
                            <button onClick={e => setselectedquetion(selectedquetion + 1)}>Next</button>
                        }
                        {/* <button onClick={e => setselectedquetion(selectedquetion === q.length - 1 ? selectedquetion : selectedquetion + 1)}>Next</button> */}
                        {/* <button onClick={e=>setselectedquetion(selectedquetion-1)}>Previous</button> */}
                        {/* <button onClick={e => setselectedquetion(selectedquetion + 1)}>Next</button> */}
                    </div>
                </div>
            </>
        }
    </>
}
