import React, { useContext } from "react"
import DataContext from "../DataContext"
import ComponentD from "./ComponentD"

export default function ComponentB() {
  const { userInfo, setUserInfo } = useContext(DataContext)
  return (
    <div className="card">
      <h2>This is Component B</h2>
      <ul>
        <li>Child of App</li>
        <li>Sibling of ComponentA</li>
        <li>Parent of ComponentD</li>
        <li>Uncle/Aunt of ComponentC</li>
      </ul>
      <p>
        {userInfo.name}'s favorite color is
        <span style={{ color: userInfo.favColor }}> {userInfo.favColor} </span>
      </p>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "orange",
          })
        }
      >
        Change to Orange
      </button>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "pink",
          })
        }
      >
        Change to Pink
      </button>

      <div>
        <ComponentD />
      </div>
    </div>
  )
}
