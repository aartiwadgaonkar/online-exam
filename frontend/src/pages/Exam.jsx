import React, { useState, useEffect } from 'react'
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
export default function Exam() {
    const [qIndex, setQIndex] = useState(0)
    const [selectedQuetion, setselectedQuetion] = useState({ ...q[0] })
    const [userAnswer, setuserAnswer] = useState()
    const [userResponse, setuserResponse] = useState([])
    const handleNext = () => {
        setQIndex(pre => pre < q.length - 1 ? pre + 1 : pre)
    }
    const handleBack = () => {
        setQIndex(pre => pre > 0 ? pre - 1 : pre)
    }
    useEffect(() => {
        setselectedQuetion({ ...q[qIndex] })
    }, [qIndex])
    const calculateResult = () => {
        const result = userResponse.filter(item => item.answer === item.uanswer)
        alert(result.length)
    }
    const handleChecked = item => {
        const found = userResponse && userResponse.findIndex(item => item.id == selectedQuetion.id)
        console.warn(found);
        if (found >= 0 && item === userResponse[found].uanswer) {
            return true
        } else {
            return false
        }
    }
    return <>
        {JSON.stringify(selectedQuetion)}
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    <div className="card">
                        <div className="card-header">{selectedQuetion.quetion}</div>
                        <div className="card-body">
                            {JSON.stringify(userResponse)}
                            {
                                selectedQuetion.option.map((item, index) => <div key={item}>
                                    <div className="form-check">
                                        <input
                                            onChange={e => {
                                                setuserAnswer(e.target.value)
                                                setuserResponse(pre => {
                                                    const x = userResponse.findIndex(item => item.id == selectedQuetion.id)
                                                    if (x != -1) {
                                                        userResponse[x] = { ...userResponse[x], uanswer: e.target.value }
                                                        return userResponse
                                                    } else {
                                                        return setuserResponse([...userResponse, { ...selectedQuetion, uanswer: e.target.value }])
                                                    }
                                                })
                                            }}
                                            type="radio"
                                            value={item}
                                            checked={handleChecked(item)}
                                            name={selectedQuetion.id}
                                            id={item}
                                            className='form-check-input' />
                                        <label htmlFor={item}>{item}</label>
                                    </div>
                                </div>)
                            }
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            {
                                (qIndex > 0) && <button
                                    onClick={handleBack}
                                    className='btn btn-outline-primary btn-sm'>
                                    Previouse
                                </button>
                            }

                            {
                                !(q.length - 1 == qIndex) && <button
                                    onClick={handleNext}
                                    className='btn btn-outline-primary btn-sm'>
                                    Next
                                </button>
                            }
                        </div>
                    </div>
                    <button
                        onClick={calculateResult}
                        className='btn btn-primary w-100 mt-3'>Submit Answer</button>
                </div>
            </div>
        </div>
    </>
}