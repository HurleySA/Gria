import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { useStyles } from "./styles";

interface detailProps{
    IconDetail: ReactNode,
    information: String,

}



export default function Detail(props: detailProps) {
    const classes = useStyles();
    return (
        <Grid container direction="row" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item>
                {props.IconDetail}
            </Grid>
            <Grid item className={classes.information}>
                {props.information}
            </Grid>
        </Grid>
    )
}
