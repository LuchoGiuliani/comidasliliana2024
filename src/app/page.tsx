import api from "@/api";

export default async function HomePage() {
  const menu = await api.menu.list();

  const menuFinal = menu.filter((e) => e.isActive === "VERDADERO");

  return (
    <div className="container_menu my-8 p-8">
      <div className=" flex justify-center">
        <div>
          {menuFinal.map(({id, name, price}) => (
            <div key={id} className="flex items-center justify-between  gap-12 ">
              <h3 className=" italic ">{name}</h3>
              <p className=" italic">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
