import React from 'react'
import {Card,Typography} from '@material-ui/core'
import classes from './Amountcard.module.css';

const success = "#388e3c";
const danger = "#d32f2f";

async function fetchData(){
    const ref = await fetch("/usergroup",{
        method:"GET"
    })
}

function checkAmount(amount,color,title){
    const slice = amount.slice(0,1);
    if(slice==='+' || slice==="-"){
        if(slice==="-") return danger;
        return success;
    }
    return color==="success" ? success : danger ;
}

function AmountCard({color,icon1,icon2,title,amount}) {
  return (
    <>
    <Card className={classes.MuiPaper_main}>
        <div className="icon">
            <img src={icon1} alt="note_icon" className={classes.MuiPaper_icon} />
        </div>
        <div className="content">
            <div className="title">
                <Typography className={classes.MuiTypography_root_text}>
                    {title}
                </Typography>
            </div>
            <div className="content_text ">
                <img src={icon2} alt="rupee_icon" className={classes.MuiPaper_rupee}/>
                <Typography className={classes.MuiTypography_amount} style={{color: checkAmount(amount,color)}}>
                    {amount}
                </Typography>
            </div>
        </div>
    </Card>
    </>
  )
}

export default AmountCard