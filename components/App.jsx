import React from "react";
import { Typography, Box, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    textShadow: "0 0 20px rgba(0,0,0,0.7) ",
    fontWeight: 700,
  },
  subHeading: {
    color: "#ccc",
    textShadow: "0 0 20px rgba(0,0,0,0.7) ",
  },
  sec: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  supportList: {
    marginTop: "10px",
    "& li": {
      fontSize: "20px",
      maxWidth: "500px",
    },
    "& li a": {
      color: theme.palette.primary.main,
    },
  },
  iframe: {
    height: "300px",
    width: "100%",
  },
}));

export default function Home() {
  const styles = useStyles();
  return (
    <div className="container">
      <header>
        <Typography variant="h2" className={styles.mainHeading} align="center">
          #Justice For Jayaraj And Fenix
        </Typography>
        <Typography variant="h5" className={styles.subHeading} align="center">
          Raise your voice to make a change just like we did in George Floyd's
          case, Yes we can do it, Lets do it!
        </Typography>
        <Box mt={2}>
          <Button color="primary" variant="contained" size="large">
            About the movement
          </Button>
        </Box>
      </header>
      <Box className={styles.sec} p={3}>
        <Box mb={1}>
          <Typography variant="h4" color="textPrimary" align="center">
            What happened?
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="body1" color="textSecondary" align="center">
            P Jeyaraj, 58, and his son Fenix, 38, were arrested for allegedly
            keeping their stores open past permitted hours in Tamil Nadu. Both
            men were kept in police custody an entire night and brutally killed
            by the police.
          </Typography>
        </Box>
        <iframe
          className={styles.iframe}
          src="https://www.youtube.com/embed/rLMwJbf2TWM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
      <Box className={styles.sec} p={3}>
        <Box mb={1}>
          <Typography variant="h4" color="textPrimary" align="center">
            Support the movement
          </Typography>
        </Box>
        <Box mb={2}>
          <ul className={styles.supportList}>
            <li>
              <a
                href="https://www.change.org/p/narendra-modi-justice-for-jayaraj-and-fenix?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=30904430-9017-11ea-bf91-c5dcc6e6b414"
                target="_blank"
              >
                Sign the petition
              </a>
            </li>
            <li>
              <a href="https://ctt.ac/9ZG0Q" target="_blank">
                Tweet with #JusticeForJayarajAndFenix
              </a>
            </li>
            <li>
              <a
                href="https://www.ndtv.com/tamil-nadu-news/anger-in-tamil-nadu-after-tuticorin-men-jayaraj-his-son-die-in-police-custody-2252082"
                target="_blank"
              >
                Read the whole incident
              </a>
            </li>
            <li>
              <Typography>
                And very important boycott all the media who is spreading fake
                news among us and not talking about this, boycott all the
                celebrities who aren't talking about this and Protest online on
                social media, Keep this movement alive
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </div>
  );
}
