pragma solidity ^0.4.2;

contract HealthCare {
    struct Report {
        uint data1;
        uint data2;
        uint data3;
    }
    

    mapping(uint => Report[]) public reports;
    mapping(address => uint[]) public patientData;

    function createReport(uint id, uint data1, uint data2, uint data3) public {
        reports[id].push(Report(data1, data2, data3));
    }

    uint[] data1Array;
    uint[] data2Array;
    uint[] data3Array;
    function getReports(uint id) public view returns (uint[], uint[], uint[]) {
        for(uint i = 0; i < 3; i++) {
            data1Array.push(reports[id][i].data1);
            data2Array.push(reports[id][i].data2);
            data3Array.push(reports[id][i].data3);
        }
        return (data1Array, data2Array, data3Array);
    }

    function addAccident(address patientAddress, uint uid) public {
        patientData[patientAddress].push(uid);
    }

    function getUIDS(address patientAddress) public view returns (uint[]) {
        return patientData[patientAddress];
    }
}
