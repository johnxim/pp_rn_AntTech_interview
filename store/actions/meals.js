import Category from '../../models/category'

export const SET_MEALS = 'SET_MEALS';

export const getMeals = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://gist.githubusercontent.com/trandongtam/21b7633d121e6e72d1afcc603f484fe5/raw/f9e8558f62d854715fc63fc9eafaafb78d68e7c8/data.json'
            );

            if (!response.ok) {
                throw new Error('Failed!');
            }

            const resData = await response.json();
            // console.log(resData);
            const loadedCat = [];

            for (const key in resData) {
                // console.log(resData[key].id);
                loadedCat.push(
                    new Category(
                        resData[key].id,
                        resData[key].name,
                        resData[key].items,
                    )
                );
            }
            // console.log(loadedCat);
            dispatch({ type: SET_MEALS, meals: loadedCat });
        } catch (err) {
            throw err;
        }
    };
};
