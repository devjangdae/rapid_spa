// eslint-disable-next-line import/prefer-default-export
export const columns = [
  {
    title: "Machine",
    dataIndex: "machineName",
    key: "machineName",
    width: "20%",
    sorter: (a, b) => a.machineName.length - b.machineName.length,
  },
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
    width: "25%",
    sorter: (a, b) => a.categoryName.length - b.categoryName.length,
  },
  {
    title: "File Name",
    dataIndex: "fileName",
    key: "fileName",
    width: "28%",
    sorter: (a, b) => a.fileName.length - b.fileName.length,
  },
  {
    title: "Date",
    dataIndex: "fileDate",
    key: "fileDate",
    width: "15%",
    sorter: (a, b) => a.fileDate - b.fileDate,
  },
  {
    title: "Size",
    dataIndex: "fileSize",
    key: "fileSize",
    width: "12%",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.fileSize - b.fileSize,
  },
];
