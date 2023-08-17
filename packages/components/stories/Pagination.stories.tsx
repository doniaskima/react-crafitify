import * as React from "react";
import { Typography } from "../Typography";
import { Pagination } from "../Pagination/Pagination";

export default {
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  title: "Components/Navigation/Pagination",
};

export const Default = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(3);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      pages={5}
      onChangePage={(page: number) => handleChange(page)}
    />
  );
};

export const WithOnePage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      pages={1}
      onChangePage={(page: number) => handleChange(page)}
    />
  );
};

export const WithTenPages = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      pages={10}
      onChangePage={(page: number) => handleChange(page)}
    />
  );
};

export const WithPageValue = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Typography
        type="h1"
        variant="secondary"
        weight="bold"
      >{`Page: ${currentPage}`}</Typography>
      <Pagination
        currentPage={currentPage}
        pages={10}
        onChangePage={(page: number) => handleChange(page)}
      />
    </>
  );
};

export const VariantPrimary = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      pages={10}
      onChangePage={(page: number) => handleChange(page)}
      variant="primary"
    />
  );
};
VariantPrimary.storyName = "Variant: Primary";

export const VariantSecondary = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(5);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      pages={10}
      onChangePage={(page: number) => handleChange(page)}
      variant="secondary"
    />
  );
};
VariantSecondary.storyName = "Variant: Secondary";
