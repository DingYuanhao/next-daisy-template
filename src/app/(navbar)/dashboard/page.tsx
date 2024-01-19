'use client';

import { CustomFormItemProps, renderFormItems } from "@/components/CustomForm/FormItem";
import { CustomModal } from "@/components/CustomModal";
import { CustomTable } from "@/components/CustomTable";
import { MouseEvent } from "react";

export default function Dashboard() {
  // Table Props:
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '李大嘴',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '吕秀才',
      age: 22,
      address: '西湖区湖底公园1号',
    },
  ];
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: any) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <button className="btn btn-sm" onClick={() => { console.log(record); }}>查看</button>
            <button className="btn btn-sm  hover:bg-red-500 hover:border-transparent hover:text-base-200">删除</button>
          </div>
        );
      }
    }
  ];

  // Modal Props:
  const openModal = () => {
    const dialog: any = document.getElementById("my_modal");
    dialog.showModal();
  };

  // Form Props:
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Submitting");
    const dialog: any = document.getElementById("my_modal");
    setTimeout(() => {
      dialog.close();
    }, 500);
  }
  const handleCancel = () => {
    console.log("Canceled");
  }
  const items: CustomFormItemProps[] = [
    {
      label: "用户名",
      name: "username"
    },
    {
      label: "密码",
      name: "password",
      password: true,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Dashboard page content</p>
      
      {/* Table Example */}
      <div className="mt-5 w-full flex flex-col justify-center items-center">
        <CustomTable dataSource={dataSource} columns={columns} />
      </div>

      {/* Modal Example */}
      <div className="mt-5">
        <button className="btn" onClick={openModal}>
          Open
        </button>
        <CustomModal id="my_modal">
          <form method="dialog" className="flex flex-col p-4 mt-4">
            {renderFormItems(items)}

            <div className="flex gap-4 mt-8">
              <button className="btn" onClick={handleSubmit}>Submit</button>
              <button className="btn" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </CustomModal>
      </div>
    </div>
  );
};
