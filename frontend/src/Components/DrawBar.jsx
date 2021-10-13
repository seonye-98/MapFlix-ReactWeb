import React from "react"
import styled from 'styled-components'


function DrawBar(props) {
    

    const colors = [
        '#FFFF96','#FFE650','#FFE5CB','#FFCAD5','#FFB900','#FF9E9B','#FF88A7','#FF5675','#F0B469','#FF6666','#DDDDDD','#D27D32','#BECDFF','#ACF3FF','#AAEBAA','#A8F552','#9D71BD','#93DAFF','#78A9ED','#68D168','#65FFBA','#369F36','#14D3FF','#00BFFF','#CAB2DB'
        ]
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const confirmedCnt = props.confirmedCnt;
    const onClickAction = props.onClick;
    const ratio = props.ratio;

    return (
        <>
            <Bar confirmedCnt={confirmedCnt} ratio={ratio} onClick={onClickAction} color={randomColor}></Bar>
        </>
    )
}

export default DrawBar;

const Bar = styled.div`
    width: 12px;
    height: ${(props) => Math.round(props.confirmedCnt/props.ratio)}px;
    margin-top: ${(props) => 280-Math.round(props.confirmedCnt/props.ratio)/2}px;
    background-color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 60px 60px;

    &:hover {
        opacity: 0.7;
    }
`