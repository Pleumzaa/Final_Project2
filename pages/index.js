import Head from "next/head";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button, TextField } from "@mui/material";
import Link from "next/link"; // Link component from Next.js
import useBearStore from "@/store/useBearStore";

export default function LoginForm() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D15620",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "70%",
            maxWidth: "900px",
            backgroundColor: "#f6d4b5",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              padding: "40px",
              background: "linear-gradient(135deg, #FF8008, #FFC837)",
              borderRadius: "10px",
              width: "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#3d1308",
                fontSize: "28px",
                marginBottom: "30px",
                fontWeight: "700", // Bold title
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Login
            </Typography>
            <form>
              <Box sx={{ marginBottom: "20px", width: "100%" }}>
                <Typography
                  sx={{
                    color: "#3d1308",
                    fontSize: "14px",
                    marginBottom: "5px",
                    fontWeight: "700", // Bold labels
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Username"
                  required
                  sx={{
                    width: "150%",
                    padding: "10px",
                    fontSize: "16px",
                    backgroundColor: "#3d1308",
                    borderRadius: "5px",
                    input: { color: "#ffffff" },
                    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
                    fontWeight: "400", // Light text for input fields
                    "&::placeholder": {
                      color: "#ddd",
                    },
                  }}
                />
              </Box>
              <Box sx={{ marginBottom: "20px", width: "100%" }}>
                <Typography
                  sx={{
                    color: "#3d1308",
                    fontSize: "14px",
                    marginBottom: "5px",
                    fontWeight: "700", // Bold labels
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  placeholder="Password"
                  required
                  sx={{
                    width: "150%",
                    padding: "10px",
                    fontSize: "16px",
                    backgroundColor: "#3d1308",
                    borderRadius: "5px",
                    input: { color: "#ffffff" },
                    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
                    fontWeight: "400", // Light text for input fields
                    "&::placeholder": {
                      color: "#ddd",
                    },
                  }}
                />
              </Box>
              <Button
                type="submit"
                sx={{
                  width: "150%",
                  padding: "12px",
                  fontSize: "16px",
                  backgroundColor: "#f16322",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "700", // Bold text for button
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: "#f16322",
                  },
                }}
              >
                Sign in
              </Button>
            </form>
            {/* Added sign-up section */}
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "14px",
                fontWeight: "400",
                color: "#3d1308",
              }}
            >
              Don&apos;t have an account?{" "}
              <Link href="/select_role" style={{ color: "#448" }}>
                Create an account
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "55%",
              backgroundColor: "#f6d4b5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Image
              src="/static/students.png"
              alt="Students Image"
              width={450}
              height={300}
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
