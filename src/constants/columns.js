// eslint-disable-next-line import/prefer-default-export
export const columns = [
  {
    title: "Machine",
    dataIndex: "machineName",
    key: "machineName",
  },
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
  },
  {
    title: "File Name",
    dataIndex: "fileName",
    key: "fileName",
  },
  {
    title: "Date",
    dataIndex: "fileDate",
    key: "fileDate",
  },
  {
    title: "Size",
    dataIndex: "fileSize",
    key: "fileSize",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
];
