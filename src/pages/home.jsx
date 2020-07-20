import React from "react";
import { Row, Col, Card, Progress, Typography } from "antd";
import { Consumer } from "../context/context";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/homecarousel";
import Navbar from "../components/navbar";

const { Meta } = Card;
const { Text } = Typography;

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Row className="container" gutter={[0, 48]}>
        <Consumer>
          {({ articles, goToArticle }) =>
            articles.map((article) => {
              const description = article.text.substr(0, 50);
              return (
                <Col key={article.id} flex={3}>
                  <Link
                    to={`article/${article.title}`}
                    onClick={goToArticle.bind(this, article)}
                  >
                    <Card
                      style={{ width: 300 }}
                      cover={<img alt="article" src={article.img} />}
                    >
                      <Meta
                        title={article.title}
                        description={description + "..."}
                      />
                      <Progress percent={article.terkumpul} />
                      <Text>Target {article.target}</Text>
                    </Card>
                  </Link>
                </Col>
              );
            })
          }
        </Consumer>
      </Row>
    </>
  );
};

export default Home;
