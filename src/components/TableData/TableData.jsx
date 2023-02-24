/* eslint-disable react/no-unstable-nested-components */
/** @jsxImportSource @emotion/react */
import { Table, Button, Input, Space } from "antd";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { tableStyle } from "./styles/index";

function TableData() {
  const finalListData = useSelector((state) => state.search.finalListData);
  const totalData = useSelector((state) => state.search.finalListData.length);
  const searchInput = useRef(null);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        role="presentation"
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
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
      ...getColumnSearchProps("fileName"),
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

  useEffect(() => {
    const fetchData = () => {
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: totalData,
        },
      });
    };

    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <Table
      css={tableStyle}
      columns={columns}
      rowKey={(finalListData) => finalListData.fileName}
      dataSource={finalListData}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
    />
  );
}

export default TableData;
