// eslint-disable-next-line import/prefer-default-export
export const columns = [
  {
    title: "Machine",
    dataIndex: "machineName",
    key: "machineName",
    width: "20%",
  },
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
    width: "20%",
  },
  {
    title: "File Name",
    dataIndex: "fileName",
    key: "fileName",
    width: "20%",
  },
  {
    title: "Date",
    dataIndex: "fileDate",
    key: "fileDate",
    width: "20%",
  },
  {
    title: "Size",
    dataIndex: "fileSize",
    key: "fileSize",
    width: "20%",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
];
