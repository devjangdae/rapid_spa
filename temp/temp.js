const dataSource = [
  {
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    name: "M22ike",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "NName",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "AAge",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "AAddress",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "AAAddress",
    dataIndex: "address2",
    key: "address2",
  },
];
console.log(dataSource);
console.log(columns);
