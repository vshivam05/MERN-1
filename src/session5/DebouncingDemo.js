import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import apiData from "./data.json";

// NOTE - See if we can cover createTheme()

/* Step 1: Add mock api data and print it
export default function VideoSearcher(props) {
  const videos = apiData;
  console.log(videos);
  return <div>Hello world</div>;
}

/* Step 2: Display mock data using MUI Card 
export default function VideoSearcher(props) {
  const videosList = apiData.videos;

  return (
    <>
      {videosList.map((video) => {
        const {
          id,
          previewImage,
          genre,
          title,
          releaseDate
        } = video;
        return (
          <VideoCard
            imgLink={previewImage}
            genre={genre}
            title={title}
            releaseDate={releaseDate}
            key={id}
          />
        );
      })}
    </>
  );
}
 */

function VideoCard(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.imgLink}
        alt="Video"
      />
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {props.genre}
        </Typography>
        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography color="text.secondary">{props.releaseDate}</Typography>
      </CardContent>
    </Card>
  );
}

/* Step 3: Use MUI Grid to organise the card data responsively
export default function VideoSearcher(props) {
  const videosList = apiData.videos;

  return (
    <>
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const {
            id,
            previewImage,
            genre,
            title,
            releaseDate
          } = video;
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
 */

/* Step 4: Fetch videos data and display cards for each 
export default function VideoSearcher(props) {
  const [videosList, setVideosList] = useState([]);

  const fetchVideosData = async () => {
    const url = "https://crio-xflix.herokuapp.com/v1/videos";
    const res = await axios.get(url);
    const videos = res.data.videos;
    setVideosList(videos);
  };

  useEffect(() => {
    fetchVideosData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const { id, previewImage, genre, title, releaseDate } = video;
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
*/

/* Step 5: Add search and view no.of API calls for "top" 
export default function VideoSearcher(props) {
  const [videosList, setVideosList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const fetchVideosData = async (titleQuery) => {
    let url = "https://crio-xflix.herokuapp.com/v1/videos";

    // Add search query to the API url
    if (titleQuery !== "") {
      url = `${url}?title=${titleQuery}`;
    }

    const res = await axios.get(url);
    const videos = res.data.videos;
    setVideosList(videos);
  };

  // Fetch data on load and searchKey change
  useEffect(() => {
    fetchVideosData(searchKey);
  }, [searchKey]);

  return (
    <>
      <Box
        // https://mui.com/components/box/#system-props
        mb={2}
      >
        <TextField
          size="small"
          type="text"
          name="search-box"
          placeholder="Search for video title"
          value={searchKey}
          onChange={handleInputChange}
        />
      </Box>
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const { id, previewImage, genre, title, releaseDate } = video;
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
*/

/* Step 6: Add debouncing and view no.of API calls for "top"
export default function VideoSearcher(props) {
  const [videosList, setVideosList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(0);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const fetchVideosData = async (titleQuery) => {
    let url = "https://crio-xflix.herokuapp.com/v1/videos";

    // Add search query to the API url
    if (titleQuery) {
      url = `${url}?title=${titleQuery}`;
    }

    const res = await axios.get(url);
    const videos = res.data.videos;
    setVideosList(videos);
  };

  // Fetch data on load and searchKey change
  useEffect(() => {
    if (debounceTimeout !== 0) {
      clearTimeout(debounceTimeout);
    }
    const newTimeout = setTimeout(() => fetchVideosData(searchKey), 1000);
    setDebounceTimeout(newTimeout);
  }, [searchKey]);

  return (
    <>
      <Box mb={2}>
        <TextField
          size="small"
          type="text"
          name="search-box"
          placeholder="Search for video title"
          value={searchKey}
          onChange={handleInputChange}
        />
      </Box>
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const {
            id,
            previewImage,
            genre,
            title,
            releaseDate
          } = video;
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
*/
/* Step 6 - Alternate: Debouncing in search handler itself instead of useEffect
export default function VideoSearcher(props) {
  const [videosList, setVideosList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(0);

  const handleInputChange = (e) => {
    const newSearchKey = e.target.value;

    setSearchKey(newSearchKey);

    // Debounce logic
    if (debounceTimeout !== 0) {
      clearTimeout(debounceTimeout);
    }
    const newTimeout = setTimeout(() => fetchVideosData(newSearchKey), 500);
    setDebounceTimeout(newTimeout);
  };

  const fetchVideosData = async (titleQuery) => {
    let url = "https://crio-xflix.herokuapp.com/v1/videos";

    // Add search query to the API url
    if (titleQuery) {
      url = `${url}?title=${titleQuery}`;
    }

    const res = await axios.get(url);
    const videos = res.data.videos;
    setVideosList(videos);
  };

  // Fetch data on load
  useEffect(() => {
    fetchVideosData();
  }, []);

  return (
    <>
      <Box mb={2}>
        <TextField
          size="small"
          type="text"
          name="search-box"
          placeholder="Search for video title"
          value={searchKey}
          onChange={handleInputChange}
        />
      </Box>
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const { id, previewImage, genre, title, releaseDate } = video;
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
 */

/* Step 7: Move search and data to different components  */
export default function DebouncingDemo(props) {
  const [videosList, setVideosList] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const fetchVideosData = async (titleQuery) => {
    let url = "https://crio-xflix.herokuapp.com/v1/videos";

    // Add search query to the API url
    if (titleQuery !== "") {
      url = `${url}?title=${titleQuery}`;
    }

    const res = await axios.get(url);
    const videos = res.data.videos;
    setVideosList(videos);
  };

  // Fetch data on load and searchKey change
  useEffect(() => {
    if (debounceTimeout !== 0) {
      clearTimeout(debounceTimeout);
    }
    const newTimeout = setTimeout(() => fetchVideosData(searchKey), 1000);
    setDebounceTimeout(newTimeout);
  }, [searchKey]);

  return (
    <>
      <SearchBox searchKey={searchKey} onSearchKeyChange={handleInputChange} />
      <Grid container spacing={2}>
        {videosList.map((video) => {
          const { id, previewImage, genre, title, releaseDate } = video;
          return (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

// Passing value to display and onchange handler as props to use as callbacks
function SearchBox(props) {
  return (
    <Box mb={2}>
      <TextField
        size="small"
        type="text"
        name="search-box"
        placeholder="Search for video title"
        value={props.searchKey}
        onChange={(e) => props.onSearchKeyChange(e)}
      />
    </Box>
  );
}

// Original - Keeping state and handler within SearchBox
// function SearchBox() {
//   const [searchKey, setSearchKey] = useState("");

//   const handleInputChange = (e) => {
//     setSearchKey(e.target.value);
//   };

//   return (
//     <Box mb={2}>
//       <TextField
//         size="small"
//         type="text"
//         name="search-box"
//         placeholder="Search for video title"
//         value={searchKey}
//         onChange={handleInputChange}
//       />
//     </Box>
//   );
// }
