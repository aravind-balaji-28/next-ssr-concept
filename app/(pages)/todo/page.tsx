"use client"
import React, { useEffect, useState } from "react"

const Page = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  console.log("editDescription: ", editDescription);
  const [editId, setEditId] = useState("")

  useEffect(() => {
    fetch('/api/todos', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => res.json()).then((result) => {
      setData(result)
    }).catch((err) => {
      console.log("todo fetch error", err)
    })
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        isComplete: false
      })
    }).then((res) => res.json()).then((result) => {
      console.log(result)
      return setData((prev): any => {
        return [...prev, { ...result }]
      })

    }).catch((err) => {
      console.log(err)
    })
    setTitle("")
    setDescription("")
  }


  const onDelete = (id: string) => {
    fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((res) => res.json()).then((result) => {
      console.log("result: delete", result);
      if (result.success) {
        setData((prev): any => {
          return prev.filter((item: any) => item._id !== id)
        })
      }
    })
  }
  const onUpdate = (id: string) => {
    fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        title: editTitle,
        description: editDescription,

      })
    }).then((res) => res.json())
      .then((result) => {
        console.log("result: ", result.data);
        setData((prev: any) =>
          prev.map((item: any) =>
            item._id === id
              ? result.data
              : item
          )
        )
        setEditId("")
        setEditTitle("")
        setEditDescription("")

      })
      .catch((err) => {
        console.log("err: ", err);
      })
  }
  console.log('data', data)
  return <>
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "0 auto" }}>
      <h5>Todo Task</h5>
      <input type="text" className="form-control" value={title} onChange={(e) => {
        setTitle(e.target.value)
      }} />
      <input type="text" className="form-control" value={description} onChange={(e) => {
        setDescription(e.target.value)
      }} />

      <button type="submit" className="btn btn-sm btn-info">Submit</button>
    </form>

    <ul>
      {data?.length > 0 && data.map((item: any, i) => {
        console.log(item._id, 'tem._id')
        return <>
          <li key={item._id}>
            {editId === item._id ? <>
              <input type="text" value={editTitle} className="form-control"
                onChange={(e) => {
                  setEditTitle(e.target.value)
                }}
              />
              <input type="text" value={editDescription} className="form-control"
                onChange={(e) => {
                  setEditDescription(e.target.value)
                }}

              />
            </>

              :
              <>
                {item?.title} - {item?.description}
              </>
            }
            &nbsp;
            <button className="btn btn-danger btn-sm" onClick={() => {
              if (editTitle !== "" || editDescription !== "") {
                onUpdate(item._id)
              } else {
                setEditTitle(item.title)
                setEditDescription(item.description)
                setEditId(item._id)

              }
            }}>Edit</button>
            &nbsp;
            <button className="btn btn-danger btn-sm" onClick={() => {
              onDelete(item._id)
            }}>Delete</button>
          </li>
        </>
      })}
    </ul>
  </>
}
export default Page