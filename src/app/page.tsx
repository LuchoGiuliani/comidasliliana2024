import api from "@/api";

export default async function HomePage() {
  const menu = await api.menu.list();

  console.log("menu", menu);

  const menuFinal = menu.filter((e) => e.isActive === "VERDADERO");

  console.log("menuFinal", menuFinal);

  return (
    <div>
      <div className="">
        {menuFinal.map(({id, name, price, isActive}) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{price}</p>
            <button className="">{isActive ? "Desactivar" : "Activar"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
