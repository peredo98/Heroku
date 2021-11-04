import React, { useState, useEffect } from "react";

export default function Main(props) {
    console.log(props)
    return(
        <>
          {props.currentUser}
        </>
    )
}
