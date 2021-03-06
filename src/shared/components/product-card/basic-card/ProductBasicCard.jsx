import './ProductBasicCard.scss';
import React from 'react';
import { FILTER_BY_CATEGORY } from '../../../actions/types';
import { useNavigate } from 'react-router-dom';
import { useProductFilter } from '../../../context/product-filter-context';

export const ProductBasicCard = ({ category }) => {
  const navigate = useNavigate();
  const { categoryName, imgUrl } = category;

  const { dispatch: productFilterDispatch } = useProductFilter();

  const onCategorySelection = () => {
    if (categoryName !== 'All Jewellery')
      productFilterDispatch({ type: FILTER_BY_CATEGORY, categoryName });
    navigate('/products');
  };
  return (
    <div className="card card--basic rounded-sm">
      <div className="card__information">
        <div>
          <img
            className="card__media card__media--tall"
            src={imgUrl}
            alt="poster"
          />
        </div>
      </div>
      <div className="card__action-stack">
        <button
          className="btn btn--primary-outline rounded-sm p-xs-all bold-font m-xs-all
                     card__action card__action--button"
          onClick={() => {
            onCategorySelection();
          }}
        >
          {categoryName.toUpperCase()}
        </button>
      </div>
    </div>
  );
};
