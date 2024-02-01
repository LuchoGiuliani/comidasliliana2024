/* eslint-disable prettier/prettier */
import api from "@/api";

export default async function HomePage() {
 
  const menu = await api.menu.list();

 

  const menuFinal = menu.filter((e) => e.isActive === "VERDADERO");

  return (
    <div>
     
      <div className=" flex justify-center">
        <div>
          {menuFinal.map(({ id, name, price }) => (
            <div
              key={id}
              className="flex items-center gap-12  justify-between "
            >
              <h3>{name}</h3>
              <p>{price}</p>
              {/* <button className="">{isActive ? "Desactivar" : "Activar"}</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
