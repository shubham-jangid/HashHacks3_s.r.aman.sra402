pragma solidity ^0.4.2;

contract HealthCare {
    struct Report {
        string data1;
        string data2;
        string data3;
    }
    
    mapping(uint => Report[100]) public reports;
    uint[3] public numbers;

    function createReport(uint id, string data1, string data2, string data3) public {
        for(uint i = 0; i < 100; i++) {
            if(reports[id][i]) == 0) {
                reports[id][i] = Report(data1, data2, data3);
            }
        }
    }

    function getReports(uint id) public view returns (Report[]) {
        return reports[id];
    }
}
