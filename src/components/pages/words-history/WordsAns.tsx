import React from 'react';
import "../../components-style/words-ans.css";
import {Typography} from "@mui/material";
import {IColors, IWordsAnsProps} from "./types-d.ts";

const WordsAns:React.FC<IWordsAnsProps> = ({word, value, className}) => {
    let width = value;
    let color = IColors.RED;

    if (value > 3500) {
        width = 1;
    } else {
        width = Math.exp(Math.log(100) - value/800); //important
        value > 800 ? color = IColors.RED : value > 500 ? color = IColors.ORANGE : color = IColors.GREEN;
    }

    return (
        <div className="words-ans">
            <div className={"row-wrapper " + className} id="wrapper">
                <div className="outer-bar">
                    <div className='inner-bar' style={{width: `${width}%`, backgroundColor: color}}></div>
                </div>
                <div className="row">
                    <Typography variant="h4" sx={{textTransform: 'lowercase', fontSize: "18px"}}>
                        {word}
                    </Typography>
                    <Typography variant="h4" sx={{textTransform: 'lowercase', fontSize: "18px"}}>
                        {value}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default WordsAns;