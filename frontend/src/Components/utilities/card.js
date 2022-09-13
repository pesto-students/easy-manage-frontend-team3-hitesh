import React from 'react'
import { Card } from 'antd'
const Cards = ({data}) => {
      const fontSize = {
        textAlign: "center",
        fontSize: "30px",
      };
  return (
    <Card>
        <div className="w-100 d-flex flex-column justify-content-center">
        <h3 className="text-center">{data.name}</h3>
        <span style={fontSize}>{data.count}</span>
    </div>
    </Card>
  )
}

export default Cards