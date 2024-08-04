import { Button, Divider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function PrintComponent() {
    const [print, setPrint] = useState("")
    const handlePrint = (e) => {
        setPrint(e.target.value)
    }
    const [showText, setShowText] = useState("")

    /*  */

    const [toggleText, SetToggleText] = useState(true)

    /*  */

    const [array, AddToArray] = useState([])
    const [addText, setAddText] = useState("")
    return (
        <>

            < div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <TextField onChange={handlePrint} />
                <Button variant='contained' onClick={() => setShowText(print)}>Print</Button>
                <Typography>{showText}</Typography>
            </div >

            <br />
            <hr />
            <br />

            <div style={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center", flexDirection: "column" }}>
                <Typography>{toggleText ? "Text" : ""}</Typography>
                <Button variant='contained' onClick={() => SetToggleText((prev) => !prev)}>Hide</Button>
            </div >

            <br />
            <hr />
            <br />

            < div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <TextField onChange={(e) => setAddText(e.target.value)} />
                <Button variant='contained' onClick={() => { AddToArray((prev) => [...prev, addText]); console.log(array); }}>Add</Button>
            </div >

            <br />
            <hr />
            <br />

            < div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <TextField onChange={(e) => setAddText(e.target.value)} />
                <Button variant='contained' onClick={() => { AddToArray((prev) => [...prev, addText]); console.log(array); }}>Add</Button>
            </div >


        </>
    )
}
