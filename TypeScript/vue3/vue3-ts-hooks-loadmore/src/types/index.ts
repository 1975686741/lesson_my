export interface GlobalDataProps {
    columns: {
        data: ListProps<ColumnProps>;
        currentPage: number;
        total: number;
    }
}
// 类型传参
interface ListProps<p> {
    [id: string]: p;
}
export interface ColumnProps {
    _id: string;
    title: string;
    description: string;
}