import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MyUseStateComponent() {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <Button variant="contained" onClick={() => setToggle(!toggle)}>Click</Button>
            <Typography >Hello</Typography>
        </div>
    )
}

