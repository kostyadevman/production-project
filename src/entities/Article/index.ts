export { getArticleDetailsData } from './model/selectors/articleDetails';
export {
    articleDetailsReducer,
    articleDetailsActions,
} from './model/slice/articleDetailsSlice';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export {
    ArticleView,
    ArticleSortField,
    ArticleType,
    ArticleBlockType,
} from './model/consts/consts';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleListItem } from './ui/ArticleListItem/ArticleListItem';
