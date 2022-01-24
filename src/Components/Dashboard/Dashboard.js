import { Button, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './Dashboard.module.css'

const totalCompte = [
    {date:'January', name:'Project A Invoice 1/3', cost:'1000', condition:'paid', marked:'#68cb78'},
    {date:'January', name:'Salarys', cost:'12000', condition:'paid', marked:'#68cb78'},
    {date:'January', name:'Project A Invoice 2/3', cost:'95000', condition:'paid', marked:'#68cb78'},
    {date:'February', name:'Project C ', cost:'1000', condition:'paid', marked:'#68cb78'},
    {date:'February', name:'Project D', cost:'15000', condition:'open', marked:'#dbdbdb'},
    {date:'February', name:'Salarys', cost:'20000', condition:'open', marked:'#dbdbdb'},
    {date:'February', name:'Project B', cost:'10000', condition:'speculation', marked:'#008ad6'},
    {date:'March', name:'Salarys', cost:'20000', condition:'scanario', marked:'#dbdbdb'},
    {date:'March', name:'Project E', cost:'2600000', condition:'open', marked:'#dbdbdb'},
    {date:'March', name:'Project ABC', cost:'25000', condition:'speculation', marked:'#008ad6'},
    {date:'April', name:'Salarys', cost:'2000000', condition:'open', marked:'#dbdbdb'},
    {date:'April', name:'Project ABC', cost:'1500000', condition:'open', marked:'#dbdbdb'},
    {date:'May', name:'Salarys', cost:'20000', condition:'open', marked:'#dbdbdb'},
    {date:'May', name:'Project F', cost:'15000', condition:'open', marked:'#dbdbdb'},
    {date:'May', name:'Hosting', cost:'250000', condition:'open', marked:'#dbdbdb'},
    {date:'May', name:'Project G', cost:'1500000', condition:'open', marked:'#dbdbdb'},
    {date:'June', name:'Salarys', cost:'20000', condition:'open', marked:'#dbdbdb'},
]

const styleForPaper = {
    width: '96vw',
    height: '20vh',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
const Dashboard = () => {
    const [jan, setJan] = useState(totalCompte.filter(compte=>compte.date.toLocaleLowerCase()==='january'));
    const [feb, setFeb] = useState(totalCompte.filter(compte=>compte.date.toLocaleLowerCase()==='february'));
    const [mar, setMar] = useState(totalCompte.filter(compte=>compte.date.toLocaleLowerCase()==='march'));
    const [apr, setApr] = useState(totalCompte.filter(compte=>compte.date.toLocaleLowerCase()==='april'));
    const [may, setMay] = useState(totalCompte.filter(compte=>compte.date.toLocaleLowerCase()==='may'));
    const [jun, setJUn] = useState(totalCompte.filter(compte=>compte.date.toLocaleLowerCase()==='june'));

    
    return (
        <>
         <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
                <Typography variant="h6" gutterBottom component="div">
                    Income/Expenses
                </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <Grid container spacing={2}>

                {/* january */}
                    <Grid item xs={12} md={2}>
                       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                       <Typography variant="h6" gutterBottom component="div">
                            January
                        </Typography>
                        <button className={styles.addIcon}><AddIcon/></button>
                       </div>


                        <Grid container style={{marginTop:'1rem'}} spacing={3}>
                            { jan.map(j=><Grid key={j?.cost} item xs={12}>
                                    <Paper style={{borderLeft:`0.5rem solid ${j.marked}`, backgroundColor:`${j.name.toLocaleLowerCase()==='salarys' && '#ffebed'}`}} className={`${styles.paper}`} elevation={2}>
                                        <button className={styles.moreViewIcon}>
                                            <IconButton
                                            size='small'
                                            style={{transform: 'rotate(90deg)', height:'1px'}}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                        </button>
                                        <Typography sx={{fontWeight:'bold'}}  variant="p" display="block" gutterBottom>
                                            {j.name}
                                        </Typography>
                                        <Typography style={{textDecoration:'line-through'}} variant="body2" gutterBottom>
                                            ${j.cost}
                                        </Typography>
                                        <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                                            <Typography className={styles.condition} variant="caption" display="block" gutterBottom>
                                                {j.condition}
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category1}`} variant="caption" display="block" gutterBottom>
                                                         ABC
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category2}`} variant="caption" display="block" gutterBottom>
                                                         Sales
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category3}`} variant="caption" display="block" gutterBottom>
                                                         Projects
                                                     </Typography>
                                                </span>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            )

                            }
                        </Grid>
                    </Grid>

                {/* february */}
                    <Grid item xs={12} md={2}>
                       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                       <Typography variant="h6" gutterBottom component="div">
                            February
                        </Typography>
                        <button className={styles.addIcon}><AddIcon/></button>
                       </div>


                        <Grid container  style={{marginTop:'1rem'}}  spacing={3}>
                            { feb.map(j=><Grid key={j?.cost} item xs={12}>
                                    <Paper  style={{borderLeft:`0.5rem solid ${j.marked}`, backgroundColor:`${j.name.toLocaleLowerCase()==='salarys' && '#ffebed'}`}} className={styles.paper} elevation={2}>
                                        <button className={styles.moreViewIcon}>
                                            <IconButton
                                            size='small'
                                            style={{transform: 'rotate(90deg)', height:'1px'}}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                        </button>
                                        <Typography sx={{fontWeight:'bold'}}  variant="p" display="block" gutterBottom>
                                            {j.name}
                                        </Typography>
                                        <Typography style={{textDecoration:'line-through'}} variant="body2" gutterBottom>
                                            ${j.cost}
                                        </Typography>
                                        <div  style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                                            <Typography className={styles.condition} variant="caption" display="block" gutterBottom>
                                                {j.condition}
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category1}`} variant="caption" display="block" gutterBottom>
                                                         ABC
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category2}`} variant="caption" display="block" gutterBottom>
                                                         Sales
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category3}`} variant="caption" display="block" gutterBottom>
                                                         Projects
                                                     </Typography>
                                                </span>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            )

                            }
                        </Grid>
                    </Grid>

                    {/* march */}
                    <Grid item xs={12} md={2}>
                       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                       <Typography variant="h6" gutterBottom component="div">
                            March
                        </Typography>
                        <button className={styles.addIcon}><AddIcon/></button>
                       </div>

                        <Grid  style={{marginTop:'1rem'}}  container spacing={3}>
                            { mar.map(j=><Grid key={j?.cost} item xs={12}>
                                    <Paper style={{borderLeft:`0.5rem solid ${j.marked}`, backgroundColor:`${j.name.toLocaleLowerCase()==='salarys' && '#ffebed'}`}} className={styles.paper} elevation={2}>
                                        <button className={styles.moreViewIcon}>
                                            <IconButton
                                            size='small'
                                            style={{transform: 'rotate(90deg)', height:'1px'}}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                        </button>
                                        <Typography sx={{fontWeight:'bold'}}  variant="p" display="block" gutterBottom>
                                            {j.name}
                                        </Typography>
                                        <Typography style={{textDecoration:'line-through'}} variant="body2" gutterBottom>
                                            ${j.cost}
                                        </Typography>
                                        <div  style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                                            <Typography className={styles.condition} variant="caption" display="block" gutterBottom>
                                                {j.condition}
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category1}`} variant="caption" display="block" gutterBottom>
                                                         ABC
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category2}`} variant="caption" display="block" gutterBottom>
                                                         Sales
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category3}`} variant="caption" display="block" gutterBottom>
                                                         Projects
                                                     </Typography>
                                                </span>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            )

                            }
                        </Grid>
                    </Grid>

                    {/* april */}
                    <Grid item xs={12} md={2}>
                       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                       <Typography variant="h6" gutterBottom component="div">
                            April
                        </Typography>
                        <button className={styles.addIcon}><AddIcon/></button>
                       </div>


                        <Grid  style={{marginTop:'1rem'}}  container spacing={3}>
                            { apr.map(j=><Grid key={j?.cost} item xs={12}>
                                    <Paper style={{borderLeft:`0.5rem solid ${j.marked}`, backgroundColor:`${j.name.toLocaleLowerCase()==='salarys' && '#ffebed'}`}} className={styles.paper} elevation={2}>
                                        <button className={styles.moreViewIcon}>
                                            <IconButton
                                            size='small'
                                            style={{transform: 'rotate(90deg)', height:'1px'}}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                        </button>
                                        <Typography sx={{fontWeight:'bold'}}  variant="p" display="block" gutterBottom>
                                            {j.name}
                                        </Typography>
                                        <Typography style={{textDecoration:'line-through'}} variant="body2" gutterBottom>
                                            ${j.cost}
                                        </Typography>
                                        <div  style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                                            <Typography className={styles.condition} variant="caption" display="block" gutterBottom>
                                                {j.condition}
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category1}`} variant="caption" display="block" gutterBottom>
                                                         ABC
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category2}`} variant="caption" display="block" gutterBottom>
                                                         Sales
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category3}`} variant="caption" display="block" gutterBottom>
                                                         Projects
                                                     </Typography>
                                                </span>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            )

                            }
                        </Grid>
                    </Grid>

                    {/* may */}
                    <Grid item xs={12} md={2}>
                       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                       <Typography variant="h6" gutterBottom component="div">
                            May
                        </Typography>
                        <button className={styles.addIcon}><AddIcon/></button>
                       </div>


                        <Grid  style={{marginTop:'1rem'}}  container spacing={3}>
                            { may.map(j=><Grid key={j?.cost} item xs={12}>
                                    <Paper style={{borderLeft:`0.5rem solid ${j.marked}`}} className={styles.paper} elevation={2}>
                                        <button className={styles.moreViewIcon}>
                                            <IconButton
                                            size='small'
                                            style={{transform: 'rotate(90deg)', height:'1px'}}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                        </button>
                                        <Typography sx={{fontWeight:'bold'}} variant="p" display="block" gutterBottom>
                                            {j.name}
                                        </Typography>
                                        <Typography style={{textDecoration:'line-through'}} variant="body2" gutterBottom>
                                            ${j.cost}
                                        </Typography>
                                        <div  style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                                            <Typography className={styles.condition} variant="caption" display="block" gutterBottom>
                                                {j.condition}
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category1}`} variant="caption" display="block" gutterBottom>
                                                         ABC
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category2}`} variant="caption" display="block" gutterBottom>
                                                         Sales
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category3}`} variant="caption" display="block" gutterBottom>
                                                         Projects
                                                     </Typography>
                                                </span>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            )

                            }
                        </Grid>
                    </Grid>

                    {/* june */}
                    <Grid item xs={12} md={2}>
                       <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                       <Typography variant="h6" gutterBottom component="div">
                            June
                        </Typography>
                        <button className={styles.addIcon}><AddIcon/></button>
                       </div>


                        <Grid  style={{marginTop:'1rem'}}  container spacing={3}>
                            { jun.map(j=><Grid key={j?.cost} item xs={12}>
                                    <Paper style={{borderLeft:`0.5rem solid ${j.marked}`, backgroundColor:`${j.name.toLocaleLowerCase()==='salarys' && '#ffebed'}`}} className={styles.paper} elevation={2}>
                                        <button className={styles.moreViewIcon}>
                                            <IconButton
                                            size='small'
                                            style={{transform: 'rotate(90deg)', height:'1px'}}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                        </button>
                                        <Typography sx={{fontWeight:'bold'}} variant="p" display="block" gutterBottom>
                                            {j.name}
                                        </Typography>
                                        <Typography style={{textDecoration:'line-through'}} variant="body2" gutterBottom>
                                            ${j.cost}
                                        </Typography>
                                        <div  style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                                            <Typography className={styles.condition} variant="caption" display="block" gutterBottom>
                                                {j.condition}
                                            </Typography>

                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category1}`} variant="caption" display="block" gutterBottom>
                                                         ABC
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category2}`} variant="caption" display="block" gutterBottom>
                                                         Sales
                                                     </Typography>
                                                </span>
                                                <span>
                                                     <Typography className={`${styles.category} ${styles.category3}`} variant="caption" display="block" gutterBottom>
                                                         Projects
                                                     </Typography>
                                                </span>
                                            </div>
                                        </div>
                                    </Paper>
                                </Grid>
                            )

                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
};

export default Dashboard;