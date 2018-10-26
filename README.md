# 🔥 HashHack 3.0 🔥

![Screenshot of the Login](./Screenshot/banner.png)

## Abstract 🎇

### Problem statement 🤔

- People **do not get informed of the real time situation** of their close one who is admitted in ICU 📈.

- Fraud happens by the authority of presenting the fake data to the relatives and **charge them huge sum of money 💰 for no cause**.

- **Keeping the medical history of a person in an organized manner 📑** that is easily accessible to the person and for the doctor who is going to treat also.

### Proposed Solution 😎

- **By keeping the track of the data on a Block-chain ⛓** network in **real time ⏳** directly from machine with an analysis (to make easily understandable) so that their close ones can see the status.
- This will provide a **robust model which is not interfered by any human being 🤬** and ultimately will lead to **Fraud Free health-care system 👩‍⚕️**.

- The patient's data is updated on a block-chain network. It will keep the **history of the person health throughout his/her life 📄** & Doctors who are treating him or her **can see the history and treat accordingly 💉**.

### Fields Covered

- Block Chain ⛓️
- Machine Learning tool🤖
- Health Care 🏥💓

## UI

![Screenshot of the Login](./Screenshot/Login.png)

## Representational Model

![Model](./Screenshot/model.jpeg)

# Documentation 📃

### function used

| Function    | Signatures    | returned value |
| ----------- | ------------- | -------------- |
| addAccident | address , uId | Data           |

```
function addAccident(address patientAddress, uint uid) public {
        patientData[patientAddress].push(uid);
    }


```

<details><summary>Click to see more</summary><br>

> this function takes the address of node and unique if of node and push and node to the block chain network

</details>
</br>
</br>
</br>

| Function | Signatures | returned value |
| -------- | ---------- | -------------- |
| getUIDS  | address    | data           |

```
function getUIDS(address patientAddress) public view returns (uint[]) {
        return patientData[patientAddress];
    }
```

| Function | Signatures | returned value |
| -------- | ---------- | -------------- |


createReport| uId , data's | Array of reports

```
   function createReport(uint id, uint data1, uint data2, uint data3) public {
        reports[id].push(Report(data1, data2, data3));
    }
```

| Function | Signatures | returned value |
| -------- | ---------- | -------------- |


getReport | uId | Array of data's

```
function getReports(uint id) public view returns (uint[], uint[], uint[]) {
        for(uint i = 0; i < 3; i++) {
            data1Array.push(reports[id][i].data1);
            data2Array.push(reports[id][i].data2);
            data3Array.push(reports[id][i].data3);
        }
        return (data1Array, data2Array, data3Array);
    }
```
