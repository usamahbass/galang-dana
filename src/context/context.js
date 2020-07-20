import React, { Component } from "react";
import message from "antd/lib/message";
import Data from "../config/data/artikel.json";
import Payment from "../config/data/payment.json";

let ContextType;
const { Provider, Consumer } = (ContextType = React.createContext());

class ProductProvider extends Component {
  state = {
    readArticle: "",
    articles: Data.data,
    payments: Payment.Data,
    valuedonasi: "",
    valuejumlah: "",
    id: 0,
    img: "",
    title: "",
    target: 0,
    terkumpul: 0,
    text: "",
    donasi: [],
  };

  goToArticle = (article) => {
    this.setState({
      readArticle: article,
    });
  };

  handleDonasi = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleGalang = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clickDonasi = (e) => {
    e.preventDefault();

    // Get article

    this.setState({
      readArticle: {
        ...this.state.readArticle,
        terkumpul: this.state.donasi.jumlah,
      },
    });

    // Adding Comment

    this.state.donasi.push({
      pendonasi: this.state.valuedonasi,
      jumlah: this.state.valuejumlah,
    });

    const num = (this.state.valuejumlah / this.state.readArticle.target) * 100;

    this.setState((prevState) => ({
      readArticle: {
        ...prevState.readArticle,
        terkumpul: +num.toFixed(1),
      },
    }));

    this.setState({
      valuedonasi: "",
      valuejumlah: "",
    });

    message.success("Anda berhasil donasi !");

    console.log(this.state.readArticle.terkumpul);
  };

  makeGalang = () => {
    this.state.articles.push({
      id: 0,
      img: this.state.img,
      title: this.state.title,
      target: this.state.target,
      terkumpul: this.state.terkumpul,
      text: this.state.text,
      donasi: this.state.donasi,
    });

    message.success("Galang dana anda berhasil dibuat !");

    console.log(this.state.articles);
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          goToArticle: this.goToArticle,
          clickDonasi: this.clickDonasi,
          handleDonasi: this.handleDonasi,
          handleGalang: this.handleGalang,
          makeGalang: this.makeGalang,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Provider, Consumer, ContextType, ProductProvider };
