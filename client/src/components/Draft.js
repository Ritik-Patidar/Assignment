import React from 'react';
import axios from 'axios';
import { useState ,useEffect } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Checkbox from '@mui/material/Checkbox';

export default function Draft() {

    const [records,setRecords] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:5000/api')
        .then( res => setRecords(res.data))
        .catch(error => console.log(error));
    },[]);

    return (
        <div>
            <div className="row mb-4 align-items-baseline">
                <div className="col-md-5">
                    <div className="form"> <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Search anything..." /></div>
                </div>
                <div className="col">
                    <div className="d-flex">
                        <div className="dropdown m-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Insurance TPA
                            </button>
                            <ul className="dropdown-menu" style={{background:"#464646"}} aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Health India Insurance</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Reliance General Insurance</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Futura General Insurance</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Medsave Health Insurance</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Bajaj Allianz Life Insurance</a></li>
                            </ul>
                        </div> 
                        <div className="dropdown m-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Date Range
                            </button>
                            <ul className="dropdown-menu" style={{background:"#464646"}}  aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Last day</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Last 15 days</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Last month</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Last quarter</a></li>
                                <li><a className="dropdown-item text-white" href="/"><Checkbox style={{color:"white"}} /> Last year</a></li>
                                
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="overflow-auto">
                <table className="table text-white">
                    <thead>
                        <tr>
                        <th scope="col">
                            <Checkbox style={{color:"white"}} />
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Claim number</th>
                        <th scope="col">Admission date</th>
                        <th scope="col">Claim amount</th>
                        <th scope="col">Insurance TPA</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((record,key)=>{
                                return(
                                <tr key={key}>
                                    <td>
                                        <Checkbox style={{color:"white"}} />
                                    </td>
                                    <td>{record.name}</td>
                                    <td>{record.phone}</td>
                                    <td>{record.claimnumber}</td>
                                    <td>{record.admissiondate}</td>
                                    <td>{record.claimamount}</td>
                                    <td>{record.insurancetpa}</td>
                                    <td><VisibilityOutlinedIcon/></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>Result: {records.length}</div>
        </div>
    )
}
