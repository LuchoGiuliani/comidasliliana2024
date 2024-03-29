import type {Menu} from "./types";
const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTr3_AXLB-lk9-acoDieqmcqIjMeVMzYOS1wmlz7XZuIqnz_X3qgwfRzO9XUzfkKfOeXT2du0UOGGP/pub?output=tsv";

const api = {
  menu: {
    list: async (): Promise<Menu[]> => {
      return fetch(url, {
        next: {tags: ["matches"]},
      })
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [id, name, price, isActive, category] = row.trim().split("\t");

              return {
                id: parseInt(id),
                name,
                price: parseInt(price),
                isActive,
                category,
              };
            });
        });
    },
  },
};

export default api;
