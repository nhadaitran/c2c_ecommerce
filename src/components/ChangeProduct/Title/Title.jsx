import React from 'react';
import { Grid, Avatar, Typography, Paper, Link } from '@material-ui/core';
import useStyle from './Style';

export const Title = () => {
    const classes = useStyle();
    return (
        <div>
            <Grid className={classes.title} alignItems="center" container justify="flex-start" spacing={3} >
                <Avatar className={classes.avatar} src="https://th.bing.com/th/id/OIP.a2boT9vs3hVVD1Y0bAHPLAHaGl?w=172&h=180&c=7&o=5&dpr=1.25&pid=1.7"/>
                <Typography className={classes.name} >Họ Tên  </Typography>
                <Typography className={classes.name} >{'>'}</Typography>
                <Link href="#" className={classes.item} > Chỉnh sửa sản phẩm</Link>

            </Grid>
        </div>
    )
}

export default Title;
