import React from 'react';
import {Typography, Card, CardContent, CardMedia, Link} from '@material-ui/core';
import ad from './../../../assets/ad.jpg'
import useStyle from './styles';


const Highlight = () => {
    const classes = useStyle();
    var faker = require('faker/locale/vi');
    return (
        <div className={classes.root}>
            <Typography variant="h5" gutterBottom>Tin nổi bật</Typography> 
            
            <Card className={classes.card} elevation={0}>
            <CardMedia
                className={classes.cover}
                image={faker.random.image()}
                title={faker.name.title()}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Link href="#" className={classes.link} gutterBottom>{faker.name.title()}</Link>                           
                </CardContent>
            </div>
            </Card>

            <Card className={classes.card} elevation={0}>
            <CardMedia
                className={classes.cover}
                image={faker.random.image()}
                title={faker.name.title()}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Link href="#" className={classes.link} gutterBottom>{faker.name.title()}</Link>                           
                </CardContent>
            </div>
            </Card>

            <Card className={classes.card} elevation={0}>
            <CardMedia
                className={classes.cover}
                image={faker.random.image()}
                title={faker.name.title()}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Link href="#" className={classes.link} gutterBottom>{faker.name.title()}</Link>                           
                </CardContent>
            </div>
            </Card>

            <Card className={classes.card} elevation={0}>
                <CardMedia
                    className={classes.cover}
                    image={faker.random.image()}
                    title={faker.name.title()}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Link href="#" className={classes.link} gutterBottom>{faker.name.title()}</Link>                           
                    </CardContent>
                </div>
            </Card>

            <Card className={classes.card} elevation={0}>
            <CardMedia
                    className={classes.ad}                    
                    image={ad}
                    title={faker.name.title()}
                />
            </Card>
        </div>
    )
}

export default Highlight
