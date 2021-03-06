import React from 'react'
import { COL } from '../types'

export default function SwitchCol({setCol}: {setCol: (col: COL) => void}) {
  return (
    <div className='col-btn-container'>
        <button  className='print-btn color-btn' onClick={() => setCol(COL.ONE)}>εε</button>
        <button  className='print-btn' onClick={() => setCol(COL.TWO)}>δΈ€ε</button>
    </div>
  )
}