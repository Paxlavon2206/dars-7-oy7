import React from "react";
import { Search } from "./components/search/search";
import { Buttons } from "./components/buttons/buttons";
import logo from "../../assets/imgs/logo.svg";
import { Modal } from "../../components/ui/modal/modal";
import { useModal } from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";

export const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div className="container">
      <div className="flex gap-[24px] py-2 justify-end">
        <p>Доставка и оплата</p>
        <p>Пункты выдачи</p>
        <p>Поддержка</p>
        <p>+998 90 253 77 53</p>
      </div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex gap-5">
          <Modal close={close} isOpen={isOpen}>
            <Link className="text-red-600" to="/category/123">
              Category
            </Link>
            {isLoading ? (
              <Skeleton count={7} height={50} />
            ) : (
              <div className="grid grid-cols-3 gap-5">
                {data?.map((item) => (
                  <Link to={`/category/${item.name}`}>
                    <img src={item.img} alt="img" />
                    <p>{item.text}</p>
                  </Link>
                ))}
              </div>
            )}
          </Modal>
          <a href="#">
            <img src={logo} alt="img" />
          </a>
          <button onClick={open} className="bg-yellow-400 p-5">
            Каталог
          </button>
        </div>
        <Search />
        <Buttons />
      </div>
    </div>
  );
};
