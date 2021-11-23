import React from 'react'

export default function Form1() {
    return (
        <div className="p-4 m-auto" style={{height:"65vh"}}>
            <div className="row">
                <div className="col-sm-6">
                    <label className="form-label">Insurance Company</label>
                    <select className="form-select form-select mb-3">
                        <option defaultValue>Select Insurance Company</option>
                        <option value="1">Health India Insurance</option>
                        <option value="2">Reliance General Insurance</option>
                        <option value="3">Futura General Insurance</option>
                        <option value="4">Medsave Health Insurance</option>
                        <option value="5">Bajaj Allianz Life Insurance</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
