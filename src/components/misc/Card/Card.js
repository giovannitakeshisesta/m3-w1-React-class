import Button from "../Button/Button";

function Card({ img, title, description, id,handleDelete }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Button type="danger" action={() => handleDelete(id)}>DELETE</Button>
      </div>
    </div>
  )
}

export default Card