import React from 'react';
import { Grid, Avatar, Typography, Link } from '@material-ui/core';
import useStyle from './Style';

export const Title = () => {
    const classes = useStyle();
    var faker = require('faker/locale/vi');
    return (
        <div>
            <Grid className={classes.title} alignItems="center" container justify="flex-start" spacing={3} >
                <Avatar className={classes.avatar} src={faker.internet.avatar()} />
                <Typography className={classes.name} >{faker.name.findName()}  </Typography>
                <Typography className={classes.name} >{'>'}</Typography>
                <Link href="#" className={classes.item} > Thêm sản phẩm</Link>

            </Grid>
        </div>
    )
}

export default Title;
