import React from 'react';
import { Grid, Button, Typography, Slider } from '@material-ui/core';
import useStyle from './Style';
import { ArrowForwardIos } from '@material-ui/icons';

const Header = () => {
    const classes = useStyle();
    return (
        <div>
            <Grid containerdirection="column" justify="space-between" alignItems="stretch" >
                <Grid className={classes.top} xs={15} container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid container direction="row" justify="flex-start" alignItems="center" >
                        <Grid item xs={0}><Button className={classes.topbutton} href="#" color="primary">Trang chủ</Button></Grid>
                        <Grid item xs={0} style={{ marginTop: '5px' }}><ArrowForwardIos /></Grid>
                        <Grid item xs={0}><Button className={classes.topbutton} href="#" color="primary">Toàn quốc</Button></Grid>
                        <Grid item xs={0} style={{ marginTop: '5px' }}><ArrowForwardIos /></Grid>
                        <Grid item xs={0}><Button className={classes.topbutton} href="#" color="primary">Tất cả</Button></Grid>
                        <Grid item xs={0}>
                            <select className={classes.select}>
                                <option className={classes.option}>Danh mục</option>
                                <option className={classes.option}>Tivi</option>
                                <option className={classes.option}>Laptop</option>

                            </select>
                        </Grid>
                        <Grid style={{marginLeft:'5px'}} item xs={1}>
                            <select className={classes.select}>
                                <option className={classes.option}>Khu vực</option>
                                <option className={classes.option}>Quận 1</option>
                                <option className={classes.option}>Quận 2</option>
                                <option className={classes.option}>Quận 3</option>
                            </select>
                        </Grid>
                    </Grid>


                </Grid>
                <Grid className={classes.bottom} container item xs={12} spacing={1}  >
                    <Grid item xs={0}><Button className={classes.butbottom} href="#" color="primary">Tất cả</Button></Grid>
                    <Grid item xs={0}><Button className={classes.butbottom} href="#" color="primary">Cá nhân</Button></Grid>
                    <Grid item xs={0}><Button className={classes.butbottom} href="#" color="primary">Bán chuyên</Button></Grid>
                    <Grid item xs={0}>
                        <select className={classes.select}>
                            <option className={classes.option}>Sắp xếp</option>
                            <option className={classes.option}>Tăng dần</option>
                            <option className={classes.option}>Giảm dần</option>
                        </select>
                    </Grid>
                    <Grid item xs={1}><Slider /></Grid>
                </Grid>


            </Grid>
        </div>
    )
}

export default Header;
