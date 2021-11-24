import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Button, CardColumns, CardText, CardBody, CardSubtitle, CardImg } from 'reactstrap';
import axios from "axios";
import "./App.css";

// const { Meta } = Card;

// // npx create-react-app appname
// // npm i antd
// // npm i axios

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
        news.map((item, index) => {
          return (
            <CardColumns>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={item.urlToImage}
                  style={{ width: "50%" }}
                />
                <CardBody>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    {item.title}
                  </CardSubtitle>
                  <CardText >
                    {item.content}
                  </CardText>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Button color="primary">
                      Button
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </CardColumns>

          );
        })}
    </div>
  );
}

export default App;
