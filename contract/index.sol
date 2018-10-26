pragma solidity ^0.4.2;

contract HealthCare {
    struct Report {
        uint data1;
        uint data2;
        uint data3;
    }
    
    mapping(uint => Report[]) public reports;

    function createReport(uint id, uint data1, uint data2, uint data3) public {
        reports[id].push(Report(data1, data2, data3));
    }

    function getReports(uint id) public view returns (uint[], uint[], uint[]) {
        uint[] data1Array;
        uint[] data2Array;
        uint[] data3Array;
        for(uint i = 0; i < 3; i++) {
            data1Array.push(reports[id][i].data1);
            data2Array.push(reports[id][i].data2);
            data3Array.push(reports[id][i].data3);
        }
        return (data1Array, data2Array, data3Array);
    }
}
