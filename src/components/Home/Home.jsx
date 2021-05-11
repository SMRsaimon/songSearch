import React, {  useState } from "react";
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
import { connect } from "react-redux";
import { requestApiData } from "../../redux/action/userAction";
import { getProfile } from "../../redux/selector";
import { Link } from "react-router-dom";

const Home = ({profile,requestApiData}) => {
  const [name, setName] = useState("");
  
  const hendelSearch = (e) => {
          const data={
            name:e.target.value
          }
          setName(e.target.value)
     requestApiData(data)
  };



  return (
    <ContainerWrapper>
      <Container>
        <Link to="/notMatch" className="text-right">Go to Storybook</Link>
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

        {profile.length === 0 ? (
          <>
            <RepositoryList />
          </>
        ) : (
          <>
            <CardContainer style={{ marginTop: "50px" }}>
              <Text>Search query: {name}</Text>
              <Text>Total number of matching repos: {profile.results.length}</Text>

              {profile.results.map((x) => (
                <SearchResult result={x} />
              ))}
            </CardContainer>
          </>
        )}
      </Container>
    </ContainerWrapper>
  );
};

const mapStateToProps = state => ({
  profile: getProfile(state)
});

const mapDispatchToProps={
  requestApiData:requestApiData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
