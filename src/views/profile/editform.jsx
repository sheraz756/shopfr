import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios'
import Head from "next/head";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
// import { Box,   Grid } from "@mui/material";
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
import Check from "./Check";
// const stringify = require("json-stringify-safe");

// custom inputs

const EdithtmlForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [userimg, setuserimg] = useState("");
  const [id, setid] = useState("");
  const [dob, setDob] = useState();
async function getSingleUser()
{
  const res = axios.post(``)
}
//   function updateTokenData(name) {
//     // Get the existing token data from local storage
//     const token = window.localStorage.getItem("data");
//     var { _doc } = jwt_decode(token);
//     console.log(_doc.name)
//     // Update the user's name
//    { _doc.name}
//     console.log(_doc.name)
//     // Encode the updated token data as a JSON string
//     const updatedTokenData = JSON.stringify(_doc.name);
    
  
//     // Update the token data in local storage
//     localStorage.setItem('data', updatedTokenData);
//   }
// console.log(updateTokenData())  
const token = window.localStorage.getItem("JWTtoken");
const JWTtoken = window.localStorage.getItem("JWTtoken");
var { _doc } = jwt_decode(token);
const _id = _doc._id
const userimg1 = _doc.userimg
console.log('userimg1', userimg1)
console.log(userimg1)
  useEffect(() => {
    async function UserProfile() {
      try{
     const res =  await  axios.post(`http://82.180.132.111:4500/userid/id`,{_id},{
        headers: {
          Authorization: `Bearer ${JWTtoken}`,
        },
      },
        )
      setName(res.data.user.name)
      setPhone(res.data.user.phoneno)
      setEmail(res.data.user.email)
      setAddress(res.data.user.address)
      setQualification(res.data.user.qualification)
      setuserimg(_doc.userimg)
        // Update local storage with the updated user data
  
        // Update state to trigger a re-render and display the updated user data
  
        console.log(res.data.user)    }
      catch(e){
        console.log(e)
      }
    }
    UserProfile()
  }, []);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || {});

  const handleUpdate = (newValue) => {
    const updatedData = { ...data, field: newValue };
    setData(updatedData);
    console.log(data)
    localStorage.setItem("data", stringify(updatedData));
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Card sx={{ p: 4 }}>
          <Box
            sx={{
              height: 80,
              width: 120,
              minHeight: "40vh",
              position: "relative",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundImage: `url(http://82.180.132.111:4500/${userimg})`,
              backgroundPosition: "top left",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <Avatar
              sx={{
                height: 120,
                width: 120,
                position: "absolute",
                bottom: 0,
                left: { xs: "50%", sm: "10%", md: "5%", lg: "3%", xl: "2%" },
                transform: {
                  xs: "translate(-50%,50%)",
                  md: "translate(-30%,50%)",
                  lg: "translate(0%,50%)",
                },
              }}
            > */}
            <img src={`http://82.180.132.111:4500/${userimg}`} alt="" />
            {/* </Avatar> */}
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
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
          <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained" onClick={()=>(router.push(`/UpdateProfile/${_doc._id}`))}>
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {/* <Check /> */}
    </Box>
  );
};

export default EdithtmlForm;
