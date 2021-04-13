import React from 'react'
import {  Avatar, Card, Typography, Table } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import useStyle from './Style';
export const ReviewEvaluation = () => {
    const classes = useStyle();
    return (
        <>
            <Typography variant="h5" className={classes.titleName}>Đánh giá từ người mua </Typography>
            <Table className={classes.tablevalue} >
                <tr >
                    <td>
                        <Card className={classes.buyer} elevation={0}>
                            <Avatar className={classes.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmvlzwW0_cKiwLcS1nRj2rUImwuSSUiXrCw&usqp=CAU" />
                            <Typography className={classes.name}>Anh Vi Cá</Typography>
                            <Typography className={classes.comment}>Hàng tốt đánh giá 10/5 sao</Typography>
                        </Card>
                    </td>
                    <td>
                        <Card className={classes.producttype} elevation={0}>
                            <Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} />
                            Iphone Xs
                        </Card>
                    </td>
                </tr>

                <tr >
                    <td>
                        <Card className={classes.buyer} elevation={0}>
                            <Avatar className={classes.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkog5L0YzJyo4Mo4-X_M95PMFC17-VVaFv8Q&usqp=CAU" />
                            <Typography className={classes.name}>Yasu2k7</Typography>
                            <Typography className={classes.comment}>máy lag thế</Typography>
                        </Card>
                    </td>
                    <td >
                        <Card className={classes.producttype} elevation={0}>
                            <Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} />
                            Màn Hình máy tính siêu to khổng lồ từ LG
                        </Card>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Card className={classes.buyer} elevation={0}>
                            <Avatar className={classes.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8HYOBdQ3fVNVrA71S-rm5njRI1u9Bjyjgg&usqp=CAU" />
                            <Typography className={classes.name}>Gái Nhật </Typography>
                            <Typography className={classes.comment}>Màn hình đẹp mà khong livestream được</Typography>
                        </Card>
                    </td>
                    <td>
                        <Card className={classes.producttype} elevation={0}>
                            <Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} />
                            Màn Hình máy tính siêu to khổng lồ từ SamSum
                        </Card>
                    </td>
                </tr>
            </Table>
        </>
    )
};
export default ReviewEvaluation;
