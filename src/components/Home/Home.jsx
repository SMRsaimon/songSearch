import React, { useEffect, useState } from "react";
import "./Home.css"
import { Card, Container, Text } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import RepositoryList from "../RepositoryList";


const Home = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=a`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results);
      });
  }, []);

  console.log(searchResult);
  return (
    <Container>
      <Card>
      Repository Search
      </Card>
      <Card>
         <Text>Get details of repositories</Text>
          <span className="searchContainer">
          <input className="search-box" type="search" name="search" id="search" />
            <span>
                <AiOutlineSearch/>
            </span>
          </span>
      </Card>
      <RepositoryList/>
    </Container>
  );
};

export default Home;
// {
//     searchResult.map(x=><li>{x.artistName}</li>)
// }
