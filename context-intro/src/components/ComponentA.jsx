import React, { useContext } from "react"
import DataContext from "../DataContext"
import ComponentC from "../components/ComponentC"

export default function ComponentA() {
  const { userInfo, setUserInfo } = useContext(DataContext)

  return (
    <div>
      <h2>This is Component A</h2>
      <p>
        {userInfo.name}'s favorite color is
        <span style={{ color: userInfo.favColor }}> {userInfo.favColor}</span>
      </p>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "green",
          })
        }
      >
        Change to Green
      </button>

      <button
        onClick={() =>
          setUserInfo({
            ...userInfo,
            favColor: "blue",
          })
        }
      >
        Change back to Blue
      </button>

      <div>
        <ComponentC />
      </div>
    </div>
  )
}
