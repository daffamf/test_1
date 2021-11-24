import React, { useState, useEffect } from "react";
import { Button,  CardText, CardBody,  CardImg,  Card, CardGroup, CardTitle } from 'reactstrap';
import axios from "axios";
import "./App.css";


function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
      {news &&
        news.map((item) => {

          return (
            <CardGroup>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={item.urlToImage}
                  top="100%"
                  Button="500%"
                  width="50%"

                />
                <CardBody>
                  <CardTitle tag="h5">
                    {item.title}
                  </CardTitle>
                  <CardText>
                    {item.content}
                  </CardText>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Button color="primary">
                      Details
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </CardGroup>

          );
        })}
    </div>
  );
}

export default App;
