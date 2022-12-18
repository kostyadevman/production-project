export { getArticleDetailsData } from './model/selectors/articleDetails';

export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { ArticleSortSelector } from './ui/ArticleSortSelector/ArticleSortSelector';
export {
    articleDetailsReducer,
    articleDetailsActions,
} from 'entities/Article/model/slice/articleDetailsSlice';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article } from './model/types/article';
export { ArticleView, ArticleSortField, ArticleType } from './model/consts/consts';
export type { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleListItem } from './ui/ArticleListItem/ArticleListItem';
export { ArticleTypeTabs } from './ui/ArticleTypeTabs/ArticleTypeTabs';
