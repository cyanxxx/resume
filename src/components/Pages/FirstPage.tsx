import React from 'react'
import Brief from '../Brief'
import Grid from '../Grid'
import Header from '../Header'

import Project from '../Project'

export default function FirstPage() {
  return (
    <>
        <Header />
        <Grid
            left={(
                <>
                <Brief />
                <Project />
                
                </>
            )}
        />
    </>
  )
}
