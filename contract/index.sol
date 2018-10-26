pragma solidity ^0.4.2;

contract HealthCare {
    struct Report {
        string data1;
        string data2;
        string data3;
    }
    
    mapping(uint => Report) public reports;
    
    function createReport(uint id, string data1, string data2, string data3) public {
        reports[id] = Report(data1, data2, data3); 
    }
}
