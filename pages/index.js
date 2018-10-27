// import React from 'react    ';
import Web3 from 'web3';
import HealthCare from './../build/contracts/HealthCare.json';
import uuid from 'uuid';
import TruffleContract from 'truffle-contract';

// Components
import UUIDForm from './../components/UIDForm';



export default class extends React.Component {
    state = {
        healthCareInstace: null
    };

    componentDidMount() {
        const web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        web3 = new Web3(web3Provider);
        const healthCare = TruffleContract(HealthCare);
        healthCare.setProvider(web3Provider);
        healthCare.deployed().then((instance) => {
            console.log(instance);
            this.setState(() => ({ healthCareInstace: instance}))
        });
    }

    generateUuid = ({ address }) => {
        // const ui = Math.floor((1 + Math.random()) * 0x10000);
        const ui = 1;
        // console.log(address)
        return this.state.healthCareInstace.addAccident(address, ui);
    }

    render() {
        return (
            <>
            <h1>Hello</h1>
            <UUIDForm onSubmit={this.generateUuid} />
            </>
        )
    }
}