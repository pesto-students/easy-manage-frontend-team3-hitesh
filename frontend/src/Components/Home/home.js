import {React,useEffect,useState,useCallback} from "react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { MailOutlined,AppstoreOutlined,SettingOutlined } from "@ant-design/icons";

const Home = () => {
  const navigate = useNavigate();

  const [tab, settab] = useState(['home/summary']);

  const setTab = (event) => {
    settab(event.item.props.path);
  };

  const changeTab = useCallback(()=>{
    navigate(tab,{replace:true});
  },[navigate,tab])


  useEffect(() => {
    changeTab();
  }, [changeTab,tab]);
  
  const items = [
    {
      label: (<Link to={"/home/summary"} style={{color:"white"}}>Summary</Link>),
      key: '1',
      icon: <MailOutlined />,
    },
    
    {
      label: 'Admin',
      key: '2',
      icon: <SettingOutlined />,
      
      children: [
        {
      
          label: (<Link to={"/home/admin"}>Show Apartments</Link>),
          key:"4",
          path:"/home/admin",
        },
        {
      
          label: (<Link to={"/home/admin/add-apartment"}>Add Apartments</Link>),
          key:"5"
        },
        {
          
          label: (<Link to={"/home/admin/add-recipient"}>Add Recipient</Link>),
          key:"6"
        },
      ],
    },
    {
      label: 'User Manage',
      key: '3',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
  ];
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    console.log(e)
    setCurrent(e.key);
  };

  
  return (
    <>
            <Menu
              theme="dark"
              onClick={onClick}
               selectedKeys={[current]}
               style={{
                position: "fixed",
                zIndex: 1,
                width: "100%",
              }}
               mode="horizontal" items={items}
            ></Menu>
          <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
          <Outlet />
            </div>
          </div>
          </div>
    </>
  );
};

export default Home;
