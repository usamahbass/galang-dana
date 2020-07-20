import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Progress,
  Typography,
  Comment,
  Tooltip,
} from "antd";
import { Consumer } from "../context/context";
import Navbar from "../components/navbar";
import AddComment from "../components/addcomment";
import Donasi from "../components/donasi";
import moment from "moment";

const { Meta } = Card;
const { Text, Title, Paragraph } = Typography;

const Article = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Navbar />
      {/* <Empty description={false} className="empty" /> */}

      <Row className="container-lg">
        <Consumer>
          {({ readArticle, clickDonasi, handleDonasi, donasi }) => (
            <>
              <Col className="article-col" flex={10}>
                <img
                  src={readArticle.img}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    marginBottom: 30,
                  }}
                  alt="img"
                />
                <Title level={4}>{readArticle.title}</Title>
                <Paragraph>{readArticle.text}</Paragraph>
                <AddComment />
              </Col>
              <Col
                className="article-col"
                style={{ margin: "0 20px 20px" }}
                flex={1}
              >
                <Card>
                  <Meta title={readArticle.title} />
                  <Progress percent={readArticle.terkumpul} />
                  <Text>Target {readArticle.target}</Text>
                  <Button
                    onClick={showModal}
                    style={{ marginTop: 30 }}
                    type="primary"
                    danger
                    block
                  >
                    Donasi
                  </Button>
                  <Donasi
                    visible={visible}
                    handleDonasi={handleDonasi}
                    onOk={clickDonasi}
                    onCancel={handleCancel}
                    title="Donasi"
                  />
                </Card>

                {donasi.map((donate) => (
                  <Comment
                    key={donate.jumlah}
                    author={donate.pendonasi}
                    content={donate.jumlah}
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                  />
                ))}
              </Col>
            </>
          )}
        </Consumer>
      </Row>
    </>
  );
};

export default Article;
