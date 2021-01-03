import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';



const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      minWidth: 275,
      backgroundColor: "white"
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    // title: {
    //   fontSize: 14,
    // },
    pos: {
      marginBottom: 12,
    },
  });

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];


const BarChart2 = () => {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
        <CardContent>
        <Typography variant="h4" component="h2">
            Silverthread Designs Sales Over Time
            {/* be{bull}nev{bull}o{bull}lent */}
          </Typography>
        <VictoryChart
        responsive={false}
        animate={{
          duration: 500,
          onLoad: { duration: 200 }
        }}
        domainPadding={{ x: 0 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis 
         style={{tickLabels: { angle: 30 }}}
        //  fixLabelOverlap 
        />
        <VictoryBar
          barRatio={1}
          cornerRadius={0} // Having this be a non-zero number looks good when it isn't transitioning, but looks like garbage when it is....
          style={{ data: { fill: "#01579b" } }}
          alignment="middle"
          labels={d => d.y}
          data={[
            { x: "August '20", y: 150000, style: "#f06292" },
            { x: "September '20", y: 250000 },
            { x: "October '20", y: 500020 },
            { x: "November '20", y: 750000 },
            { x: "December '20", y: 1000000 }
          ]}
        />
      </VictoryChart>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    )
}

export default BarChart2

