import Head from "next/head";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function SelectRole() {
  return (
    <>
      <Head>
        <title>Select Role</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/static/test.S.css" />
      </Head>

      <Box
        className="container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#333",
          }}
        >
          Select Your Role
        </Typography>

        <Box
          className="selection"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          {/* Teacher Role */}
          <Box
            className="role teacher"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="/static/pngtree-teachers-day-characters-png-image_6740168.png"
              alt="Teacher"
              width={200}
              height={200}
              className="role-image"
            />
            <Link href="/regis_teacher" passHref>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#ff5722",
                  color: "white",
                  "&:hover": { backgroundColor: "#e64a19" },
                }}
              >
                Teacher
              </Button>
            </Link>
          </Box>

          {/* Student Role */}
          <Box
            className="role student"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="/static/cartoon-graduate-students-icon-free-png.png"
              alt="Student"
              width={200}
              height={200}
              className="role-image"
            />
            <Link href="/regis_student" passHref>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#ff5722",
                  color: "white",
                  "&:hover": { backgroundColor: "#e64a19" },
                }}
              >
                Student
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
