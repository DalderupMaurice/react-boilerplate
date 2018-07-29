import React, { Component } from "react";
import { notification } from "antd";

import ChainService from "../../services/ChainService";
import MyForm from "../../components/Form/MyForm";
import DataDisplay from "../../components/DataDisplay/DataDisplay";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      acknowledgement: {
        id: "",
        toelatingsType: "Erkenning Basiskennis Bedrijfsbeheer",
        onderneming: "0694.685.789",
        natuurlijkPersoon: "Maurice Dalderup",
        aanvangsDatum: "19/06/2018",
        beginDatum: "19/06/2018",
        eindDatum: "",
        toelatingsFase: "001"
      },
      tx: null,
      txData: null
    };

    this.chainService = new ChainService();
  }

  openNotification = (title, message) => {
    const args = {
      message: title,
      description: message,
      duration: 5
    };
    notification.open(args);
  };

  createAcknowledgement = async values => {
    const { acknowledgement } = this.state;
    acknowledgement.id = values.value;

    const {
      status,
      data: { tx }
    } = await this.chainService.createAcknowledgement(acknowledgement);
    if (status === 200) {
      this.setState({ tx });
      this.openNotification("Transaction Successful!", `Transaction ID: ${tx}`);
    }
  };

  queryAcknowledgement = async values => {
    const id = values.value;

    const { status, data } = await this.chainService.queryAcknowledgement(id);
    if (status === 200) {
      this.setState({ txData: data });
      this.openNotification(
        "Query Successful!",
        `Found transaction with ID: ${id}`
      );
    }
  };

  render() {
    const { tx, txData } = this.state;

    return (
      <div>
        <MyForm
          handleSubmit={this.createAcknowledgement}
          btnText="Send Transaction"
        />
        <DataDisplay asset={tx} />
        <MyForm
          handleSubmit={this.queryAcknowledgement}
          btnText="Query by Id"
        />
        <DataDisplay asset={txData} />
      </div>
    );
  }
}

export default HomePage;
