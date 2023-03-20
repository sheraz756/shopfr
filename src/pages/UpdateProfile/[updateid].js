import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Head from "next/head";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
// mui imports
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
// import { useEffect } from "react";
import DateInput from "../../components/common/menu/dateInput";
import dayjs from "dayjs";
import axios from "axios";
// const stringify = require("json-stringify-safe");
// custom inputs

const index = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [userimg, setuserimg] = useState(null);
  const [id, setid] = useState("");
  const [dob, setDob] = useState();
  const token = window.localStorage.getItem("JWTtoken");
  var { _doc } = jwt_decode(token);
  const _id = _doc._id
 
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || {});
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const handleUpdate = (newValue) => {
    const updatedData = { ...data, field: newValue };
    setData(updatedData);
  };
  const formData = new FormData();

  formData.append("userimg", userimg);
 

  // console.log(formData)
  const updatePost= {
    _id,
    name,
    phone,
    email,
    address,
    qualification,
    dob,
    formData
  }
  async function UserProfile() {
    try{
   const res =  await  axios.post(`http://82.180.132.111:4500/user/${_id}`,formData,{
      headers: {
        Authorization: `Bearer ${JWTtoken}`,
      },
    },
      )
    console.log(res)
   console.log(formData)

console.log(res)    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <Box>
      <Container maxWidth="xl">
        <Card sx={{ p: 4 }}>
          <Box
            sx={{
              height: 80,
              width: 120,
              // minHeight: "20vh",
              position: "relative",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundImage: `url(http://82.180.132.111:4500/${userimg})`,
              backgroundPosition: "top left",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
   
            <img src={`http://82.180.132.111:4500/${userimg}`} alt="" />
       
          </Box>
          <CardContent>
            <Box sx={{ mt: 12 }}>{/* <EditForm />/ */}</Box>
          </CardContent>
        </Card>
      </Container>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Stack
            direction={{ sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "1rem", color: "ActiveBorder", order: { xs: 2, sm: 1 } }}
            >
              Update profile picture
            </Typography>
            <Button variant="contained" component="label" sx={{ order: 1 }}>
              Upload File
              {/* <input type="file" value={userimg} /> */}
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel htmlFor="firstname" sx={{ fontSize: "20px" }}>
                Full Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                id="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel htmlFor="phone" sx={{ fontSize: "20px" }}>
                Phone Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel htmlFor="email" sx={{ fontSize: "20px" }}>
                Email:
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel htmlFor="address" sx={{ fontSize: "20px" }}>
                Address
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel htmlFor="qualification" sx={{ fontSize: "20px" }}>
                Qualification
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                id="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel htmlFor="qualification" sx={{ fontSize: "20px" }}>
                Qualification
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <DateInput value={dob} onChange={(date) => setDob(date)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "start" }}>
              <InputLabel htmlFor="bio" sx={{ fontSize: "20px" }}>
                Your Bio
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth multiline id="bio" rows={6} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <input type="file" onChange={(e) => setuserimg(e.target.files[0])} />
          <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
            <Button variant="outlined" >Cancel</Button>
            <Button variant="contained" onClick={()=>UserProfile(_doc.Id)}>
              {console.log(_doc._id)}
              Update
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default index;
