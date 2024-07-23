import React from 'react'

import { ContentBox, Griditem, Gridwrapper } from '../Styled'
import './Hero.scss'
const Hero = () => {
  let MasAlumnosHero = require('../../assets/SuperLeads_Hero_mas_alumnos.png')
  let svgSuperleads = require('../../assets/Group 1000004859.svg')
  return (
    <div>
      <Gridwrapper
        width = '90%'
        maxWidth = '1085px'
        gridtemplatecolumns = '41.8% 52.7%'
        gridgap = '5.3%'
      >
        <Griditem>
          <ContentBox>

          </ContentBox>
        </Griditem>
        <Griditem className='columnItems'>
          <svg src{...svgSuperleads} />
          {/* <img src={MasAlumnosHero} alt="SuperLeads Mas alumnos" /> */}
        </Griditem>
      </Gridwrapper>
    </div>
  )
}

export default Hero