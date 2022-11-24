import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import TransactionCard from '../TransactionCard/TransactionCard';
import Piechart from '../Charts/Piechart';
import '../../Styles/Color.css';
import  '../Dashboard/Dashboard.css';
import Logo from '../../Img/black_white_logo.png';
import AddExpense from '../AddExpense/AddExpense';
import SettleUp from '../SettleUp/SettleUp';
import Money from '../../Img/money.png';
import Rupees from '../../Img/rupee.svg';
import AmountCard from '../AmountCard/AmountCard';
import GetBack from '../../Img/getBack.png';
import Give from '../../Img/donation.png';
import Payment from '../../Img/payment.png';

const drawerWidth = 250
const mobiledrawerWidth = '100%'
const main_primary="#0277bd"
const main_secondary = "#039be5"
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // background:`linear-gradient(90deg,white 0%, lightBlue 100%)`,
    height:'100vh'
  },
  logo:{
    width:'200px'
  },
  sideLogo:{
    width:'170px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight:'none',
    '@media (max-width: 500px)':{
        width: mobiledrawerWidth
    }
  },
  drawerHeader: {
    position:'sticky',
    top:'0',
    overflow:'hidden',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    color:'white',
    padding: '0px',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor:main_primary,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight:'700',
    color:'#616161'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  transaction_btn:{
    textAlign:'left',
    width:'100%',
    backgroundColor: main_secondary,
    color:'white',
    borderRadius: '0px',
    '&:hover':{
      backgroundColor:main_primary,
      color: 'white',
      borderRadius: '0px',
      transitionDuration: '0.5s',
    }
  },
  drawer_footer_btn:{
    backgroundColor: main_secondary,
    color:'white',
    borderRadius: '0px',
    '&:hover':{
      backgroundColor:main_primary,
      color: 'white',
      borderRadius: '0px',
      transitionDuration: '0.5s',
    },
    '@media (max-width:500px)':{
      justifyContent : 'left'
    }
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick =(panel)=>{
    if(expanded === panel) setExpanded(false);
    if(expanded !== panel) setExpanded(panel);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    setExpanded("panel4")
  },[]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{backgroundColor:main_primary}}
      >
        <Toolbar className="navbar">
          <div><IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          </div>
          <div className="logo_img">{!open && <img className={classes.logo} src={Logo} alt="logo" />}</div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="inherit">
            {theme.direction === 'ltr' ? <MenuIcon /> : <ChevronRightIcon />}
          </IconButton>
          <div><img src={Logo} alt="logo" className={classes.sideLogo} /></div>
        </div>
        <div className="drawer_collection">Groups</div>
        <List>
          {['Group1', 'Group2', 'Group3', 'Group4'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><PeopleRoundedIcon/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <div className="drawer_collection">Friends</div>
        <List>
          {['Friend1', 'Friend2', 'Friend3'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><PersonRoundedIcon/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </div>
        <Divider/>
        <div>
          <Button className={classes.transaction_btn} variant="contained" onClick={()=>handleClick('panel4')}>Transactions</Button>
        </div>
        <div className="drawer_footer">
          <Button className={classes.drawer_footer_btn} fullWidth>Logout</Button>
        </div>
      </Drawer>
      <main container
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })} 
          >
        <div className="grid_container">
          <div container className="display_statistic_chart">
                  <div className="item_card" onClick={()=>handleClick('panel1')}>
                    <AmountCard color="#D32F2F" icon1={Money} icon2={Rupees} title="Total" amount="+500" />
                  </div>
                  <div className="item_card" onClick={()=>handleClick('panel2')}>
                    <AmountCard color="success" icon1={GetBack} icon2={Rupees} title="Get Back" amount="1000" />
                  </div>
                  <div className="item_card" onClick={()=>handleClick('panel3')}>
                    <AmountCard color="#D32F2F" icon1={Give} icon2={Rupees} title="Give Back" amount="500" />
                  </div>
                  <div className="control_btn">
                        <div className="inner_box_control_btn">
                            <AddExpense className={classes.addexpense}/>
                        </div>
                        <div className="inner_box_control_btn ">
                            <SettleUp className="settleup"/>
                        </div>
                  </div>
          </div>
          <div className="chart"  onClick={()=>handleClick('panel4')}>
              <Piechart/>
          </div>
          <div className="information_card">
              <Accordion id="accordion" expanded={expanded==='panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Total</Typography>
                  <Typography className={classes.secondaryHeading}>find here all expenses</Typography>
                </AccordionSummary>
                <AccordionDetails
                  className="accordion_summary">
                  <Typography>
                    You clicked total card
                  </Typography>
                  
                </AccordionDetails>
            </Accordion>
            <Accordion id="accordion_back" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Get back</Typography>
                <Typography className={classes.secondaryHeading}>
                  what you will get
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion_give_summary">
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                  diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion id="accordion_give" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>Give back</Typography>
                  <Typography className={classes.secondaryHeading}>
                    what you should give
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion_back_summary">
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion id="accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Transactions</Typography>
                <Typography className={classes.secondaryHeading}>
                  all transactions
                </Typography>
              </AccordionSummary>
              <AccordionDetails
              className="accordion_summary">
                <TransactionCard/>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
