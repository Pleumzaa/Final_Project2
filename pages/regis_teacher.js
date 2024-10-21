import Head from "next/head";
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [subject, setSubject] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirecting to a different page
    router.push("/already_regis");
  };

  return (
    <>
      <Head>
        <title>Register Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #ff7f50, #ffb74d)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            backgroundColor: "#ff8533",
            padding: "20px",
            borderRadius: "15px",
            width: "500px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            border: "2px solid black",
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", marginBottom: "20px" }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ textAlign: "left", color: "#fff", marginTop: "10px" }}>Name</Typography>
                <TextField
                  fullWidth
                  id="name"
                  placeholder="Enter your Name"
                  required
                  sx={{ margin: "5px 0", borderRadius: "5px", backgroundColor: "#3e2723", input: { color: "#fff" } }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ textAlign: "left", color: "#fff", marginTop: "10px" }}>Surname</Typography>
                <TextField
                  fullWidth
                  id="surname"
                  placeholder="Enter your Surname"
                  required
                  sx={{ margin: "5px 0", borderRadius: "5px", backgroundColor: "#3e2723", input: { color: "#fff" } }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ textAlign: "left", color: "#fff", marginTop: "10px" }}>National ID</Typography>
                <TextField
                  fullWidth
                  id="national-id"
                  placeholder="Enter your National ID"
                  required
                  sx={{ margin: "5px 0", borderRadius: "5px", backgroundColor: "#3e2723", input: { color: "#fff" } }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ textAlign: "left", color: "#fff", marginTop: "10px" }}>Email</Typography>
                <TextField
                  fullWidth
                  type="email"
                  id="email"
                  placeholder="username@kmitl.ac.th"
                  required
                  sx={{ margin: "5px 0", borderRadius: "5px", backgroundColor: "#3e2723", input: { color: "#fff" } }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ textAlign: "left", color: "#fff", marginTop: "10px" }}>Password</Typography>
                <TextField
                  fullWidth
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  sx={{ margin: "5px 0", borderRadius: "5px", backgroundColor: "#3e2723", input: { color: "#fff" } }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ textAlign: "left", color: "#fff", marginTop: "10px" }}>Confirm Password</Typography>
                <TextField
                  fullWidth
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                  sx={{ margin: "5px 0", borderRadius: "5px", backgroundColor: "#3e2723", input: { color: "#fff" } }}
                />
              </Box>
            </Box>

            <FormControl fullWidth sx={{ marginTop: "20px", textAlign: "left" }}>
              <InputLabel sx={{ color: "#fff" }}>Subject</InputLabel>
              <Select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                sx={{ backgroundColor: "#3e2723", color: "#fff", borderRadius: "5px" }}
              >
                <MenuItem value="" disabled>
                  Select your subject
                </MenuItem>
                <MenuItem value="subject1">FEEDBACK CONTROL</MenuItem>
                <MenuItem value="subject2">INTRODUCTION TO ALGORITHMS</MenuItem>
                <MenuItem value="subject3">ADVANCED COMPUTER PROGRAMMING FOR RAI</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              sx={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#ff4500",
                color: "#000",
                marginTop: "20px",
                "&:hover": { backgroundColor: "#ff652f" },
              }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}
