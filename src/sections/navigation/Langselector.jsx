import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let countries = [
  { 
    code: "pt",
    name: "🇵🇹  Português",
    country_code: "pt",
  },
  {
    code: "en",
    name: "🇬🇧 English",
    country_code: "gb",
  },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <Menu
          as="div"
          className="pl-0 relative flex"
          aria-label="usermenu"
        >
          <Menu.Button
            aria-label="usermenu-button"
          >
          <button class="green box group relative px-5 py-1 overflow-hidden rounded-full bg-[var(--main)] md:text-md text-sm shadow border">
            <div class="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-white group-hover:text-[var(--main)] uppercase ">{t("Language")}</span>
          </button>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              aria-label="menu-item-container"
              className="z-10 w-[2rem] origin-top absolute -right-5 top-10  min-w-max mt-1 rounded-md shadow-lg glass-effect ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="px-1 py-1 " aria-label="menu-items">
                {countries.map((lng) => {
                  return (
                    <Menu.Item key={lng.code}>
                      <button
                        className={classNames(
                          "flex items-center space-x-2 px-4 py-2 text-sm cursor-pointer"
                        )}
                        onClick={() => i18n.changeLanguage(lng.code)} // used to change language that needs to be rendered
                        disabled={i18n.language === lng.code}
                      >
                        <span className="text-[#222] text-[1rem]">{lng.name}</span>
                      </button>
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default LanguageSelector;