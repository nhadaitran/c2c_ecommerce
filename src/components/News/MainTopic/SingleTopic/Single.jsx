import React from 'react';
import {Typography, Card, CardContent, CardMedia, Link,Paper} from '@material-ui/core';
import {AccessTime, Person} from '@material-ui/icons';
import useStyle from './styles';

const Sigle = () => {
    const classes = useStyle();
    var faker = require('faker/locale/vi');
    return (
        <div>
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={faker.random.image()}
                title={faker.name.title()}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Paper className={classes.paper} elevation={0}>
                        <Link href="#" className={classes.link} gutterBottom>{faker.name.title()}</Link>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant="caption" gutterBottom color="inherit"><AccessTime fontSize="inherit"/>{faker.date.past().toLocaleString()}&nbsp;</Typography>
                        <Typography variant="caption" gutterBottom color="inherit"><Person fontSize="inherit"/>{faker.name.findName()}</Typography>
                    </Paper>
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant="h6" gutterBottom color="inherit">{faker.random.words()}</Typography>                        
                    </Paper>
                </CardContent>
            </div>
            </Card>
        </div>
    )
}

export default Sigle
