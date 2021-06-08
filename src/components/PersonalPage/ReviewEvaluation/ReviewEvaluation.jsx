import React from 'react'
import {  Avatar, Card, Typography, Table } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import useStyle from './Style';
import faker from 'faker';
export const ReviewEvaluation = () => {
    const classes = useStyle();
    var faker = require('faker/locale/vi');
    return (
        <>
            <Typography variant="h5" className={classes.titleName}>Đánh giá từ người mua </Typography>
            <Table className={classes.tablevalue} >
                <tr >
                    <td>
                        <Card className={classes.buyer} elevation={0}>
                            <Avatar className={classes.avatar} src={faker.image.avatar()} />
                            <Typography className={classes.name}>{faker.internet.userName()}</Typography>
                            <Typography className={classes.comment}>Hàng tốt đánh giá 10/5 sao</Typography>
                        </Card>
                    </td>
                    <td>
                            <Card className={classes.producttype} elevation={0}>
                                {faker.commerce.productName()}
                                <Star style={{ fontSize: 'medium' }} />
                                <Star style={{ fontSize: 'medium' }} />
                                <Star style={{ fontSize: 'medium' }} />
                                <Star style={{ fontSize: 'medium' }} />
                                <Star style={{ fontSize: 'medium' }} />                            
                            </Card>
                    </td>
                </tr>

                <tr >
                    <td>
                        <Card className={classes.buyer} elevation={0}>
                            <Avatar className={classes.avatar} src={faker.image.avatar()} />
                            <Typography className={classes.name}>{faker.internet.userName()}</Typography>
                            <Typography className={classes.comment}>máy lag thế</Typography>
                        </Card>
                    </td>
                    <td >
                        <Card className={classes.producttype} elevation={0}>
                            {faker.commerce.productName()}
                            <Star style={{ fontSize: 'medium' }} />
                            <Star style={{ fontSize: 'medium' }} />
                            <Star style={{ fontSize: 'medium' }} />
                            <Star style={{ fontSize: 'medium' }} />
                        </Card>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Card className={classes.buyer} elevation={0}>
                            <Avatar className={classes.avatar} src={faker.image.avatar()} />
                            <Typography className={classes.name}>{faker.internet.userName()}</Typography>
                            <Typography className={classes.comment}>Màn hình đẹp mà khong livestream được</Typography>
                        </Card>
                    </td>
                    <td>
                        <Card className={classes.producttype} elevation={0}>
                            {faker.commerce.productName()}
                            <Star style={{ fontSize: 'medium' }} />
                            <Star style={{ fontSize: 'medium' }} />
                            <Star style={{ fontSize: 'medium' }} />
                        </Card>
                        </td>
                </tr>
            </Table>
        </>
    )
};
export default ReviewEvaluation;