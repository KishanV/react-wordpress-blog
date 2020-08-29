import { CategoryModel } from "./category-model";

export const CategoriesActionTypes = {
  Set: "Categories_Set",
};

export type CategoriesState = {
  list?: CategoryModel[];
};

export class CategoriesController {
  static value: CategoriesState = {
    list: undefined,
  };

  static reducer(state = CategoriesController.value, action: any) {
    if (action && action.type === CategoriesActionTypes.Set) {
      state = {
        ...state,
        list: action.list,
      };
    }
    return state;
  }

  static setData(list: CategoryModel[]) {
    return {
      type: CategoriesActionTypes.Set,
      list,
    };
  }
}
