import { Card } from "antd";
import React from "react";
import './summary.css'
const Summary = () => {


  const cardStyle = {
    display: "flex",
    borderRadius: "28px",
    width: "100%",
    height: "10.938rem",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "5rem",
  };
  const fontSize = {
    textAlign: "center",
    fontSize: "30px",
  };

  return (
    <>
      <div className="row  d-flex  justify-content-center" style={{marginTop:"6rem"}}>
        <div className="col-sm-12 col-lg-5 " >
          <Card className="bg-primary">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h3  className="text-center">Total Appartments</h3>
              <span style={fontSize}>78</span>
            </div>
          </Card>
        </div>
        <div className="col-sm-12 col-lg-5">
          <Card className="bg-primary">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h3  className="text-center">Total Rooms</h3>
              <span style={fontSize}>32</span>
            </div>
          </Card>
        </div>
        <div className="col-sm-12 col-lg-5 ">
          <Card className="bg-primary">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h3  className="text-center">Booked Rooms</h3>
              <span style={fontSize}>48</span>
            </div>
          </Card>
        </div>
        <div className="col-sm-12 col-lg-5 ">
          <Card className="bg-primary">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h3 className="text-center">Available Rooms</h3>
              <span style={fontSize}>54</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Summary;
