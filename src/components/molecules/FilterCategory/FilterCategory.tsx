import React, { FC } from "react";
import { Link } from "gatsby";

import { categoriesUsed } from "src/utils/categoriesUsed";
import { languageCheck } from "src/utils/languageCheck";
import { pathCheck } from "src/utils/pathCheck";

import { FilterCategoryStyle } from "./FilterCategory.style";
import { filterCategoryTexts } from "./FilterCategory.texts";
import { useFilterCategoryGraphQLData } from "./useFilterCategoryGraphQLData";

export const FilterCategory: FC<{ location: Location }> = ({
  location,
}): JSX.Element => {
  const counts = categoriesUsed();
  const categories = useFilterCategoryGraphQLData();
  const lang = languageCheck();

  return (
    <FilterCategoryStyle>
      <Link
        to="/1#blog"
        style={
          pathCheck(location) ? { color: "var(--colorActiveSecondary)" } : null
        }
      >
        <h2 className="title">{filterCategoryTexts.info[lang]}</h2>
      </Link>
      <div className="links">
        {categories.map((category) => {
          if (counts[category.name] > 0) {
            return (
              <Link
                to={`/${category.slug.current}/1#blog`}
                style={
                  pathCheck(location, category.slug.current)
                    ? { color: "var(--colorActiveSecondary)" }
                    : null
                }
                key={category.slug.current}
              >
                {category.name} ({counts[category.name]})
              </Link>
            );
          }
        })}
      </div>
    </FilterCategoryStyle>
  );
};
