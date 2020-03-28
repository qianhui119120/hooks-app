import React, { useContext } from "react";

export default function Message({ MyContext, loading }) {
  const { created, edited } = useContext(MyContext);

  if (loading) return <p>
    loading......
  </p>

  return (
    <div>
      <h2> Message Page</h2>
      <p>created:{created}</p>
      <p>edited:{edited}</p>
    </div>
  )
}