import api from "@/api";

export default async function HomePage() {
  const menu = await api.menu.list();
  const menuFinal = menu.filter((e) => e.isActive === "VERDADERO");

  const categories = [
    {name: "Platos principales", items: menuFinal.filter((e) => e.category === "platos")},
    {name: "Minutas", items: menuFinal.filter((e) => e.category === "minutas")},
    {name: "Ensaladas", items: menuFinal.filter((e) => e.category === "ensaladas")},
    {name: "Guarnicíon", items: menuFinal.filter((e) => e.category === "guarnicion")},
  ];

  return (
    <div className="container_menu my-8 p-8">
      <div className="flex justify-center">
        <div>
          {categories.map(({name, items}) => (
            <div key={name}>
              <h2 className="py-4 text-xl font-bold text-[#f6f6af] underline">{name}</h2>
              {items.map(({id, name, price}) => (
                <div key={id} className=" gap-12 flex items-center justify-between ">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="italic">${price}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
