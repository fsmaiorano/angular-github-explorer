/**
 * @Method: Return a paginated list
 * @Param Items - Array with Items to paginate
 * @Param PageActual - Actual Page of pagination
 * @Param LimitItems - Maximum amount of items
 * @Return Paginated Object
 */

export function Pagination(
  items: any[],
  pageActual: number,
  limitItems: number
) {
  let result: any = [];
  let totalPage: number = Math.ceil(items.length / limitItems);
  let count: number = pageActual * limitItems - limitItems;
  let delimiter: number = count + limitItems;

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i]);
      }
      count++;
    }
  }

  return result;
}
