// import React from 'react    ';
import Web3 from "web3";
import HealthCare from "./../build/contracts/HealthCare.json";
import TruffleContract from "truffle-contract";
import styled from "styled-components";

import Normalize from "./../UI/normalize";
import { Heading, Container, Button, Flex } from "./../UI/global";

// Components
import UUIDForm from "./../components/UIDForm";
import AddAccidentComp from './../components/AddAccident';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #01387f, #007ee4);
`;


export default class extends React.Component {
  state = {
    healthCareInstace: null,
    account: null,
    options: [
      "Add Accident",
      "Get Accident UIDS",
      "Create Report",
      "getReport"
    ],
    selected: 1
  };

  componentDidMount() {
    const web3Provider = new Web3.providers.HttpProvider(
      "http://localhost:7545"
    );
    web3 = new Web3(web3Provider);
    const healthCare = TruffleContract(HealthCare);
    healthCare.setProvider(web3Provider);
    web3.eth.getCoinbase((err, account) => {
      this.setState(() => ({ account }));
    });
    healthCare.deployed().then(instance => {
      console.log(instance);
      this.setState(() => ({ healthCareInstace: instance }));
    });
  }

  generateUuid = ({ address }) => {
    const ui = Math.floor((1 + Math.random()) * 0x10000);
    return this.state.healthCareInstace.addAccident(address, ui, {
      from: this.state.account
    });
  };

  getData = () => {
    this.state.healthCareInstace
      .getUIDS("0xB97697aD8b5894561c6842123c8C4D8cb921C49B")
      .then(data => console.log(data));
  };

  addData = () => {
    this.state.healthCareInstace
      .createReport(1, 1, 2, 3, { from: this.state.account })
      .then(data => console.log(data));
  };

  updateSelected = (i) => {
      this.setState(() => ({
          selected: i
      }))
  }

  render() {
    return (
      <div>
        <Normalize />
        <Background>
          <Heading fs="60px" p="70px 0 0 0" center col="#fff">
            HealtyFy
          </Heading>
          <Container>
              <Flex m="50px 0 0 0" justify="space-evenly">
                    {this.state.options.map((option, i) => (
                    <Button key={option} onClick={() => this.updateSelected(i+1)}>{option}</Button>
                    ))}
              </Flex>
                {this.state.healthCareInstace && <AddAccidentComp account={this.state.account} healthCareInstace={this.state.healthCareInstace}/>}
          </Container>
        </Background>
      </div>
    );
  }
}
