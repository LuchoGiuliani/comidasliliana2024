import api from "@/api"

export default async function HomePage() {
  const menu = await api.menu.list()
  return <div>
    <div className="">
      {menu.map(({id,name,price,isActive}) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{price}</p>
          <button className="" >
            {isActive ? "Desactivar" : "Activar"}
          </button>
        </div>
      ))}
    </div>

    
  </div>;
}
