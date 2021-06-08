import React from 'react'
import {makeStyles}from '@material-ui/core/styles';

export default makeStyles(()=>({
    form:{
        borderSpacing:'5px',
    },
    contentleft:{
        paddingLeft: '20px',
        paddingTop: '15px',
        width:'50%',
        height:'auto',
        float:'left',
    
    },
    select:{
        background:'blue',
        borderRadius:'20px',
        color:'white',
        width:'210px',
        height:'30px',
    },
    option:{
        color:'black',
        background:'white'
      
    },
    
    nameproduct:{
        boder:'none',
        borderRadius:'10px',
        height:'25px',
        width:'100%',
        outline:'0',
        border:'blue solid 2px',
        background:'#e5e5e5'
    },
    description:{
        boder:'none',
        borderRadius:'10px',
        width:'100%',
        outline:'0',
        border:'blue solid 2px',
        background:'#e5e5e5'
    },
    price:{
        boder:'none',
        borderRadius:'10px',
        height:'25px',
        width:'100%',
        outline:'0',
        border:'blue solid 2px',
        background:'#e5e5e5'
    },
    upfile:{
        textAlign:'center',
        border:'black dashed 3px',
        borderRadius:'10px',
        background:'#e5e5e5'
     
    },
    buttonchoose:{
       textTransform:'none',
        marginTop:'-20px',
        height:'20px',
        background:'black',
        width:'80%',
        color:'white',  
        "&:hover": {
            backgroundColor: "black",
          },    
    },
    post:{
        textAlign:'center',
        textTransform:'none',
        width:'80%',
        height:'30px',
        fontSize:'15px',
        background:'blue',
        borderRadius:'20px',
        color:'white',
        "&:hover": {
            backgroundColor: "blue",
          },   
    },
    cancel:{
        textTransform:'none',
        background:'red',
        color:'white',
        borderRadius:'10px',
        height:'20px',
        width:'100px',
        "&:hover": {
            backgroundColor: "red",
          },   
    }

}))

