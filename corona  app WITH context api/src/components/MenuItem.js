import { useContext, useState } from "react";
import { context1 } from "../contextApi/Store";

const MenuItem = () => {
  const [key, setKey] = useContext(context1);

  const [menuItems] = useState([
    {
      title: "Ülkelere Göre Corone Değerleri",
      value: 1,
    },
    {
      title: "Kayde Geçmiş Tüm Corona Değerleri",
      value: 2,
    },
    {
      title: "Kıtalara Göre Corone Değerleri",
      value: 3,
    },
  ]);

  return (
    <div className="w-auto block">
      <ul className="flex flex-row  mt-4 font-semibold text-xs space-x-8 mt-0 ">
        {menuItems.map((item) => {
          return (
            <li>
              <a
                onClick={() => {
                  setKey(item.value);
                }}
                className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${
                  item.value === key ? "text-blue-800" : "text-gray-400"
                } hover:text-sky-700`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
