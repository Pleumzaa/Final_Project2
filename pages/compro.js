import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router"; // Router to handle navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome React component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ComputerProgramming() {
  const router = useRouter();

  // Function to handle Attendance Checking click event
  const handleAttendanceClick = () => {
    router.push("/checkAcompro"); // Redirect to checkAcompro.html
  };

  // Function to confirm logout action
  const confirmLogout = () => {
    router.push("/"); // Redirect to index.html
  };

  return (
    <>
      <Head>
        <title>Computer Programming</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
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
          background: "linear-gradient(45deg, #bb1900, #fd6d01, #ffb000)",
          color: "#FFFFFF",
          overflow: "hidden",
          position: "relative",
          perspective: "1000px",
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff",
            fontSize: "48px",
            marginBottom: "50px",
          }}
        >
          Computer Programming
        </Typography>

        {/* Container with clickable box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginBottom: "50px",
            zIndex: 10,
            position: "relative",
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
              color: "#FFFFFF",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "5px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.4s ease",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              position: "relative",
              zIndex: 2,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 35px 60px rgba(0, 0, 0, 0.3)",
              },
            }}
            onClick={handleAttendanceClick}
          >
            <FontAwesomeIcon icon={faCheckCircle} size="3x" />
            <Typography sx={{ marginTop: "10px" }}>Attendance Checking</Typography>
          </Box>
        </Box>

        {/* Logout Button */}
        <Button
          className="logout-btn"
          variant="contained"
          sx={{
            padding: "15px 45px",
            fontSize: "20px",
            color: "#FFFFFF",
            backgroundColor: "#C0392B",
            borderRadius: "40px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            position: "fixed",
            bottom: "40px",
            zIndex: 10,
            transition: "all 0.4s ease",
            "&:hover": {
              backgroundColor: "#E74C3C",
              boxShadow: "0 6px 25px rgba(0, 0, 0, 0.4)",
              transform: "translateY(-6px)",
            },
          }}
          onClick={confirmLogout}
        >
          Log Out
        </Button>
      </Box>
    </>
  );
}
