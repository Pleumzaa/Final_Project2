import Head from "next/head";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AdvanceCompro() {
  return (
    <>
      <Head>
        <title>Advance Compro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Box
        sx={{
          fontFamily: "Arial, sans-serif",
          margin: "20px",
          background: "linear-gradient(90deg, rgba(255,165,0,1) 0%, rgba(255,99,71,1) 50%, rgba(255,140,0,1) 100%)",
          color: "#333",
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            color: "#fff",
            fontSize: "48px",
            padding: "20px",
            backgroundColor: "#ff7f50",
            border: "5px solid #ba3800",
            borderRadius: "10px",
            width: "fit-content",
            margin: "20px auto",
          }}
        >
          ADVANCE COMPRO
        </Typography>

        {/* Diagram */}
        <Box className="diagram" sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Image
            src="/static/image/qrcode-gradient-showcase-5.png" // Make sure the image is in the correct folder
            alt="Advance compro Diagram"
            width={300}
            height={300}
          />
        </Box>

        {/* Scrollable Table */}
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "400px",
            overflowY: "scroll",
            border: "1px solid #fff",
            marginBottom: "20px",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Class 1</TableCell>
                <TableCell>Class 2</TableCell>
                <TableCell>Class 3</TableCell>
                <TableCell>Class 4</TableCell>
                <TableCell>Class 5</TableCell>
                <TableCell>Class 6</TableCell>
                <TableCell>Class 7</TableCell>
                <TableCell>Class 8</TableCell>
                <TableCell>Class 9</TableCell>
                <TableCell>Class 10</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Example data, you can replace this with dynamic data */}
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>A</TableCell>
                <TableCell>101</TableCell>
                <TableCell>Student 1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>B</TableCell>
                <TableCell>102</TableCell>
                <TableCell>Student 2</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              {/* Add more rows as necessary */}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Back Button */}
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
              display: "block",
              width: "100px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#4CAF50",
              color: "white",
              textDecoration: "none",
              margin: "20px auto",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#45a049",
              },
            }}
          >
            Back
          </Button>
        </Link>
      </Box>
    </>
  );
}
