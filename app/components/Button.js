"use client";
import React from 'react'

export default function Button() {
  return (
<div>
  <button
  className="bg-amber-100 rounded-sm px-3 py-1"
  onClick={() => console.log("I have clicked here")}>
    Click here
    </button>

   </div>
  )
}
