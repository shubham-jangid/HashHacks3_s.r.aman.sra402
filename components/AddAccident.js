import styled from 'styled-components';
import { Container, Heading, Text } from './../UI/global';

import UIDForm from './UIDForm.js';
const Background = styled.div`
    background: #fff;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.21);
    border-radius: 5px;
    width: 900px;
    margin: 50px auto;
    padding: 10px 30px; 
`

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: this.props.account,
            healthCareInstace: props.healthCareInstace, 
            uid: null
        };
    }

    generateUuid = ({ address }) => {
        const ui = Math.floor((1 + Math.random()) * 0x10000);
        
        this.setState(() => ({
            uid: ui
        }))

        return this.state.healthCareInstace.addAccident(address, ui, {
          from: this.state.account
        });
    };

    render() {
        return (
            <Background>
                <Container>
                    <Heading col="#000" fs="35px" m="50px 0" center>Add Accident</Heading>
                    {this.state.uid && <Text center col="#000" p="10px 0">Your UID is: <strong>{this.state.uid}</strong></Text>}
                    <UIDForm onSubmit={this.generateUuid} />
                </Container>
            </Background>
        )
    }
}