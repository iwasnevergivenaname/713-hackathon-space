import React from "react"
import './Planet.css'
import logo from './logo.png'
import play from './play.png'
import earth from './earth.png'
import mars from './mars.png'
import venus from './venus.png'
import astronaut from './astronaut.png'
// import planet from '../../planet.png'
// import {makeStyles} from "@material-ui/core/styles"
// import Card from "@material-ui/core/Card"
// import CardActionArea from "@material-ui/core/CardActionArea"
// import CardActions from "@material-ui/core/CardActions"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import Button from "@material-ui/core/Button"
// import Typography from "@material-ui/core/Typography"

// const useStyles = makeStyles({
//   root: {
//     margin: 'auto',
//     maxWidth: 345
//   },
//   media: {
//     height: 400,
//     // width: 800,
//   }
// })

export default function Planet() {
  // const classes = useStyles()

  return (
    <>
      <div className='star'>
        <img src={play} alt="star" className='starimg'/>
      </div>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='venus'>
        <img src={venus} alt="venus"/>
      </div>
      <div className='earth'>
        <img src={earth} alt="earth"/>
      </div>
      <div className='mars'>
        <img src={mars} alt="mars"/>
      </div>
      <div className='astronaut'>
        <img src={astronaut} alt=""/>
      </div>
    </>
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image={planet}
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Planet Name
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         facts about a planet
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //     <Button size="small" color="primary">
    //       Learn More
    //     </Button>
    //   </CardActions>
    // </Card>
  )
}
