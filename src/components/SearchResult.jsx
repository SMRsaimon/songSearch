import React from "react";
import { Card, Text } from "./Home/style";

const SearchResult = ({searchResult, result}) => {
 const {artistName,collectionName,collectionPrice}=result
    
  return (
    <>
        
        <Card style={{ width: "90%", marginBottom:"20px" }}>
        <Text>Artist Name: {artistName}</Text>
        <Text>Collection Name: {collectionName}</Text>
        <Text>Collection Price: {collectionPrice}</Text>
        </Card>
    
    </>
  );
};

export default SearchResult;
