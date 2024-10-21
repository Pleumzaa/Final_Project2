import Head from "next/head";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router"; // Router to handle navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome React component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

export default function FeedbackControl() {
  const router = useRouter();

  // Function to handle Attendance Checking click event
  const handleAttendanceClick = () => {
    router.push("/CheackA"); // Redirect to CheackA.html (assuming the page is dynamic)
  };

  // Function to confirm logout action
  const confirmLogout = () => {
    router.push("/"); // Redirect to index.html (home)
  };

  return (
    <>
      <Head>
        <title>Feedback Control</title>
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
          margin: 0,
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
            textAlign: "center",
            color: "#fff",
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "50px",
          }}
        >
          Feedback Control
        </Typography>

        {/* Container for boxes */}
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
            onClick={handleAttendanceClick}
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
              zIndex: 2,
            }}
          >
            <FontAwesomeIcon icon={faCheckCircle} size="3x" />
            <Typography sx={{ marginTop: "20px" }}>Attendance Checking</Typography>
          </Box>
        </Box>

        {/* Logout Button */}
        <Button
          variant="contained"
          onClick={confirmLogout}
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
