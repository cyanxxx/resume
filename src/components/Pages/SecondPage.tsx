import React from 'react'
import Brief from '../Brief'
import Grid from '../Grid'
import PartItem, { PartList } from '../PartItem'
import PersonalProject from '../PersonalProject'

export default function SecondPage() {
  return (
    <div>
          <Grid
              left={
              <>
                <Brief />
                <PersonalProject></PersonalProject>
              </>
            }
          />
    </div>
  )
}
