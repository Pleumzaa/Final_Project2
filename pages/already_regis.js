import Head from "next/head";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box
        sx={{
          fontFamily: "'Playfair Display', serif",
          background: "linear-gradient(to bottom right, #ff5400, #dacc07 , #ac2f2f)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
          overflow: "hidden",
        }}
      >
        <Box
          className="container"
          sx={{
            backgroundColor: "white",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
            padding: "50px",
            textAlign: "center",
            borderRadius: "12px",
            border: "1px solid #e6e6e6",
            opacity: 0,
            transform: "translateY(30px)",
            animation: "fadeIn 1s forwards ease-in-out",
            "@keyframes fadeIn": {
              "to": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "38px",
              fontWeight: "400",
              marginBottom: "30px",
              color: "#333",
            }}
          >
            Login in
          </Typography>

          <Image
            src="/static/A_simple_flat_orange_checkmark_symbol_inside_a_cir-removebg-preview.png"
            alt="Orange check mark"
            width={280}
            height={280}
            style={{
              marginTop: "20px",
              transition: "transform 0.4s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "300",
              color: "#555",
              marginTop: "25px",
              marginBottom: "20px",
              opacity: 0,
              animation: "fadeInText 1.5s forwards ease-in-out",
              animationDelay: "0.5s",
              "@keyframes fadeInText": {
                "to": {
                  opacity: 1,
                },
              },
            }}
          >
            You are already registered.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
