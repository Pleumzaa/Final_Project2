import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router"; // for handling navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Algorithm() {
  const router = useRouter();

  // Function to handle Attendance Checking click event
  const handleAttendanceClick = () => {
    router.push("/checkAalgo"); // Navigate to checkAalgo page
  };

  // Function to confirm logout action
  const confirmLogout = () => {
    router.push("/"); // Navigate to the homepage (index page)
  };

  return (
    <>
      <Head>
        <title>Algorithm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box
        sx={{
          fontFamily: "'Poppins', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          margin: 0,
          background: "linear-gradient(45deg, #bb1900, #fd6d01, #ffb000)",
          color: "#FFFFFF",
          overflow: "hidden",
          position: "relative",
          perspective: "1000px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            marginBottom: "50px",
            zIndex: 10,
            position: "relative",
          }}
        >
          Algorithm
        </Typography>

        <Box
          className="container"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            zIndex: 10,
            position: "relative",
            marginBottom: "50px",
          }}
        >
          {/* Box: Attendance Checking */}
          <Box
            className="box"
            sx={{
              width: "250px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "5px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.4s ease",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              color: "#FFFFFF",
              "&:hover": {
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
                transform: "translateY(-5px)",
              },
            }}
            onClick={handleAttendanceClick}
          >
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Attendance Checking
            </Typography>
          </Box>
        </Box>

        {/* Logout Button */}
        <Button
          className="logout-btn"
          onClick={confirmLogout}
          sx={{
            padding: "15px 45px",
            fontSize: "20px",
            color: "#FFFFFF",
            backgroundColor: "#C0392B",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            transition: "all 0.4s ease",
            position: "fixed",
            bottom: "40px",
            zIndex: 10,
            "&:hover": {
              backgroundColor: "#E74C3C",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.4)",
              transform: "translateY(-6px)",
            },
          }}
        >
          Log Out
        </Button>
      </Box>
    </>
  );
}
