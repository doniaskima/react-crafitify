import classNames from "classnames";
import * as React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IconButton } from "../IconButton";
import styles from "./Pagination.module.scss";

export type PaginationVariant = "primary" | "secondary";

export interface PaginationProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The current page to display for the Pagination
   */
  currentPage: number;
  /**
   * The callback fired when changing the page
   */
  onChangePage: (page: number) => void;
  /**
   * The amount of pages for the Pagination
   */
  pages: number;
  /**
   * The variant for the Pagination
   *
   * @default "secondary"
   */
  variant?: PaginationVariant;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    className,
    currentPage,
    onChangePage,
    pages,
    variant = "secondary",
    ...rest
  } = props;

  const decreasePage = () => {
    if (currentPage - 1 > 0) {
      onChangePage(currentPage - 1);
    }
  };

  const increasePage = () => {
    if (currentPage + 1 < pages + 1) {
      onChangePage(currentPage + 1);
    }
  };

  return (
    <nav
      className={classNames(styles.paginationContainer, className)}
      role="navigation"
      {...rest}
    >
      <IconButton
        className={classNames(styles.paginationIconButton)}
        content={<MdChevronLeft />}
        onClick={decreasePage}
        disabled={currentPage === 1}
        variant={variant}
      />
      <div className={styles.pagesButtonsContainer}>
        {currentPage - 2 > 0 ? (
          <IconButton
            className={classNames(
              styles.paginationIconButton,
              styles.ellipse
            )}
            tabIndex={-1}
            variant={variant}
          >
            ...
          </IconButton>
        ) : (
          <div style={{ height: "38px", width: "38px" }} />
        )}
        {Array.from({ length: pages }, (_, i) => i + 1).map(
          (page, index) => {
            if (
              (page === currentPage - 1 ||
                page === currentPage + 1) &&
              page !== 0
            ) {
              return (
                <IconButton
                  className={classNames(styles.paginationIconButton)}
                  key={index}
                  onClick={() => onChangePage(page)}
                  variant={variant}
                >
                  {page}
                </IconButton>
              );
            } else if (page === currentPage) {
              return (
                <IconButton
                  className={classNames(
                    page === 1 && styles.firstPage,
                    page === pages && styles.lastPage,
                    styles.paginationIconButton,
                    styles.currentPageIcon
                  )}
                  key={index}
                  tabIndex={-1}
                  variant={variant}
                >
                  {page}
                </IconButton>
              );
            } else {
              return null;
            }
          }
        )}
        {currentPage + 1 < pages ? (
          <IconButton
            className={classNames(
              styles.paginationIconButton,
              styles.ellipse
            )}
            tabIndex={-1}
            variant={variant}
          >
            ...
          </IconButton>
        ) : (
          <div style={{ height: "38px", width: "38px" }} />
        )}
      </div>
      <IconButton
        className={classNames(styles.paginationIconButton)}
        content={<MdChevronRight />}
        onClick={increasePage}
        disabled={currentPage === pages}
        variant={variant}
      />
    </nav>
  );
};
