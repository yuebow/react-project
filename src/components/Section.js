import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';


const Section = props => (
    //instead of div, gonna use the component directly
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section


const SectionGroup = styled.div`
    margin: 100px 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
`

const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
    align-self: end; //has its own convention, same as bottom
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;

    // flexbox is one dimentional grid, css grid is two dimentional
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    // can also use sass features such as nesting
    // nest doesn't work well with component
    // because it is dependant on the parent, but not for component

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
`

const SectionText = styled.p`
    color: white;
    font-size: 20px;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`