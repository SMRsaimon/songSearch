import React, { useEffect, useState } from "react";
import "./Home.css";
import {
  Card,
  CardContainer,
  Container,
  ContainerWrapper,
  Text,
} from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import RepositoryList from "../RepositoryList";
import SearchResult from "../SearchResult";

const Home = () => {
  const [result, setResult] = useState([]);
  const [searchResult, setSearchResult] = useState("");

 

  useEffect(() => {

 
    fetch(`https://itunes.apple.com/search?term=${searchResult}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  }, [searchResult]);

  const hendelSearch = (e) => {

    console.log(e.target.value)
    if (e.target.value) {
      setSearchResult(e.target.value);
    } else {
      setResult([]);
    }
  };




  return (
    <ContainerWrapper>
      <Container>
        <Card>Repository Search</Card>
        <Card>
          <Text>Get details of repositories</Text>
          <span className="searchContainer">
            <input
              className="search-box"
              type="search"
              onChange={(e) => hendelSearch(e)}
              name="search"
              id="search"
            />
            <span>
              <AiOutlineSearch />
            </span>
          </span>
        </Card>

        {result.length === 0 ? (
          <>
            <RepositoryList />{" "}
          </>
        ) : (
          <>
            <CardContainer style={{ marginTop: "50px" }}>
              <Text>Search query: {searchResult}</Text>
              <Text>Total number of matching repos: {result.length}</Text>

              {result.map((x) => (
                <SearchResult result={x} />
              ))}
            </CardContainer>
          </>
        )}
      </Container>
    </ContainerWrapper>
  );
};

export default Home;
// {
//     searchResult.map(x=><li>{x.artistName}</li>)
// }
