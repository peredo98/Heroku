import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import ImageEnlarger from "react-image-enlarger";

import backgroundImage from "../../assets/football_stadium_background.jpg";

import gameScheduleImage from "../../assets/games_schedule.png";
import pickSheetImage from "../../assets/pick_sheet.png";
import standingsImage from "../../assets/standings.png";
import fullPicksOverviewImage from "../../assets/full_pick_overview.png";

const useStyles = makeStyles({
  table: {
    maxWidth: "300",
    padding: 10,
    paddingBottom: 20,
  },
  appHeader: {
    minHeight: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  appHeaderInner: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: `rgba(6, 3, 6, 0.75)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const AppHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.appHeader}>
      <div className={classes.appHeaderInner}>
        <Typography variant="h1" align="center" gutterBottom>
          Tu quiniela
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
          Juega aqui tu quiniela de NFL
        </Typography>
      </div>
    </div>
  );
};

const pointBreakdown = {
  regular: {
    columns: ["Partidos", "ganar", "perder", "empate"],
    items: [["Weeks 1-17", "+2", "-1", "+1"]],
  },
  post: {
    columns: ["Partidos", "ganar", "perder"],
    items: [
      ["Wildcard", "+2", "-2"],
      ["Divisionals", "+4", "-4"],
      ["Championships", "+6", "-6"],
      ["Superbowl", "+8", "-8"],
    ],
  },
};

const PointsBreakdownTable = ({ type }: { type: "regular" | "post" }) => {
  const classes = useStyles();
  const pointBreakdownSection = pointBreakdown[type];
  return (
    <TableContainer className={classes.table}>
      <Table aria-label="point breakdown table">
        <TableHead>
          <TableRow>
            {pointBreakdownSection.columns.map((column) => (
              <StyledTableCell>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pointBreakdownSection.items.map((item: string[]) => (
            <TableRow key={item[0]}>
              {item.map((itemVal) => (
                <StyledTableCell>{itemVal}</StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Rules = () => {
  return (
    <Box pt={4}>
      <Typography variant="h4" align="left" gutterBottom>
        Temporada regular
      </Typography>
      <ul>
        <li>Debes escoger dos equipos por semana</li>
        <li>En las semanas 4-12, puedes no escoger 4 veces</li>
      </ul>
      <PointsBreakdownTable type="regular" />
      <Typography variant="h4" align="left" gutterBottom>
        Playoffs
      </Typography>
      <ul>
        <li>Puedes escoger un equipo por juego</li>
      </ul>
      <PointsBreakdownTable type="post" />
    </Box>
  );
};



const Main = () => {
  return (
    <div>
      <AppHeader />
      <Container maxWidth="md">
        <Rules />
      </Container>
    </div>
  );
};

export default Main;
