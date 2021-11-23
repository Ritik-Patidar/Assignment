import React from 'react'

export default function Form2() {
    return (
        <div className="row p-4">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Patient Name</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
                            <label className="form-check-label" htmlFor="inlineRadio3">Transgender</label>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="form-label">Date of birth</label><br />
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Day" min="1" max="31" step="1" />
                        </div>
                        <div className="col">
                            <select className="form-select" >
                                <option defaultValue value='0'>Month</option>
                                <option value='1'>Janaury</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                                <option value='4'>April</option>
                                <option value='5'>May</option>
                                <option value='6'>June</option>
                                <option value='7'>July</option>
                                <option value='8'>August</option>
                                <option value='9'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-select" >
                                <option defaultValue value='0'>Year</option>
                            </select>
                        </div>

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Occupation</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contact number</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Relative contact number</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">insured card number</label>
                        <input type="email" className="form-control" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Policy Number</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Employee ID</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Do you have any previous health insurance ?</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Do you have Family physician ?</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Street address</label>
                        <input type="email" className="form-control" />
                    </div>


                    <div className="row mb-3">
                        <div className="col-5">
                            <label className="form-label">City</label><br />
                            <select className="form-select" >
                                <option defaultValue>Select City</option>
                                <option value="1">City 1</option>
                                <option value="2">City 2</option>
                                <option value="3">City 3</option>
                            </select>
                        </div>
                        <div className="col-7">
                            <label className="form-label">State</label><br />
                            <select className="form-select">
                                <option defaultValue>Select State</option>
                                <option value="AN">Andaman and Nicobar Islands</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CH">Chandigarh</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="DN">Dadra and Nagar Haveli</option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL">Delhi</option>
                                <option value="GA">Goa</option>
                                <option value="GJ">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="LA">Ladakh</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PY">Puducherry</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="WB">West Bengal</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            <label className="form-label">Postel Code</label><br />
                            <input type="number" className="form-control" />
                        </div>
                    </div>

                </div>
            </div>
    )
}
