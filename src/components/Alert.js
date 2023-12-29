import React from 'react'

export default function Alert(props) {
  return (
    props.alert&&
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <b>{props.alert.type}</b>, {props.alert.msg}

</div>
    </div>
  )
}
